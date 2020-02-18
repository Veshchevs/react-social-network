import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";
import HeaderContainer from "./components/header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/Preloader";


const App = (props) => {

    useEffect(props.initializeApp, []);

    if (!props.initialized) {
        return <Preloader/>
    }
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Content/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose(
    withRouter, connect
    (mapStateToProps, {initializeApp}))
(App);
