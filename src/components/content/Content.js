import React from 'react';
import cl from './Content.module.css';
import {Route} from "react-router-dom";
import UsersContainer from "../users/UsersContainer";
import Login from "../login/Login";
import {withSuspense} from "../../hoc/withSuspense";
//import DialogsContainer from "../dialogs/DialogsContainer";

const ProfileContainer = React.lazy(() => import("../profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("../dialogs/DialogsContainer"));

const Content = () => {
    return (
        <div className={cl.content}>
            <Route path={'/profile/:userId?'}
                   render={withSuspense(ProfileContainer)}/>

            <Route path={'/dialogs'}
                   render={withSuspense(DialogsContainer)}/>

            <Route path={'/users'} render={() => <UsersContainer/>}/>
            <Route path={'/login'} render={() => <Login/>}/>

        </div>
    )
}

export default Content