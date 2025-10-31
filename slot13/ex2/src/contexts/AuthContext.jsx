import React, { createContext, useReducer, useContext } from 'react';

// --- MOCK DATA (thay thế API call) ---
const mockAccounts = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: '123456',
    role: 'admin',
    status: 'active'
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    password: '123456',
    role: 'user',
    status: 'active'
  },
  {
    id: 3,
    username: 'user2',
    email: 'user2@example.com',
    password: '123456',
    role: 'user',
    status: 'locked'
  }
];

// --- INITIAL STATE ---
const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
};

// --- REDUCER ---
function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}

// --- CONTEXT ---
const AuthContext = createContext();

// --- PROVIDER COMPONENT ---
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Hàm xử lý login
  const login = (username, password) => {
    const account = mockAccounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (!account) {
      dispatch({ type: 'LOGIN_FAIL', payload: 'Invalid username or password' });
      return false;
    }

    if (account.role !== 'admin') {
      dispatch({ type: 'LOGIN_FAIL', payload: 'Only admin can log in' });
      return false;
    }

    if (account.status !== 'active') {
      dispatch({ type: 'LOGIN_FAIL', payload: 'Account is locked' });
      return false;
    }

    dispatch({ type: 'LOGIN_SUCCESS', payload: account });
    return true;
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// --- CUSTOM HOOK ---
export const useAuth = () => useContext(AuthContext);
