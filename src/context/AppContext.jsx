import { createContext, useContext, useEffect, useReducer } from 'react';
import { appReducer, initialState } from '../reducer/AppReducer';
import { fetchToken, fetchOrders } from '../services/api';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
  const loadData = async () => {
    try {
      dispatch({ type: 'FETCH_START' });

      const token = await fetchToken();
      const data = await fetchOrders(token);

      console.log('API DATA:', data);

      dispatch({ type: 'SET_ORDERS', payload: data });
    } catch (error) {
      console.log('API ERROR:', error);
      dispatch({
        type: 'FETCH_ERROR',
        payload: error.response?.data?.message || error.message,
      });
    }
  };

  loadData();
}, []);


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
