import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';

function LightSwitch() {
  // --- 1️ Định nghĩa reducer ---
  const lightReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return { isLightOn: !state.isLightOn };  // đảo trạng thái
      case 'TURN_ON':
        return { isLightOn: true };               // bật đèn
      case 'TURN_OFF':
        return { isLightOn: false };              // tắt đèn
      default:
        return state;
    }
  };

  // --- 2️ Khởi tạo state ban đầu ---
  const initialState = { isLightOn: false };

  // --- 3️ Gọi useReducer ---
  const [state, dispatch] = useReducer(lightReducer, initialState);

  // --- 4️ Style chung ---
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  // --- 5️ Render giao diện ---
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Công Tắc Đèn (Reducer)</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Đèn hiện đang: {state.isLightOn ? 'Bật' : 'Tắt'}
      </p>

      <Button
        onClick={() => dispatch({ type: 'TOGGLE' })}
        style={{
          ...buttonStyle,
          background: state.isLightOn ? 'red' : 'green',
          color: 'white',
        }}
      >
        {state.isLightOn ? 'Tắt Đèn' : 'Bật Đèn'}
      </Button>
    </div>
  );
}

export default LightSwitch;
