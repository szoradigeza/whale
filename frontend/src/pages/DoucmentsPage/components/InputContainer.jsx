import React, { useEffect, useState } from 'react';
import Card from '../../../components/MainCard/MainCard';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DocumentInput from './DocumentInput';
import ActiveDataChange from './ActiveDataChange';
import useToggle from '../../../hooks/useToggle';
import { connect, useDispatch, useSelector } from 'react-redux';
import { documentConstants } from '../../../redux/constants';
import { changeInput, resetInput } from '../../../redux/actions';

function InputContainer() {
   const dispatch = useDispatch();
   const documentState = useSelector((state) => state.documentReducer);
   const { register, handleSubmit } = useForm({});
   const onSubmit = (data) => {
      dispatch(changeInput('test'));
      console.log(data);
   };

   const formOnChangeHandler = (e) => {
      console.log(e.target.checked);
      const { name, value, checked } = e.target;
      e.target.type == 'checkbox'
         ? dispatch(changeInput({ name, value: checked }))
         : dispatch(changeInput({ name, value }));
   };

   return (
      <Col xs={4}>
         <Card title="Személyes adatok">
            <Form
               onSubmit={handleSubmit(onSubmit)}
               onChange={formOnChangeHandler}
            >
               <Form.Group controlId="documentForm.name">
                  <Form.Label>Születési név:</Form.Label>
                  <Form.Control
                     size="sm"
                     placeholder="Születési név"
                     {...register('name')}
                  />
                  <Form.Label>Törzsszám:</Form.Label>
                  <Form.Control
                     size="sm"
                     placeholder="Törzsszám"
                     {...register('regNumber')}
                  />
               </Form.Group>
               <Form.Group controlId="documentForm.birtPlace">
                  <Form.Label>Születési hely:</Form.Label>
                  <Form.Control
                     size="sm"
                     placeholder="Születési hely"
                     {...register('birtPlace')}
                  />
               </Form.Group>
               <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Születési idő:</Form.Label>
                  <Form.Control
                     size="sm"
                     type="date"
                     {...register('birthDate')}
                  />
               </Form.Group>
               <Form.Group>
                  <Form.Label>Változtatni kivánt adat:</Form.Label>
                  <Form.Check
                     label="Név/Lakcím változás"
                     name="personalDataChange"
                     {...register('personalDataChange')}
                  />
                  <Form.Check
                     label="Bankszámlaváltozás"
                     {...register('bankCardChange')}
                     value={true}
                     name="bankCardChange"
                  />
                  <Form.Check
                     label="SZÉP kártya bankszámlaszám változás"
                     {...register('szepCardChange')}
                     value={true}
                     name="szepCardChange"
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
               <ActiveDataChange />
               <Button type="submit">Küldés</Button>
            </Form>
         </Card>
      </Col>
   );
}

export default InputContainer;
