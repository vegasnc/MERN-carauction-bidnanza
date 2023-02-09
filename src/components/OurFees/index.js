import React from 'react';
import fee_back from './images/fee_back.png';
import temp from "./images/temp.png";
import re_back from "./images/re_back.png";
import left_back from "./images/left_fee_back.png";
import right_back from "./images/right_fee_back.png";
import car from "./images/car.png";
import { Typography, Divider, Box } from '@mui/material';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export default function AliveAuctionsPanel() {

    return (
        <div style={{
            background: "white"
        }}>
            <img src={temp} />
            <div
                style={{
                    background: "black"
                }}
            >
                <MDBContainer>
                    <MDBRow>
                        <MDBCol 
                            sm="1" md="2" lg="3"
                            style={{
                                backgroundRepeat: 'repeat-y',
                                backgroundImage: `url(${ left_back })`,
                                backgroundPosition: "right",
                                backgroundSize: 'auto'
                            }} />
                        <MDBCol 
                            sm="10" md="8" lg="6"
                            // style={{
                            //     backgroundRepeat: 'no-repeat',
                            //     backgroundImage: `url(${ fee_back })`,
                            //     backgroundSize: 'auto'
                            // }}
                            >
                            <Typography
                                variant="h4"
                                color="white"
                                gutterBottom
                                textAlign={'center'} >
                                Our Fees
                            </Typography>

                            <Typography variant="body1" color={'white'} gutterBottom>
                                <strong>SELLERS</strong> pay a <strong>$75</strong> listing fee. That’s it no other seller fees.  If your car does not sell relist is <strong>FREE</strong>.
                                Selling more than 1 vehicle we discount the second listing and so on. Additional listings the 2nd listing and more the seller pays <strong>$50</strong>  listing fee.
                                More than 5 cars contact us for additional savings!
                            </Typography>
                            <br />
                            <Typography variant="body1" color={'white'} gutterBottom>
                                <strong>BUYERS</strong> pay a <strong>5%</strong> Buyers premium on the final sale price with a minimum of <strong>$40</strong> and capped at <strong>$4,500</strong> no matter how high the car sells for.
                            </Typography>
                            <br />
                            <Typography variant="body1" color={'white'} gutterBottom>
                                From time to time we may offer <strong>SALE</strong> prices on our listing fee.
                                Any sale will be time sensitive and only available when listed.
                            </Typography>
                            <br />
                            <Typography variant="body1" color={'white'} gutterBottom>
                                We will be launching live in person Auctions!  We will notify you by email and on our site when that service begins.
                            </Typography>
                            <br />
                            <Typography variant="body1" color={'white'} gutterBottom>
                                <strong>Bid</strong> and <strong>Sell</strong> with confidence we always have our users best interests in mind.  We are confident we will exceed your expectations.
                            </Typography>
                        </MDBCol>
                        <MDBCol 
                            sm="1" md="2" lg="3"
                            style={{
                                backgroundRepeat: 'repeat-y',
                                backgroundImage: `url(${ right_back })`,
                                backgroundPosition: "left",
                                backgroundSize: 'auto'
                            }} />
                    </MDBRow>
                </MDBContainer>
            </div>
        </div >


    );
}