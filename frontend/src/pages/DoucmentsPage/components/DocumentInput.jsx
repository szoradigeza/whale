import React from 'react';
import { Col, Form } from 'react-bootstrap';

function DocumentInput({ label, inputName, register, type, defaultValue }) {
   return (
      <Form.Group controlId="exampleForm.ControlInput1">
         <Form.Label>{label}</Form.Label>
         <Form.Control
            placeholder={label}
            defaultValue={defaultValue}
            {...register(inputName)}
         />
      </Form.Group>
   );
}

export default DocumentInput;
