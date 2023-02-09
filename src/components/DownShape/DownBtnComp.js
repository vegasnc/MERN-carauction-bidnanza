import React from "react";
import svgImage from "./svg_img.png";
import SearchBar from "../SearchBar/SearchBar";

export default function DownBtnComp(props) {
    const slogunStyle = {
        margin: 'auto',
        height: "170px",
        backgroundImage: `url(${svgImage})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
    }
    return (
        <div>
            <div style={{ height: 40 }}></div>
            <div style={ slogunStyle }>
                <h3 style={{ color: "white", textAlign: "center", paddingTop: "60px" }}>
                    Fair & Honest Auctions by former Government Auctioneer & Author
                </h3>
                {/* <SearchBar/> */}
            </div>
            {/* <img src={svgImage}/> */}
        </div>
    );
}
