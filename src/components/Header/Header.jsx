import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src = {require('../../assets/images/img15.png')} alt = {'img15'}/>
        <div className={classes.loginBlock}>
            {props.isAuth ? <div className={classes.login}> {props.login} <button onClick={props.logout}>Log out</button>  </div>
                : <NavLink to={'login'}>Login</NavLink> }
        </div>
    </header>
};


export default Header;