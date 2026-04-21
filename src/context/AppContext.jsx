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
        const rawData = response.data?.data;

        let ordersArray = [];

        if (Array.isArray(rawData)) {
          const nestedArray = rawData.find((item) => Array.isArray(item));
          if (nestedArray) {
            ordersArray = nestedArray;
          } else {
            ordersArray = rawData.filter(
              (item) => item && typeof item === 'object' && !Array.isArray(item)
            );
          }
        } else if (rawData && typeof rawData === 'object') {
          ordersArray = Object.values(rawData).flat().filter(
            (item) => item && typeof item === 'object'
          );
        }

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
