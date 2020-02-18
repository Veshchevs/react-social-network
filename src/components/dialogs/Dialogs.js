import React from 'react';
import cl from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form"
import {maxLength40, require} from "../common/validators/ValidatorsForm";
import {Textarea} from "../common/formsControls/FormControls";

const Dialog = (props) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

const Message = (props) => {
        return (
        <div>
            {props.message}
        </div>
    )
}

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button className={cl.button}>
                    send message
                </button>
            </div>
            <div>
                <Field placeholder="text" name="newMessage" component= {Textarea} className={cl.button}
                validate={[ maxLength40, require] }/>
            </div>
        </form>)
}
const DialogsReduxForm = reduxForm({form: "dialogsAddMessage"})(DialogsForm)


const Dialogs = (props) => {

    const onSubmit = (formdata) => {
        props.addMessage(formdata.newMessage)
    }
    return (
        <div className={cl.item}>
            <div>
                {props.dialogs.map((dialog) =>
                    <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>)}
            </div>
            <div>
                {props.messages.map((message) =>
                    <Message key={message.id} message={message.message} id={message.id}/>)}
            </div>
            <DialogsReduxForm onSubmit={onSubmit}/>

        </div>
    )
}

export default Dialogs