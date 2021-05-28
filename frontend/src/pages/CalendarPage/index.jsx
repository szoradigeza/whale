import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Aux } from '../../components/_Aux';
import Card from '../../components/MainCard/MainCard';
import { Can } from '../../components/Can/can';

class CalendarPage extends React.Component {
   constructor(props) {
      super();
   }

   render() {
      return (
         <Aux>
            <Col>
               <Card title="Naptár">
                  <h1>Lorem ipsum</h1>
                  <Can rqAbility="change_datee">
                     <Button>Test-button</Button>
                  </Can>
               </Card>
            </Col>
         </Aux>
      );
   }
}

export default CalendarPage;
