import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    // <CustomMap
    //   googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"
    //   loadingElement={<div style={{ height: `100%` }} />}
    //   containerElement={<div style={{ height: `100vh` }} />}
    //   mapElement={<div style={{ height: `100%` }} />}
    // />
    <div>
    <MDBCol>
      <MDBCard style={{ padding: "3% 3% 3% 3%" }}>
        <MDBCardImage className="img-fluid" src="https://inhabitat.com/wp-content/blogs.dir/1/files/2014/04/P4P-Infographic-copy.png" waves />
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>

          </MDBCardText>
          {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard style={{ padding: "3% 3% 3% 3%" }}>
        <MDBCardImage className="img-fluid" src="https://www.environmentalleader.com/wp-content/uploads/2014/07/Chicago-building-retrofits.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>
            
          </MDBCardText>
          {/* <MDBBtn href="#"></MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol>
      <MDBCard style={{ padding: "3% 3% 3% 3%" }}>
        <MDBCardImage className="img-fluid" src="https://media.treehugger.com/assets/images/2018/12/CLT-save-world.jpg.860x0_q70_crop-scale.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle></MDBCardTitle>
          <MDBCardText>
   
          </MDBCardText>
          {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
  );
}

export default Maps;
