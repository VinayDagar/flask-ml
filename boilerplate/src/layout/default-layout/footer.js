import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const footer  = (props) => {
    return (
        <footer className="main-footer">
            <div className="pull-right hidden-xs">Version 1.0</div>
            Copyright © {new Date().getFullYear()} Boilerplate. All rights reserved.
        </footer>
    )
}
export default footer