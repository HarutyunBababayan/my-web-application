import React from 'react'
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {

    return (
        <nav className={classes.navBlock}>
            {props.state.map(navBar =>
                <div className={`${classes.item} ${classes.active}`}>
                    <NavLink key={navBar.id} to={'/' + navBar.href}  activeClassName={`${classes.active}`}
                             id={navBar.id}> {navBar.navName} </NavLink>
                </div>
            )}
        </nav>
    )
}

export default NavBar;