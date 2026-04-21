export const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true, error: null };

    case "SET_ORDERS":
      return { ...state, orders: action.payload, loading: false };

    case "SET_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "UPDATE_ORDER":
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload.orderId
            ? { ...order, ...action.payload.updates }
            : order
        ),
      };

    default:
      return state;
  }
};
