import React, { useEffect } from 'react';

function DisplayData({ black, red }) {
  useEffect(() => {
    console.log('Black Value:', black);
  }, [black]);
  return (
    <div>
      <h1>Value of Black: {black}</h1>
      <h1 style={{ color: 'red' }}>Value of Red: {red}</h1>
    </div>
  );
}

export default DropDown;
