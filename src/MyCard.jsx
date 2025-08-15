import React, { useState } from 'react';
import './MyCard.css';

function MyCard() {
  const [imgSrc, setImgSrc] = useState(
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

  const changeImage = () => {
    setImgSrc(
      'https://images.unsplash.com/photo-1534653299134-96a171b61581?q=80&w=675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );
  };

  return (
    <div className="card">
      <img
        src={imgSrc}
        alt="Product"
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h1>My First Card</h1>
      <p>This is inside my Card</p>
      <button onClick={ changeImage}>Change Image</button>
    </div>
  );
}

export default MyCard;
