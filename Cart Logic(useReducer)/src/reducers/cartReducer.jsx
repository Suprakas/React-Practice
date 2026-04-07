
export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const existing = state.find(i => i.id === item.id);
            if (existing) {
                return state.map(i =>
                    i.id === item.id ?
                        { ...i, qty: i.qty + 1 }
                        : i
                );
            }
            return [...state, { ...item, qty: 1 }];

        case "REMOVE_FROM_CART":
            return state.filter(i => i.id !== action.payload);

        case "INCREASE_QTY":
            return state.map(i =>
                i.id === action.payload ?
                    { ...i, qty: i.qty + 1 }
                    : i
            ).filter(i => i.qty > 0) // Qty never goes below 1

        case "DECREASE_QTY":
            return state.map(i =>
                i.id === action.payload && i.qty > 1 ?
                    { ...i, qty: i.qty - 1 }
                    : i
            )
        default:
            return state;
    }
}