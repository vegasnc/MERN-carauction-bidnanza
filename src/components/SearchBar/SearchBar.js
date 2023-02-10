import React from "react";
import Grid from '@mui/material/Grid';
import SearchBox from "../SearchBox/SearchBox";
import AutoCompleteInput from "../AutoCompleteInput";
import { MDBInputGroup, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function SearchBar() {

    return (
        <div>
            {/* <MDBContainer>
                <MDBRow>
                    <MDBCol md='8' offsetMd='2'> */}
                        <SearchBox />
                    {/* </MDBCol>
                </MDBRow>
            </MDBContainer> */}
        </div>
    );
}