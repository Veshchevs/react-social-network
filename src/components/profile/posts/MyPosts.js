import cl from './MyPosts.module.css';
import React from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../../common/formsControls/FormControls";
import {maxLength15, require} from "../../common/validators/ValidatorsForm";


const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={cl.item}>
                <div>
                    <Field placeholder={"text"} component={Textarea} name={"newPostText"}
                            validate={[ require, maxLength15]} className={cl.button} />
                </div>
                <div>
                    <button
                        className={cl.button}>
                        add post
                    </button>
                </div>

            </div>
        </form>)
}
const MyPostsReduxForm = reduxForm({form: "MyPostsAddText"})(MyPostsForm)


const MyPosts = React.memo((props) => {

    const onSubmit = (formdata) => {
        props.addPost(formdata.newPostText)
    }
    return (
        <div>
            <MyPostsReduxForm onSubmit={onSubmit}/>
            <div>
                {[...props.posts].reverse()
                    .map((post) =>
                    <Post key={post.id} message={post.message} like={post.likesCount}/>)}
            </div>
        </div>
    )
})
export default MyPosts