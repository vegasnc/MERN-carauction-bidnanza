import React from 'react';
import temp from "./images/temp.png";
import { Typography, Divider, Box } from '@mui/material';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Chip from "@mui/material/Chip";

export default function ContactUS() {

    return (
        <div
            style={{
                backgroundColor: "white"
            }}
        >
            <img src={temp} />
            <Box
                sx={{ backgroundColor: 'black' }}
                className="ps-10 pe-10 pt-8 pb-8" >
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg="1" />
                        <MDBCol sm="12" lg="3" className="pb-8">
                            <h4 className='white-text'>About Bidnanza</h4>
                            <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <ul className="list-unstyled mb-0">
                                <li><a className="grey-text" href="#">Contact US</a></li>
                                <li><a className="grey-text" href="#">About</a></li>
                                <li><a className="grey-text" href="#">Our Fees</a></li>
                                <li><a className="grey-text" href="#">Terms & Conditions</a></li>
                            </ul>
                        </MDBCol>
                        <MDBCol sm="12" lg="3" className="pb-8">
                            <h4 className='white-text'>Contact</h4>
                            <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <ul className="list-unstyled mb-0">
                                <li> <a className="grey-text" href="#">
                                    <Chip icon={<DirectionsCarIcon fontSize='small' />} label="New York, US" style={{ color: "grey" }} /></a>
                                </li>
                                <li> <a className="grey-text" href="#">
                                    <Chip icon={<LocalPostOfficeRoundedIcon fontSize='small' />} label="info@Bidnanza.com" style={{ color: "grey" }} /></a></li>
                                <li> <a className="grey-text" href="#">
                                    <Chip icon={<PhoneRoundedIcon fontSize='small' />} label="+ 01 234 567 88" style={{ color: "grey" }} /></a> </li>

                            </ul>
                        </MDBCol>
                        <MDBCol sm="12" lg="4" className="pb-8">
                            <h4 className='white-text'>Follow Us</h4>
                            <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto"></hr>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"> <a href="#"> <FacebookIcon htmlColor='white' fontSize='large'/> </a> </li>
                                <li className="list-inline-item"> <a href="#"> <TwitterIcon htmlColor="#1da1f3" fontSize='large'/> </a> </li>
                                <li className="list-inline-item"> <a href="#"> <GoogleIcon htmlColor="#ff382b" fontSize='large'/> </a> </li>
                                <li className="list-inline-item"> <a href="#"> <LinkedInIcon htmlColor="#0077b5" fontSize='large'/> </a> </li>
                            </ul>
                        </MDBCol>
                        <MDBCol lg="1" />
                    </MDBRow>
                </MDBContainer>
                <Typography textAlign={'center'} className='white-text'>All right reserved © 2023 All cars for sale online | Bidnanza</Typography>
            </Box >
        </div>
    );
}