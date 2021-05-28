import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import logo from '../../../assets/images/continental-logo.svg';

function DocumentPreview({ documentHtml }) {
   const documentState = useSelector((state) => state.documentReducer);
   const [bDate, setbDate] = useState('');

   useEffect(() => {
      documentState.birthDate && setbDate(getDate());
   }, [documentState.birthDate]);

   const getDate = () => {
      const [year, month, day] = documentState.birthDate.toString().split('-');
      return { day, month, year };
   };
   return (
      <Col xs={8}>
         <Card>
            <Card.Header>Személyes adatok változása előnézet</Card.Header>
            <StyledImg src={logo} alt="Conti Logo" />
            <DocumentTitle>
               Nyilatkozat <br></br> Személyi adatokban bekövetkezett
               változásról
            </DocumentTitle>
            <StyledSpan>
               Alulírott <b>{documentState.name}</b> törzsszam{' '}
               <b>{documentState.regNumber}</b>
            </StyledSpan>
            <StyledSpan>
               <b>{documentState.birtPlace}</b>, {bDate.year} év, {bDate.month}{' '}
               hó,
               {bDate.day} nap
            </StyledSpan>
            <br></br>
            {documentState.personalDataChange && (
               <>
                  <BoldUnderLineSpan>Név/Lakcím változás</BoldUnderLineSpan>
                  <StyledSpan>
                     Névváltozás estén az új név: <b>{documentState.newName}</b>
                  </StyledSpan>
                  <StyledSpan>
                     Állandó lakcím/lakóhely: <b>{documentState.newAddress}</b>
                  </StyledSpan>
                  <StyledSpan>
                     Ideiglenes lakcím/tartózkodási hely:
                     <b>{documentState.newTemporaryAddress}</b>
                  </StyledSpan>
                  <StyledSpan>
                     (Munkába járás költségtérítés igénybe vétele esetén kérjük
                     a CAP1013534 számú szabályzat szerint nyilatkozatot leadni)
                  </StyledSpan>
                  <StyledSpan>
                     Iskolai illetve szakmai végzettség:
                     <b>{documentState.newSchool}</b>
                  </StyledSpan>
               </>
            )}
            {documentState.bankCardChange && (
               <>
                  <br></br>
                  <BoldUnderLineSpan>Bankszámlaváltozás</BoldUnderLineSpan>
                  <StyledSpan>
                     Kijelentem hogy -hótol a munkabér átutalását az alábbi
                     bankszámlaszámra kérem.
                  </StyledSpan>
                  <StyledSpan>
                     Bank neve: <b>{documentState.bankName}</b>
                  </StyledSpan>
                  <StyledSpan>
                     Számlaszám: <b>{documentState.newBankCardNumber}</b>
                  </StyledSpan>
               </>
            )}
            {documentState.szepCardChange && (
               <>
                  <br></br>
                  <BoldUnderLineSpan>
                     OTP SZÉP kártya bankszámlaszám változás
                  </BoldUnderLineSpan>
                  <StyledSpan>
                     Vendéglátás számlaszám:{' '}
                     <b>{documentState.newHospitalityNumber}</b>
                  </StyledSpan>
                  <StyledSpan>
                     Szállás számlaszám:{' '}
                     <b>{documentState.newAccomodationNumber}</b>
                  </StyledSpan>
                  <StyledSpan>
                     Szabadidő számlaszám:{' '}
                     <b>{documentState.newLeisureTimeNumber}</b>
                  </StyledSpan>
               </>
            )}
            <br></br>
            <BoldSpan>
               Munka és büntetőjogi felelőségem tudatában kijelentem, hogy a
               fenti adatok valóságnak megfelelnek. Tudomásul veszem hogy a
               valótlan adatközlésből származó károkért felelősségel tartozom.
               Tudomásul veszel hogy a valótlan adatsztolgáltatás munkajogi
               szankciókat vonhat maga után.
            </BoldSpan>
            <BoldSpan>
               Továbbá kijelentem hogy a fentiekben megadott bankszámlaszám nem
               hitelszámla vagy más olyan jellegű számla, amelyre való utalással
               a munkavállaló a munkabérével a befizetési napon nem tud
               rendelkezni
            </BoldSpan>
            <BoldSpan>
               Felhívom a figyelmét, hogy a fenti nyilatkoztatásból adódóan ön
               elismeri, hogy amennyiben kára keletkezik, annak következményeit
               ön viseli.
            </BoldSpan>
            <FlexContainer>
               <div>
                  <StyledSpan>Dátum</StyledSpan>
               </div>
               <div>
                  <StyledSpan>HR osztály</StyledSpan>
               </div>
               <div>
                  <StyledSpan>HR osztály</StyledSpan>
               </div>
            </FlexContainer>
         </Card>
      </Col>
   );
}

export default DocumentPreview;

const DocumentTitle = styled.h2`
   font-size: 16px;
   font-weight: bold;
   text-align: center;
   margin-bottom: 2em;
`;
const StyledSpan = styled.span`
   font-size: 13px;
   color: black;
   margin-left: 4em;
   margin-top: 2px;
   margin-right: 2em;
`;
const BoldSpan = styled(StyledSpan)`
   font-weight: bold;
   margin-top: 0px;
`;

const BoldUnderLineSpan = styled(StyledSpan)`
   font-weight: bold;
   text-decoration: underline;
   margin-top: 0px;
`;

const FlexContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 70px;
   margin-right: 20px;
`;
const StyledImg = styled.img`
   width: 40%;
   margin-left: 2em;
`;
