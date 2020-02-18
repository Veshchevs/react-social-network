import {getMeDataThunk} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialMe = {
    initialized: false
}

const appReducer = (state = initialMe, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => async (dispatch) => {
    let promise = dispatch(getMeDataThunk())
    /*   dispatch(someThingelse())
    dispatch(someThingelse())*/

    await Promise.all([promise]);
    dispatch(initializedSuccess())
};


export default appReducer