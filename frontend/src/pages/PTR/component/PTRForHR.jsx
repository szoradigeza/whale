import React from 'react';
import { Button, CardImg, Col, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Aux } from '../../../components/_Aux';
import Card from '../../../components/MainCard/MainCard';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import { ApiService } from '../../../services/';
import ProjectList from './ProjectList';

class ProjectTimeRegForHR extends React.Component {
   //TODO Rename
   constructor() {
      super();
      this.state = {
         selectedFile: null,
      };
   }

   onChangeHandler = (event) => {
      this.setState({
         selectedFile: event.target.files[0],
         loaded: 0,
      });
   };

   fileSendHandler = async () => {
      const fd = new FormData();
      fd.append('photo', this.state.selectedFile, this.state.selectedFile.name);
      console.log(fd);
      const resp = ApiService.getInstance().uploadFile(
         '/ptr/upload-project-list',
         fd
      );
      /* try {
         const response = await fetch('http://localhost:8080/ptr/upload-project-list', {
            method: 'POST',
            body: fd,
         });

         if (!response.ok) {
            throw new Error(response.statusText);
         }

         console.log(response);
      } catch (err) {
         console.log(err);
      }*/
   };

   render() {
      //TODO upload btn change.
      const { selectedFile } = this.state;
      return (
         <Aux>
            <Col>
               <Card title="Upload project list">
                  <p>Project list upload for the month.</p>
                  <div>
                     <input
                        type="file"
                        name="file"
                        onChange={this.onChangeHandler}
                        accept=".xlsx"
                     />
                     <Button
                        onClick={this.fileSendHandler}
                        disabled={!selectedFile}
                     >
                        Upload
                     </Button>
                  </div>
               </Card>
               <Card title="Modify project lists">
                  <ProjectList />
               </Card>
            </Col>
         </Aux>
      );
   }
}

export default ProjectTimeRegForHR;
