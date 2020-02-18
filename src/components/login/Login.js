import React from "react"
import cl from './Login.module.css';
import {Field, reduxForm} from "redux-form"
import {connect} from 'react-redux'
import {loginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {Input} from "../common/formsControls/FormControls";
import {maxLength15, maxLength40, require} from "../common/validators/ValidatorsForm";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                       validate={[maxLength40, require]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
                       validate={[maxLength15, require]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            {props.error && <div className={cl.formError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formdata) => {
        props.loginThunk(formdata.email, formdata.password, formdata.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginThunk})(Login)