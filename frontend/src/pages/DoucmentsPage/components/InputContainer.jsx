import React, { useState } from 'react';
import Card from '../../../components/MainCard/MainCard';
import { Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DocumentInput from './DocumentInput';
import ActiveDataChange from './ActiveDataChange';
import useToggle from '../../../hooks/useToggle';

function InputContainer() {
   const { register, handleSubmit, formState } = useForm();
   const onSubmit = (data) => console.log(data);
   const [isPersonalDataActive, toggleIsPersonalDataActive] = useToggle(false);
   const [isBankCardActive, toggleIsBankCardActive] = useToggle(false);
   const [isSzepCardActive, toggleIsSzepCardActive] = useToggle(false);

   React.useEffect(() => {
      console.log('touched', formState.touchedFields);
   }, [formState]);

   const handleOnChangePersonalDataCheckbox = () => {
      toggleIsPersonalDataActive();
   };
   const handleOnChangeBankCardCheckbox = () => {
      toggleIsPersonalDataActive();
   };
   const handleOnChangeSzepCardCheckbox = () => {
      toggleIsPersonalDataActive();
   };

   return (
      <Col xs={4}>
         <Card title="Személyes adatok">
            <Form onSubmit={handleSubmit(onSubmit)}>
               <Form.Group controlId="documentForm.name">
                  <Form.Label>Születési név:</Form.Label>
                  <Form.Control
                     size="sm"
                     placeholder="Születési név:"
                     defaultValue="Születési név"
                     {...register('name')}
                  />
               </Form.Group>
               <Form.Group controlId="documentForm.birtPlace">
                  <Form.Label>Születési hely:</Form.Label>
                  <Form.Control
                     size="sm"
                     placeholder="Születési hely:"
                     defaultValue="Születési hely"
                     {...register('birtPlace')}
                  />
               </Form.Group>
               <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Születési idő:</Form.Label>
                  <Form.Control
                     size="sm"
                     type="date"
                     placeholder="Születési idő:"
                     {...register('birthDate')}
                  />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Változtatni kivánt adat:</Form.Label>
                  <Form.Check
                     label="Név/Lakcím változás"
                     {...register('personalDataChange')}
                     onChange={handleOnChangePersonalDataCheckbox}
                  />
                  <Form.Check
                     label="Bankszámlaváltozás"
                     {...register('bankCardChange')}
                     name="bankCardChange"
                     onChange={handleOnChangeBankCardCheckbox}
                  />
                  <Form.Check
                     label="SZÉP kártya bankszámlaszám változás"
                     {...register('szepCardChange')}
                     name="szepCardChange"
                     onChange={handleOnChangeSzepCardCheckbox}
                  />
               </Form.Group>
               {/*<Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Example multiple select</Form.Label>
                  <Form.Control as="select" multiple>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                  </Form.Control>
               </Form.Group>
               <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
               </Form.Group>
                  <ActiveDataChange /> */}
               <ActiveDataChange isPersonalDataActive={isPersonalDataActive} />
               <input type="submit" />
            </Form>
         </Card>
      </Col>
   );
}

export default InputContainer;
