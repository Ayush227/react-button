import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default function ActiveExample() {
  return (
    <div>
      <Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" active>
        Button
      </Button>
    </div>
  );
}
