import React from 'react';
import cl from './Users.module.css';
import {NavLink} from "react-router-dom";



 export const User = (props) => {
       return (
        <div className={cl.item}>

            <NavLink to={"/profile/" + props.user.id}>
                <img className={cl.item}  alt={props.alt} src={props.user.photos.small
                != null
                    ? props.user.photos.small
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFKVKjW3oHGcYaDd0rjQvEgK0bZxw0HvXZ7GHqNXQ96xPMoCuig&s"}/>
            </NavLink>
            <div>
                {props.user.name}
            </div>
            <div>
                {props.user.id}
            </div>
            <div>
                {props.user.status}
            </div>
            <div>
                {props.user.followed
                    ? <button className={cl.button} onClick={() => {
                        props.unfollowThunk(props.user.id)
                    }}>unfollow</button>
                    : <button className={cl.button} onClick={() => {
                        props.followThunk(props.user.id)
                    }}>follow</button>
                }
            </div>
        </div>
    )
}

export default User