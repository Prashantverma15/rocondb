import React from 'react';
import { deflate } from 'zlib';
import {Modal,Button} from 'react-bootstrap';

const Missing = (props)=>{
    const handleClose2 = () => this.setShow2(false);
    const handleShow2 = () => this.setShow2(true);
    return (
        <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={props.show} animation={false} 
              >
                <Modal.Header closeButton>
                  <Modal.Title style={{textAlign:'center'}}>Mention Consumed CO2</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading missing CO2</Modal.Body>
                <Modal.Footer>
                  <Button className="btn btn-primary" variant="secondary" onClick={props.onHide}>
                    Close
                 </Button>
                  <Button className="btn btn-success" variant="primary" onClick={props.onHhide}>
                    Save Changes
                 </Button>
                </Modal.Footer>
              </Modal>
    )
   }
export default Missing;