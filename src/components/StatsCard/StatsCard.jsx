import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class StatsCard extends Component {
  render() {
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
              <div className="row" style={{padding:'0.5rem'}}>
              
              <button class= "btn btn-danger" style={{marginLeft:'10px',visibility:"{this.props.isButton}?'hidden':'visible'"}}>Add CO2 </button>
              <button class= "btn btn-info" style={{marginLeft:'80px'}}>Missing CO2 </button>
              <button class= "btn btn-success" style={{marginLeft:'90px'}}>Refresh </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
