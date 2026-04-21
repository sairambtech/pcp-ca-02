import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";
import Filter from "../pages/Filter";
import Status from "../pages/Status";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/orders" replace />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
