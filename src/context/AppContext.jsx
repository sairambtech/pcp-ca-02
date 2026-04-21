import { createContext, useContext, useEffect, useReducer } from "react";
import { AppReducer, initialState } from "../reducer/AppReducer";
import { BASE_URL } from "../services/api";

const AppContext = createContext();

const sampleOrders = [
  {
    orderId: 1001,
    customerId: 1,
    restaurant: "Spice Hub",
    items: [
      { name: "biriyani", prize: 180, quantity: 2 },
    ],
    totalAmount: 360,
    status: "ordered",
    deliveryTime: "30 mins",
    rating: 4.5,
  },
  {
    orderId: 1002,
    customerId: 2,
    restaurant: "Pizza Corner",
    items: [
      { name: "pizza", prize: 250, quantity: 1 },
    ],
    totalAmount: 250,
    status: "preparing",
    deliveryTime: "25 mins",
    rating: 4.2,
  },
];

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        dispatch({ type: "SET_LOADING" });

        const cleaned = sampleOrders.filter(
          (order) =>
            order &&
            order.orderId &&
            order.customerId &&
            order.restaurant &&
            Array.isArray(order.items) &&
            typeof order.totalAmount === "number" &&
            order.status &&
            order.deliveryTime &&
            typeof order.rating === "number"
        );

        dispatch({ type: "SET_ORDERS", payload: cleaned });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: "Failed to fetch orders" });
      }
    };

    loadOrders();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, BASE_URL }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
