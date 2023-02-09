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
                    <div className="top-bar p-3" data-select2-id={24}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-sm-4 col-7">
                                    <div className="top-bar-left d-flex" data-select2-id={23}>
                                        <div className="clearfix">
                                            <div className="header-search-logo d-none d-lg-block desktoplogo">
                                                <a className="header-logo" href="#">
                                                    <img src={logoIcon} alt="" />
                                                </a>
                                                <a className="header-logo-dark" href="#">
                                                    <img src={logoIcon} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
                                    <div className="top-bar-right">
                                        <ul className="custom ">
                                            <li> <a href="register.html" className="text-dark"><i className="fa fa-user me-1" />
                                                <span>SingUp</span></a> </li>
                                            <li> <a href="login.html" className="text-dark"><i className="fa fa-sign-in me-1" />
                                                <span>SignIn</span></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: '34.275px' }}>
                        <div className="horizontal-header clearfix " style={{ width: '1457.6px' }}>
                            <div className="container">
                                <a id="horizontal-navtoggle" className="animated-arrow"><span /></a> 
                                <span className="smllogo"> 
                                    <img src={logoIcon} width={120} alt="" /> 
                                </span> 
                                <span className="smllogo-dark"> 
                                    <img src={logoIcon} width={120} alt="" /> 
                                </span> 
                                <a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true" /></a> 
                            </div>
                        </div>
                    </div>

                    <div id="sticky-wrapper" className="sticky-wrapper is-sticky" style={{ height: '80px' }}>
                        <div className="horizontal-main bg-dark-transparent clearfix" style={{ width: '1457.6px', position: 'fixed', top: '0px', zIndex: 'inherit' }}>
                            <div className=" header-style horizontal-mainwrapper container clearfix"> {/*Nav*/}
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
                                </nav> {/*Nav*/}
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