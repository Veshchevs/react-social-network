import {connect} from 'react-redux'
import Dialogs from "./Dialogs";
import {addMessage} from "../../redux/dialogsPageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (store) => {
    return {
        dialogs: store.dialogsPage.dialogs,
        messages: store.dialogsPage.messages,
        newMessage: store.dialogsPage.newMessage
    }
}


const DialogsContainer = compose(connect(mapStateToProps,
    {addMessage}),
    withAuthRedirect)(Dialogs)

export default DialogsContainer