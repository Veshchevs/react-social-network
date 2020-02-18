import React, {useEffect} from 'react';
import cl from './Profile.module.css';
import MyPosts from "./posts/MyPosts";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {
    const {
        meUserId,
        profile, getProfileThunk,
        status, updateStatusThunk, getStatusThunk,
        addPost, updateNewPostText, newPostText, posts
    } = props || {};

    const userId = props.match.params.userId;

    useEffect(() => {
        getProfileThunk && getProfileThunk(userId || meUserId);
        getStatusThunk && getStatusThunk(userId || meUserId);
    }, [userId, meUserId, getProfileThunk, getStatusThunk]);

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={cl.item}>
            <div className={cl.avatar}>
                <img src={profile.photos.large} alt={props.alt}/>

                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>


            </div>
            <ProfileStatus status={status}
                           updateStatusThunk={updateStatusThunk}/>

            <MyPosts addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     newPostText={newPostText} posts={posts}/>
        </div>
    )
};

export default Profile