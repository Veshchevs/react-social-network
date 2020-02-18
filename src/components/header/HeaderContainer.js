import Header from "./Header";
import {connect} from 'react-redux'
import {logoutThunk} from "../../redux/authReducer";




const mapStateToProps = (state)=>{

    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}




const HeaderContainer = connect (mapStateToProps,{logoutThunk})(Header)

export default HeaderContainer