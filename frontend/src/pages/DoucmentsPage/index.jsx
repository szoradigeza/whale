import React, { useEffect, useState } from 'react';
import DocumentPreview from './components/DocumentPreview';
import styled from 'styled-components';
import InputContainer from './components/InputContainer';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { resetInput } from '../../redux/actions';

export default function DocumentPage() {
   const dispatch = useDispatch();
   useEffect(() => {
      return () => {
         dispatch(resetInput());
      };
   }, []);
   return (
      <>
         <Row>
            <InputContainer />
            <DocumentPreview documentHtml="random" />
         </Row>
      </>
   );
}
