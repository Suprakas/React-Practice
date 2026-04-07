export const initialState = {
    username: "",
    email: "",
    password: "",
    error: "",
    success: ""
};

const FormReducer = (state, action) => {
    switch (action.type) {
        case "SET_FIELD":
            return {
                ...state, // keeps old values ( username, email, .. ) and updates once specific field, if we remove it old values will be lost.
                [action.field]: action.value, // dynamic update, email -> update email, password-> update password
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        case "RESET":
            return initialState;
        case "SET_SUCCESS":
            return {
                ...state,
                success: action.payload,
            };
        default:
            return state;
    }
}

export default FormReducer