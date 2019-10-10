import React from 'react';
import { Modal, Button } from 'react-bootstrap';

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
                <form>
                    <label color="green">
                        METHOD OF SAVING
                    </label>
                    <br />
                    <select>
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
                    <input type="text" name="units" />

                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary" variant="secondary" onClick={props.onHide}>
                    Close
                 </Button>
                <Button className="btn btn-success" variant="primary" onClick={props.onHide}>
                    Save Changes
                 </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Add;