import {connect} from 'react-redux'
import Profile from "./Profile";
import {
    addPost,
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk,
} from "../../redux/profilePageReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        status: state.profilePage.status,
        meUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};

const ProfileContainer = compose(connect(mapStateToProps, {
        addPost, getProfileThunk,
        getStatusThunk, updateStatusThunk
    }),
    withRouter
    , withAuthRedirect)
(Profile);

export default ProfileContainer