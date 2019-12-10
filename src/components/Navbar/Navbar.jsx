import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

// let c1 = "item";
// let c2 = "active";

// let classesNew = `${classes.c1} ${classes.c2}`;

let friendsimg = <img src={require("../../assets/images/img16.jpg")} alt="img16"/>;

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/users" activeClassName={classes.active}> Users</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}> Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to="/dialogs" activeClassName={classes.active}> Dialogs</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/News" activeClassName={classes.active}> News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Music" activeClassName={classes.active}> Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Settings" activeClassName={classes.active}> Settings</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to="/Friends" activeClassName={classes.active}> Friends</NavLink>
            <div>
            {friendsimg}
            {friendsimg}
            {friendsimg}
            </div>

        </div>

        <div>
            <div className={classes.Devel}>Developed by Ergashov Xakimjon </div>
        </div>
        <div>

        </div>

        <div>

        </div>
    </nav>
};
export default Navbar;