import React from 'react';
import classes from './Header.module.css';
import SimpleMenu from "./LoginMenu/SimpleMenu";

const Header = (props) => {
    return (
        <header className={classes.headerBlock}>
            <img src="https://i.pinimg.com/originals/4b/97/66/4b9766f6286956791025792d12af2af0.png" alt="logo"/>
            <div className={classes.loginBlock}>
                <SimpleMenu userinfo={props.userinfo}/>
            </div>
        </header>
    );
}

export default Header;