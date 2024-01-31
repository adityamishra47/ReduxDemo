import { DECREMENT, INCREMENT } from "./action"

const initialState = {
    count: 10,
}

const countReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }

        default:
            return state;

    }

}

export default countReducer;
