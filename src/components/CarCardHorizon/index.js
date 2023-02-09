import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import { Schedule } from '@mui/icons-material';

function CarCard({ title, description, date, price, imgUrl, imgLink }) {

  return (
    <MDBCard className='mb-0'>
      <MDBRow className='g-0'>
        <MDBCol md='6' className='p-0'>
          <MDBCardImage src={imgUrl} alt='...' />
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody style={{ marginLeft: "-100px" }}>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText >
              {/* className="text-truncate" */}
              {description}
            </MDBCardText>
            <MDBCardText>
              <strong className='text-muted' style={{ fontSize: "12pt" }}>Current Bid: {price}</strong>
            </MDBCardText>
            <MDBCardText>
              <strong className='text-muted' style={{ fontSize: "12pt" }}>Ends In: {date}</strong>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

// Setting default values for the props of ReportsBarChart
CarCard.defaultProps = {
  color: "dark", // "primary", "secondary", "info", "success", "warning", "error", "dark"
  description: "",
};

export default CarCard;

