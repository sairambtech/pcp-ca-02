export const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export function appReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'SET_ORDERS':
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    case 'DELETE_ORDER':
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.orderId !== action.payload
        ),
      };

    case 'UPDATE_STATUS':
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.orderId === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        ),
      };

    default:
      return state;
  }
}
