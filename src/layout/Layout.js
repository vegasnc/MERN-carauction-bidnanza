import React from "react";
import DownBtnComp from "../components/DownShape/DownBtnComp";
import FeaturedAuctionPanel from "../components/FeaturedAuctionPanel/FeaturedAuctionPanel";
import AliveAuctionsPanel from "../components/AliveAuctionsPanel/AliveAuctionsPanel";
import OurFees from "../components/OurFees";
import Footer from "../components/Footer";

function Layout(props) {

    let logoIcon = "https://storage.googleapis.com/production-hostgator-v1-0-6/266/252266/JE0q6lKy/1f52c39d3264494e86e6c3c743e57d34";

    return (
        <div>
            <div className="horizontalMenucontainer">
                <div className="header-main">
                    <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: '34.2812px'}}>
                        <div className="horizontal-header clearfix " style={{ backgroundColor: "black"  }}>
                            <div className="container">
                                <a id="horizontal-navtoggle" className="animated-arrow"><span /></a>
                                <span className="smllogo">
                                    <img src={logoIcon} width={250} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: '88px' }}>
                        <div className="horizontal-main  bg-dark-transparent clearfix" style={{ backgroundColor: "black" }}>
                            <div className="horizontal-mainwrapper  container clearfix">
                                <div className="desktoplogo">
                                    <a href="#">
                                        <img src={logoIcon} alt="" />
                                    </a>
                                </div>
                                <nav className="horizontalMenu clearfix d-md-flex">
                                    <div className="outsidebg" />
                                    <ul className="horizontalMenu-list">
                                        <li aria-haspopup="true"><span className="horizontalMenu-click"><i className="horizontalMenu-arrow fa fa-angle-down" /></span><a href="javascript:void(0);" className="active">Auctions <span className="fa fa-caret-down m-0" /></a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#">Alive now</a></li>
                                                <li aria-haspopup="true"><a href="#">No reverse</a></li>
                                                <li aria-haspopup="true"><a href="#">Buy it now</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#">Add an auction<span className="horizontalarrow" /></a></li>
                                        <li aria-haspopup="true"><a href="#">Our fees</a></li>
                                        <li aria-haspopup="true"><a href="#">FAQ</a></li>
                                        <li aria-haspopup="true"><a href="#">Terms & Conditions</a></li>
                                        <li aria-haspopup="true"><a href="#">About US</a></li>
                                        <li aria-haspopup="true"><a href="#">SignIn</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <DownBtnComp />
                <FeaturedAuctionPanel />
                <AliveAuctionsPanel />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;