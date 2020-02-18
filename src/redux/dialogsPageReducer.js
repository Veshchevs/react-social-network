const ADD_MESSAGE = "ADD_MESSAGE"

let initialStateDiilogsPage = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Bla Bla Bla"},
        {id: 3, message: "Bla Bla Bla"},
        {id: 4, message: "Bla Bla Bla"},
        {id: 5, message: "YO"}
    ],
    dialogs: [
        {id: 1, name: "Aleksey"},
        {id: 2, name: "Evgenyi"},
        {id: 3, name: "Nelli"},
        {id: 4, name: "Dmitryi"},
        {id: 5, name: "Valera"}
    ]
}


const dialogsPageReducer = (state = initialStateDiilogsPage, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessageData = {
                id: 6,
                message: action.message
            }
            return {
                ...state, messages:
                    [...state.messages, newMessageData]
            }
        }

        default:
            return state
    }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message})


export default dialogsPageReducer