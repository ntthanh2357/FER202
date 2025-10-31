import React, { useReducer } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import ConfirmModal from './ConfirmModal';

const initialState = {
  user: { username: '', password: '' },
  errors: {},
  showModal: false,
  systemError: null,
  isLoading: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        user: { ...state.user, [action.field]: action.value },
        systemError: null // Clear system error when user types
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.message }
      };
    case 'CLEAR_ERRORS':
      const { [action.field]: removed, ...rest } = state.errors;
      return {
        ...state,
        errors: rest
      };
    case 'SET_SHOW_MODAL':
      return {
        ...state,
        showModal: true,
        isLoading: false
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
        user: { username: '', password: '' },
        errors: {},
        systemError: null
      };
    case 'RESET_FORM':  
      return initialState;
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      };
    case 'SET_SYSTEM_ERROR':
      return {
        ...state,
        systemError: action.error,
        isLoading: false
      };
    default:
      return state;
  }
}

function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FIELD', field: name, value });
    // Kiểm tra lỗi cho từng trường
    if (value.trim() === '') {
      dispatch({ type: 'SET_ERRORS', field: name, message: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
    } else {
      dispatch({ type: 'CLEAR_ERRORS', field: name });
    }
  };

  // Xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (state.user.username.trim() === '') {
      newErrors.username = 'Username is required';
    }
    if (state.user.password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    //cập nhật lỗi
    if (Object.keys(newErrors).length > 0) {
      for (const field in newErrors) {
        dispatch({ type: 'SET_ERRORS', field, message: newErrors[field] });
      } 
      return;
    }

    // Nếu không có lỗi validation, thực hiện đăng nhập
    try {
      dispatch({ type: 'SET_LOADING', isLoading: true });
      
      // Giả lập gọi API đăng nhập (thay thế bằng API thật của bạn)
      const response = await loginAPI(state.user);
      
      if (response.success) {
        dispatch({ type: 'SET_SHOW_MODAL' });
      } else {
        dispatch({ 
          type: 'SET_SYSTEM_ERROR', 
          error: response.message || 'Invalid username or password' 
        });
      }
    } catch (error) {
      dispatch({ 
        type: 'SET_SYSTEM_ERROR', 
        error: 'An error occurred during login. Please try again later.' 
      });
    }
  };

  // API đăng nhập với proper headers
  const loginAPI = async (credentials) => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"'
        },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: 'An error occurred during login. Please try again.' 
      };
    }

    // Fallback mock response (remove this when connecting to real API)
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     if (credentials.username === 'admin' && credentials.password === 'admin') {
    //       resolve({ success: true });
    //     } else {
    //       resolve({ 
    //         success: false, 
    //         message: 'Invalid username or password'
    //       });
    //     }
    //   }, 1000);
    // });
  };

  // Đóng modal và reset form
  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Login Form with useReducer</h3>
            </Card.Header>
            <Card.Body>
              {state.systemError && (
                <Alert variant="danger" className="mb-3">
                  {state.systemError}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={state.user.username}
                    onChange={handleChange}
                    isInvalid={!!state.errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {state.errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={state.user.password}
                    onChange={handleChange} 
                    isInvalid={!!state.errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">  
                    {state.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                {/* Button Login và Cancel */}
                <div className="d-flex gap-2">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="flex-fill"
                    disabled={state.isLoading}
                  >    
                    {state.isLoading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </Button>
                  <Button 
                    variant="secondary" 
                    type="button" 
                    className='flex-fill' 
                    onClick={() => dispatch({ type: 'RESET_FORM' })}
                  >
                    Cancel
                  </Button>
                </div>  
              </Form>   
            </Card.Body>
          </Card>
        </Col>
      </Row>  
      
      {/* Modal hiển thị khi đăng nhập thành công */}
      <ConfirmModal  
        show={state.showModal} 
        title="Login Successful" 
        message={`Welcome, ${state.user.username}! You have successfully logged in!`} 
        onConfirm={handleCloseModal}
        onHide={handleCloseModal} 
      />
    </Container>
  );
}

export default LoginForm;
