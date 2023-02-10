import React from "react";
import DownBtnComp from "../components/DownShape/DownBtnComp";
import FeaturedAuctionPanel from "../components/FeaturedAuctionPanel/FeaturedAuctionPanel";
import AliveAuctionsPanel from "../components/AliveAuctionsPanel/AliveAuctionsPanel";
import OurFees from "../components/OurFees";
import Footer from "../components/Footer";
import Header from "./Header";
import logoWord from "./images/bidnanza_word.jpg";
import logoIcon from "./images/bidnanza_logo.png";

function Layout(props) {

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
                                                    <img src={logoWord} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
                                    <div className="top-bar-right">
                                        <ul className="custom ">
                                            <li> <a href="#" className="text-dark"><i className="fa fa-user me-1" />
                                                <span>SingUp</span></a> </li>
                                            <li> <a href="#" className="text-dark"><i className="fa fa-sign-in me-1" />
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

                    <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: '86.9744px' }}>
                        <div className="header-style horizontal-main  bg-dark-transparent clearfix">
                            <div className="horizontal-mainwrapper container clearfix"> {/*Nav*/}
                                <nav className="horizontalMenu clearfix d-md-flex">
                                    <div className="outsidebg" />
                                    <ul className="horizontalMenu-list" style={{
                                        fontWeight: "bold",
                                        fontSize: "12pt"
                                    }}>
                                        <li aria-haspopup="true"><span className="horizontalMenu-click"><i className="horizontalMenu-arrow fa fa-angle-down" /></span><a href="javascript:void(0);">Auctions <span className="fa fa-caret-down m-0" /></a>
                                            <ul className="sub-menu">
                                                <li aria-haspopup="true"><a href="#">Alive now</a></li>
                                                <li aria-haspopup="true"><a href="#">No reverse</a></li>
                                            </ul>
                                        </li>
                                        <li aria-haspopup="true"><a href="#">Add an auctoin </a></li>
                                        <li aria-haspopup="true"><a href="#">Our fees</a></li>
                                        <li aria-haspopup="true"><a href="#">AboutUs<span className="horizontalarrow" /></a></li>
                                        <li aria-haspopup="true" className="d-lg-none mt-5 pb-5 mt-lg-0"> <span><a className="btn btn-orange" href="ad-posts.html"><i className="fa fa-car text-white me-1" /> Sell Your Car</a></span>
                                        </li>
                                    </ul>
                                    <ul className="mb-0">
                                        <li aria-haspopup="true" className="mt-5 d-none d-lg-block "> <span><a className="btn btn-green ad-post " href="ad-posts.html"><i className="fa fa-car text-white me-1" /> Sell Your Car</a></span>
                                        </li>
                                    </ul>
                                </nav> {/*Nav*/}
                            </div>
                        </div>
                    </div>
                </div>
                <Header />
                {/* <DownBtnComp /> */}
                <FeaturedAuctionPanel />
                <AliveAuctionsPanel />
                <Footer />
            </div>
        </div >
    );
}

export default Layout;