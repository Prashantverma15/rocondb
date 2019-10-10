import React from 'react';
import { deflate } from 'zlib';
import {Modal,Button} from 'react-bootstrap';
import Axios from 'axios'

let additionalCarbon = 0;
const handleAddCO2 = (e) =>{
    e.preventDefault();
    if(document.getElementById("method").value === 'personal'){
        console.log("In the personal");
        additionalCarbon = document.getElementById("units").value * 0.097;
    }
    else if(document.getElementById("method").value === 'pages'){
        console.log("In the pages");
        additionalCarbon = ((document.getElementById("units").value)%20 + 1 ) * 0.010;
    }

    Axios.post("http://104.211.201.12:3000/newTransaction",
    { "fromUser":"5d9e4fe8c91666199cbca4be", "toUser": "5d9deabb6d99342be48160fe", "amount": additionalCarbon }
    )
}

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
                <Modal.Body>
                <form style={{backgroundColor:'white',padding:'1rem'}} onSubmitCapture={props.onHide}  onSubmit={(e)=>handleAddCO2(e)}>
                    <label color="green">
                        WHERE YOU CONSUMED CO2
                    </label>
                    <br />
                    <select id="method">
                        <option selected value=''>Choose any method</option>
                        <option value="personal">By Personal Transport</option>
                        <option value="pages">By Pages</option>
                    </select>
                    <br />
                    <br />
                    <label >
                        NUMBER OF UNITS(km/pages)
                    </label>
                    <br />
                    <input id="units" type="number" name="units" placeholder="Your units" style={{borderBottom:'solid 1px',marginBottom:"5px"}}/>

                    <br />
                    <input type="submit" value="Submit"  style={{backgroundColor:'red',color:'white',padding:'1rem',borderRadius:'10%'}}/>
                </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="btn btn-primary" variant="secondary" onClick={props.onHide}>
                    Close
                 </Button>
                </Modal.Footer>
              </Modal>
    )
   }
export default Missing;