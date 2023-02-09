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

function CarCardVertical({ title, date, price, imgUrl, imgLink }) {

  return (
    <MDBCol sm="12" md="6" lg="3" >
      <MDBCard>
        <MDBCardImage src={imgUrl} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>
            <span className="text-white bg-success">No Reverse</span>
          </MDBCardText>
          <MDBCardText>
            <strong className='text-muted'>Current Bid: {price}</strong>
          </MDBCardText>
          <MDBCardText>
            <strong className='text-muted'>Ends In: {date}</strong>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

// Setting default values for the props of ReportsBarChart
CarCardVertical.defaultProps = {
  color: "dark", // "primary", "secondary", "info", "success", "warning", "error", "dark"
};

export default CarCardVertical;

