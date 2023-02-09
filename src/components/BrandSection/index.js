import React from "react";
import brand1 from "./images/1.png";
import brand2 from "./images/2.png";
import brand3 from "./images/3.png";
import brand4 from "./images/4.png";
import brand5 from "./images/5.png";
import brand6 from "./images/6.png";
import brand7 from "./images/7.png";
import brand8 from "./images/8.png";
import brand9 from "./images/9.png";
import brand10 from "./images/10.png";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function BrandSection() {
    return (
        <div className='container brand-section-mb' >
            <OwlCarousel items={8}
                className="owl-theme"
                loop
                nav={false}
                dots={false}
                margin={8} >
                <div className="owl-each-item"><img className="img" src={brand1} /></div>
                <div className="owl-each-item"><img className="img" src={brand2} /></div>
                <div className="owl-each-item"><img className="img" src={brand3} /></div>
                <div className="owl-each-item"><img className="img" src={brand4} /></div>
                <div className="owl-each-item"><img className="img" src={brand5} /></div>
                <div className="owl-each-item"><img className="img" src={brand6} /></div>
                <div className="owl-each-item"><img className="img" src={brand7} /></div>
                <div className="owl-each-item"><img className="img" src={brand8} /></div>
                <div className="owl-each-item"><img className="img" src={brand9} /></div>
                <div className="owl-each-item"><img className="img" src={brand10} /></div>
            </OwlCarousel>
        </div>
    );
}