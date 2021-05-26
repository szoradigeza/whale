import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

function ActiveDataChange(props) {
   useEffect(() => {
      console.log(props);
   }, [props]);
   return (
      <>
         {props.isPersonalDataActive && (
            <Form.Group controlId="documentForm.personalDataChanges">
               <Form.Label>Új név:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Új név:"
                  defaultValue="Új név"
               />
            </Form.Group>
         )}
         <Form.Group controlId="documentForm.bankCardChange">
            <Form.Label>Bank neve:</Form.Label>
            <Form.Control
               size="sm"
               placeholder="Bank neve:"
               defaultValue={props.isPersonalDataActive}
            />
         </Form.Group>
         <Form.Group controlId="documentForm.bankCardChange">
            <Form.Label>{props.isPersonalDataActive}</Form.Label>
            <Form.Control
               size="sm"
               placeholder="Vendéglátás számlaszáma:"
               defaultValue="Számlaszám"
            />
         </Form.Group>
      </>
   );
}

export default ActiveDataChange;
