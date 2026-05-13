export const CART_ACTIONS = {
  ADD: "ADD",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
};

export const initialState = {
  items: {},
  totalItems: 0,
  totalPrice: 0,
};

const recalculate = (items) => ({
  totalItems: Object.values(items).reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: Object.values(items).reduce(
    (sum, i) => sum + i.quantity * i.product.price,
    0
  ),
});

export const cartReducer = (state, action) => {
  const { payload } = action;
  let updatedItems;

  switch (action.type) {
    case CART_ACTIONS.ADD:
      updatedItems = {
        ...state.items,
        [payload.product._id]: {
          product: payload.product,
          quantity: 1,
        },
      };
      return { ...state, items: updatedItems, ...recalculate(updatedItems) };

    case CART_ACTIONS.INCREASE:
      updatedItems = {
        ...state.items,
        [payload.productId]: {
          ...state.items[payload.productId],
          quantity: state.items[payload.productId].quantity + 1,
        },
      };
      return { ...state, items: updatedItems, ...recalculate(updatedItems) };

    case CART_ACTIONS.DECREASE: {
      const current = state.items[payload.productId];
      if (current.quantity <= 1) {
        const { [payload.productId]: _, ...rest } = state.items;
        return { ...state, items: rest, ...recalculate(rest) };
      }
      updatedItems = {
        ...state.items,
        [payload.productId]: {
          ...current,
          quantity: current.quantity - 1,
        },
      };
      return { ...state, items: updatedItems, ...recalculate(updatedItems) };
    }

    case CART_ACTIONS.REMOVE: {
      const { [payload.productId]: _, ...rest } = state.items;
      return { ...state, items: rest, ...recalculate(rest) };
    }

    case CART_ACTIONS.CLEAR:
      return initialState;

    default:
      return state;
  }
};
