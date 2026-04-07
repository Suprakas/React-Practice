export const initialState = { count : 0 };

export function counterReducer(state, action) {
    switch (action.type) {
        case "INC":
            return { count: state.count + 1 };
        case "DEC":
            return { count: state.count > 0 ? state.count - 1 : 0 };
        case "RESET":
            return initialState;
        case "INC_BY_5":
            return { count: state.count + 5 };
        case "INC_BY_VALUE":
            return { count: state.count + action.payload };
        default:
            return state;
    }
}