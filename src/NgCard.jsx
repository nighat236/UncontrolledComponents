import React, { useState } from 'react';

function NgCard({img,title,design}) {
  const [imgSrc, setImgSrc] = useState(
    'https://images.unsplash.com/photo-1611598935678-c88dca238fce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );
  

  return (
    <div style={{display:"flex",flexDirection:"column",gap: "10px",padding:'10px',marginLeft:'5px',boxShadow: "0 1px 3px rgba(0,0,0,0.15")
}}>
      <h1 style={{color: 'red'}} className={design}>Gold Bangales</h1>
       
     
      <img src={imgSrc} alt="NG Card" width="300"/>
      <button style={{marginTop:"10px", alignItems: "center" , cursor:"pointer",width:'100px', padding:'2px',backgroundColor:'red',borderRadius:'5px'}}>Buy Now</button>
     
    </div>
   
  );
   
};

export default NgCard;
