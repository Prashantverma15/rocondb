import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Axios from 'axios';

let additionalCarbon = 0;
const handleAddCO2 = (e) =>{
    e.preventDefault();
    if(document.getElementById("method").value === 'public'){
        additionalCarbon = document.getElementById("units").value * 0.097;
    }
    else if(document.getElementById("method").value === 'bicycle'){
        additionalCarbon = document.getElementById("units").value *  0.230   }
    else if(document.getElementById("method").value === 'e-statements'){
        additionalCarbon = ((document.getElementById("units").value)%20 + 1 ) * 0.010;
    }

    Axios.post("http://192.168.43.151:3000/newTransaction",
    { "fromUser":"5d9deabb6d99342be48160fe", "toUser": "5d9e4fe8c91666199cbca4be", "amount": additionalCarbon }
    )
}

const Add = (props) => {
    console.log("hello", props.onHide);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add CO2</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form style={{backgroundColor:'white',padding:'1rem'}} onSubmitCapture={props.onHide} onSubmit={(e)=>handleAddCO2(e)} > 
                    <label color="green">
                        METHOD OF SAVING
                    </label>
                    <br />
                    <select id="method">
                        <option value=''>Choose any method</option>
                        <option value="public">By Public Transport</option>
                        <option value="bicycle">By Bicycle</option>
                        <option selected value="e-statements">Printing E-Statements</option>
                    </select>
                    <br />
                    <br />
                    <label >
                        NUMBER OF UNITS(km/pages)
                    </label>
                    <br />
                    <input id="units" type="number" name="units" placeholder="Your units" style={{borderBottom:'solid 1px',marginBottom:"5px"}}/>

                    <br />
                    <input type="submit" value="Submit"  style={{backgroundColor:'green',color:'white',padding:'1rem',borderRadius:'10%'}}/>
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
export default Add;