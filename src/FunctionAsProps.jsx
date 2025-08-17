import React from 'react';

function FunctionAsProps({ showName, name, password }) {
  return (
    <div>
      <button onClick={() => showName(name)}>Show Name</button>
      <button onClick={password}>Show Password</button>
    </div>
  );
}

export default FunctionAsProps;
