export const initialState = {
  orders: [
    {
      id: 1,
      customerName: 'Arun',
      item: 'Laptop',
      status: 'delivered',
      amount: 55000
    },
    {
      id: 2,
      customerName: 'Priya',
      item: 'Phone',
      status: 'cancelled',
      amount: 25000
    },
    {
      id: 3,
      customerName: 'Rahul',
      item: 'Headset',
      status: 'pending',
      amount: 3000
    }
  ]
};

export function appReducer(state, action) {
  switch (action.type) {
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.payload
      };

    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        )
      };

    default:
      return state;
  }
}
