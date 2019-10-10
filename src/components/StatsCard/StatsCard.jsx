import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from 'axios';
import {Modal,Button,ButtonToolbar} from 'react-bootstrap';
import Add from '../Modals/Add';
import Missing from '../Modals/Missing';

export class StatsCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false,
      show2: false,
    }
    this.setShow = this.setShow.bind(this);
    this.setShow2 = this.setShow2.bind(this);
  }

  setShow(boo){
    this.setState({
      show:boo,
    },function(v){
      console.log(this.state.show);
    })
  }

  setShow2(boo){
    this.setState({
      show2:boo,
    },function(v){
      console.log(this.state.show2);
    })
  }

  render() {
    const handleClose = () => this.setShow(false);
    const handleShow = () => this.setShow(true);
    const handleClose2 = () => this.setShow2(false);
    const handleShow2 = () => this.setShow2(true);
    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                {this.props.bigIcon}
              </div>
            </Col>
            <Col xs={7}>
              <div className="numbers">
                <p>{this.props.statsText}</p>
                {this.props.statsValue}
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {this.props.statsIcon} {this.props.statsIconText}
              <div className="row" style={{ padding: '5px' }}>
                <ButtonToolbar>
                <button class="btn btn-danger" style={{ marginLeft: '10px' }} variant="primary" onClick={handleShow}>Add CO2 </button>
                <button class="btn btn-info" style={{ marginLeft: '80px' }} variant="primary" onClick={handleShow2}>Missing CO2 </button>
                <button class="btn btn-success" style={{ marginLeft: '90px' }} onClick={this.props.click}>Refresh </button>
                </ButtonToolbar>
              </div>
              <Add show={this.state.show} onHide={handleClose}/>
              <Missing show={this.state.show2} onHide={handleClose2}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
