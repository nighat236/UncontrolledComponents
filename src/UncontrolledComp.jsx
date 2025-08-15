import React, { useRef } from 'react';

function UncontrolledComp() {
  const user = useRef();
  const pass = useRef();

  function formWithuseRef(event) {
    event.preventDefault();
    const username = user.current.value;

    const password = pass.current.value;

    console.log('UserName:', username );
    console.log('password:', password)
  }

  return (
    <div>
      <h1>Uncontrolled Component Using useRef</h1>
      <form onSubmit={formWithuseRef} action="">
        <input type="text" ref={user} placeholder="Enter User Name" />
        <br />
        <br />
        <input type="password" ref={pass} placeholder="Enter password" />
        <br />
        <br />
        <button>Submit User Using</button>
      </form>
    </div>
  );
}

export default UncontrolledComp;

// function UncontrolledComp() {
//   function formHandler(event) {
//     event.preventDefault();
//     const username = document.querySelector('#user').value;
//     console.log('Username:', username);
//     const Password = document.querySelector('#pass').value;
//     console.log('Password:', Password);
//   }

//   return (
//     <div>
//       <h1>UnControlled Componenet using Query Selector</h1>
//       <form onSubmit={formHandler} action="">
//         <input type="text" id="user" placeholder="Enter Username" />
//         <br />
//         <br />
//         <input type="password" id="pass" placeholder="Enter Password" />
//         <br />
//         <br />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UncontrolledComp;
