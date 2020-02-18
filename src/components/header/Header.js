import React from 'react';
import cl from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {

    return (

        <div className={cl.item}>
            <div className={cl.login}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutThunk}>log out</button></div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
            <div>
                <img alt={''} src="http://brend-logo.ru/assets/976fb447/images/cssp_logo.png"/>
            </div>
        </div>
    )
}

export default Header