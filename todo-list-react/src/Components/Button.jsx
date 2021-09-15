import React from 'react';
import './Button.css';

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="add-button">
      {children}
    </button>
  );
}
