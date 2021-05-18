import React from 'react'
import NavBar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.navBarPage.navBarName
    }
}

const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer;