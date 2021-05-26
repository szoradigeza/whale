import React, { useState } from 'react';
import DocumentPreview from './components/DocumentPreview';
import styled from 'styled-components';
import InputContainer from './components/InputContainer';
import { Row } from 'react-bootstrap';

export default function DocumentPage({ documentName }) {
   return (
      <>
         <Row>
            <InputContainer />
            <DocumentPreview documentHtml="random" />
         </Row>
      </>
   );
}
