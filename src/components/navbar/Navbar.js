import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div>
                <NavLink className={cl.item} to="/profile"> Profile </NavLink>
            </div>
            <div>
                <NavLink className={cl.item} to="/dialogs">Dialogs</NavLink>
            </div>
            <div>
                <NavLink className={cl.item} to="/users">Users</NavLink>
            </div>
            <div>
                <NavLink className={cl.item} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={cl.item} to="/music">Music</NavLink>
            </div>
            <div>
                Settings
            </div>

        </div>
    )
}

export default Navbar