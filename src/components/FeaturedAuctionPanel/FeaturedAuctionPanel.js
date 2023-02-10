import React from 'react';
import { Typography, Divider, Box } from '@mui/material';
import Slider from "../SliderSection/Slider";

export default function FeaturedAuctionPanel() {
    // let betIcon = "https://storage.googleapis.com/production-hostgator-v1-0-6/266/252266/JE0q6lKy/a9d8e37960324f319987ba9696d538dd";

    return (
        <Box
            sx={{ backgroundColor: '#dee2e6' }}
            className="ps-10 pe-10 pt-8 pb-8" >
            <div className="section-title center-block text-center"> 
                <h2>Featured Auctions</h2> 
            </div>
            <Slider direc={true} />
        </Box>
    );
}