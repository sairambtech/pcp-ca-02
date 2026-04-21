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

        const tokenResponse = await fetchToken();
        const token = tokenResponse.token;
        const dataUrl = tokenResponse.dataUrl;

        const response = await fetchOrders(token, dataUrl);
        const payload = response.data;

        const ordersArray = Array.isArray(payload.data)
          ? payload.data
          : Object.values(payload.data || {});

        dispatch({ type: 'SET_ORDERS', payload: ordersArray });
      } catch (error) {
        dispatch({
          type: 'FETCH_ERROR',
          payload:
            error.response?.data?.message ||
            JSON.stringify(error.response?.data) ||
            error.message,
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

export default AppContext;
