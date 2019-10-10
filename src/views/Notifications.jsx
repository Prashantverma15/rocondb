import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import {UserCard}  from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        {/* <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Notifications</h4>
              <p className="category">
                Handcrafted by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Igor Prado
                </a>
                . Please checkout the{" "}
                <a
                  href="#"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  full documentation.
                </a>
              </p>
            </div>
            <div className="content">
              <Row>
                <Col md={6}>
                  <h5>Notifications Style</h5>
                  <Alert bsStyle="info">
                    <span>This is a plain notification</span>
                  </Alert>
                  <Alert bsStyle="info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>This is a notification with close button.</span>
                  </Alert>
                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon.
                    </span>
                  </Alert>
                  <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </Alert>
                </Col>
                <Col md={6}>
                  <h5>Notification states</h5>
                  <Alert bsStyle="info">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Info - </b> This is a regular notification made with
                      bsStyle="info"
                    </span>
                  </Alert>
                  <Alert bsStyle="success">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Success - </b> This is a regular notification made
                      with bsStyle="success"
                    </span>
                  </Alert>
                  <Alert bsStyle="warning">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Warning - </b> This is a regular notification made
                      with bsStyle="warning"
                    </span>
                  </Alert>
                  <Alert bsStyle="danger">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span>
                      <b> Danger - </b> This is a regular notification made with
                      bsStyle="danger"
                    </span>
                  </Alert>
                </Col>
              </Row>
              <br />
              <br />
              <div className="places-buttons">
                <Row>
                  <Col md={6} mdOffset={3} className="text-center">
                    <h5>
                      Notifications Places
                      <p className="category">Click to view notifications</p>
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={3}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("tl")}
                    >
                      Top Left
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("tc")}
                    >
                      Top Center
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("tr")}
                    >
                      Top Right
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} mdOffset={3}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("bl")}
                    >
                      Bottom Left
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("bc")}
                    >
                      Bottom Center
                    </Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      bsStyle="default"
                      block
                      onClick={() => this.props.handleClick("br")}
                    >
                      Bottom Right
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Grid> */}
        <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                name="Sahil Kumar"
                userName="sahil.kumar@gmail.com"
                description={
                  <span>
                    <b> 9599420788 </b>
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" href="www.facebook.com" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
      </div>
    );
  }
}

export default Notifications;
