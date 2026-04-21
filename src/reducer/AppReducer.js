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

    default:
      return state;
  }
}
