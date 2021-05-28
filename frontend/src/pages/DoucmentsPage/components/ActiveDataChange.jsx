import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ActiveDataChange() {
   const documnetState = useSelector((state) => state.documentReducer);
   return (
      <>
         {documnetState.personalDataChange && (
            <Form.Group controlId="documentForm.personalDataChanges">
               <Form.Label>Új név:</Form.Label>
               <Form.Control size="sm" placeholder="Új név" name="newName" />
               <Form.Label>Állandó lakcím</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Állandó lakcím"
                  name="newAddress"
               />
               <Form.Label>Ideiglenes lakcím:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Ideiglenes lakcím"
                  name="newTemporaryAddress"
               />
               <Form.Label>Iskolai/szakmai végzettség:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Iskolai/szakmai végzettség"
                  name="newSchool"
               />
            </Form.Group>
         )}
         {documnetState.bankCardChange && (
            <Form.Group controlId="documentForm.bankCardChange">
               <Form.Label>Bank neve:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Bank neve"
                  name="bankName"
               />
               <Form.Label>Új számlaszám:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Új számlaszám"
                  name="newBankCardNumber"
               />
            </Form.Group>
         )}
         {documnetState.szepCardChange && (
            <Form.Group controlId="documentForm.szepCardChange">
               <Form.Label>Vendéglátás számlaszám:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Vendéglátás számlaszám"
                  name="newHospitalityNumber"
               />
               <Form.Label>Szállás számlaszám:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Szállás számlaszám"
                  name="newAccomodationNumber"
               />
               <Form.Label>Szabadidő számlaszám:</Form.Label>
               <Form.Control
                  size="sm"
                  placeholder="Szabadidő számlaszám"
                  name="newLeisureTimeNumber"
               />
            </Form.Group>
         )}
      </>
   );
}

export default ActiveDataChange;
