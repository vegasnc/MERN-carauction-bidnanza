import React from "react";
import bannerImg from "./images/banner1.jpg";
import logoComImg from "./images/logo_com.png";
import logoBookimg from "./images/logo_book.jpg";
import TextField from '@mui/material/TextField';
import AutocompleteInput from "../components/AutoCompleteInput";
import SelectInput from "../components/SelectInput";

export default function Header() {
    let auctionType = [
        { value: 0, label: "Alive Now" },
        { value: 1, label: "No Reverse" },
        { value: 2, label: "Buy It Now" }
    ]
    let location = [
        { value: 0, label: "US Only" },
        { value: 1, label: "North America" },
        { value: 2, label: "Europe" },
        { value: 3, label: "Asia" }
    ]
    let mileageOptions = [
        { value: 0, label: "Less than 1,000 miles" },
        { value: 1, label: "Less than 5,000 miles" },
        { value: 2, label: "Less than 7,500 miles" },
        { value: 3, label: "Less than 10,000 miles" },
        { value: 4, label: "Less than 20,000 miles" },
        { value: 5, label: "Less than 50,000 miles" },
        { value: 6, label: "Less than 75,000 miles" },
        { value: 7, label: "Less than 100,000 miles" },
        { value: 8, label: "Less than 125,000 miles" },
        { value: 9, label: "Less than 150,000 miles" },
        { value: 10, label: "Less than 175,000 miles" },
        { value: 11, label: "Less than 200,000 miles" }
    ];

    let vehicleTitle = [
        { value: 0, label: "Clean" },
        { value: 1, label: "Flood, Water Damage" },
        { value: 2, label: "Rebuilt,Rebuildable&Reconstructed" },
        { value: 3, label: "Salvage" }
    ]

    let bodyType = [
        { value: 0, label: "Cab & Chassis" },
        { value: 1, label: "Convertible" },
        { value: 2, label: "Coupe" },
        { value: 3, label: "Crew Cab Pickup" },
        { value: 4, label: "Extended Cab Pickup" },
        { value: 5, label: "Fastback" },
        { value: 6, label: "Limousine" },
        { value: 7, label: "Minivan" },
        { value: 8, label: "Sedan" },
        { value: 9, label: "Standard Cab Pickup" },
        { value: 10, label: "SUV" },
        { value: 11, label: "Wagon" }
    ]

    let fuelType = [
        { value: 0, label: "Diesel" },
        { value: 1, label: "Electric" },
        { value: 2, label: "Flex Fuel Vehicle" },
        { value: 3, label: "Gasoline" },
        { value: 4, label: "Hybrid-Electric" }
    ]

    return (
        <div>
            <div className="cover-image sptb-1 bg-background" data-image-src={bannerImg} style={{ background: `url(${bannerImg}) center center` }}>
                <div className="header-text1 mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-12">
                                <div className="text-white mt-lg-8 mb-5">
                                    <h1 className="mb-3 display-3"><span className="font-weight-bold">Fair & Honest Auctions</span><br />by former Government<br /><span className="font-weight-bold">Auctioneer & Author</span></h1>
                                    <img src={logoBookimg} height="200px" />
                                    <img src={logoComImg} height="200px" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-12">
                                <div className="card mb-0 shadow-none">
                                    <div className="card-body">
                                        <h2 className="mb-4">Search</h2>
                                        <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <SelectInput label="Auction Type" options={auctionType} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <TextField label="Auction Name" variant="outlined" size="small" fullWidth />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <SelectInput label="Location" options={location} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group search-cars1  ">
                                                    <AutocompleteInput />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group search-cars1 ">
                                                    <SelectInput label="Vehicle Mileage" options={mileageOptions} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group search-cars1 ">
                                                    <SelectInput label="Vehicle Title" options={vehicleTitle} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <TextField fullWidth label="Min Price" variant="outlined" size="small" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <TextField fullWidth label="Max Price" variant="outlined" size="small" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group search-cars1 ">
                                                    <SelectInput label="Body Type" options={bodyType} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group search-cars1 ">
                                                    <SelectInput label="Fuel Type" options={fuelType} />
                                                </div>
                                            </div>
                                        </div>
                                        <a className="btn btn-primary btn-lg btn-block" href="javascript:void(0);">Search</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* /header-text */}
            </div>
        </div>
    );
}