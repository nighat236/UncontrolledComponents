import React from 'react';
import flagImg from './assets/my-flag.png'; // Correct import from src/assets

function IndependenceDayCard() {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '2px solid green',
        borderRadius: '15px',
        textAlign: 'center',
        backgroundColor: "green",
        color: "white",


        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
      }}
    >
      <img
        src={flagImg}
        alt="Pakistani Flag"
        style={{
          width: '100px',
          height: 'auto',
          marginBottom: '15px',
        }}
      />
      <h1 style={{ color: 'white' }}>Happy Independence Day!</h1>
      <p style={{ color: "white" }}>
        Wishing everyone peace, prosperity, and unity.
      </p>
    </div>
  );
}

export default IndependenceDayCard;
