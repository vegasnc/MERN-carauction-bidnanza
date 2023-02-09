import React from 'react';
import logo1 from './images/1.webp';
import logo2 from './images/2.webp';
import logo3 from './images/3.webp';
import logo4 from './images/4.webp';
import 'react-slideshow-image/dist/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
import CarCardHorizon from '../CarCardHorizon';
import './slider.css';

export default function Slideshow(direc) {

    const fadeImages = [logo1, logo2, logo3, logo4];

    const description = "This 2008 Ferrari 430 Scuderia is powered by a 4.3-liter DOHC V8 paired with a six-speed F1 automated transaxle and is finished in Nero Daytona with dual stripes over red leather and black cloth. The car is equipped with 19″ Scuderia wheels, an electronically controlled limited-slip differential, Brembo carbon-ceramic brake rotors, carbon-framed seats, and Scuderia Ferrari fender shields. The car has spent time in Michigan, California, Ohio, and Pennsylvania and the selling dealer purchased it in 2022. Work performed in 2022 reportedly included fluid changes and replacing the battery, tires, and F1 pump, shift actuator, and accumulator. This 430 Scuderia has 4,900 miles and is now offered in Washington State by the selling dealer with service records, a clean Carfax report, and a clean Pennsylvania title."

    return (
        <div className='slide-container'>
            <Carousel variant="dark" infiniteLoop indicators={false}>
                {
                    fadeImages.map((sliderImg) =>
                        <Carousel.Item>
                            <div className='each-fade'>
                                <CarCardHorizon
                                    title="4,900-Mile 2008 Ferrari 430 Scuderia"
                                    description={description}
                                    date="2/7/2023"
                                    price="$75,000"
                                    imgUrl={sliderImg}
                                    imageLink="#" />

                            </div>
                        </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
}
