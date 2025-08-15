import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import DownDrop from './DownDrop';
import ProductCard from './ProductCard';
import NavBar from './Navbar';

function BootstrapComp() {
  return (
    <div style={{ padding: '25px' }}>
      <h1>React-Bootstrap</h1>
      <NavBar />
      <br />
      <Alert variant="danger">We are learning React Js & Bootstrap</Alert>
      <DownDrop />
      <br />
      <br />
      <ProductCard />
    </div>
  );
}

export default BootstrapComp;
