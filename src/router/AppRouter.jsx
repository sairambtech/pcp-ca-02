import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Orders from '../pages/Orders';
import Filter from '../pages/Filter';
import OrderDetails from '../pages/OrderDetails';
import Status from '../pages/Status';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/stats" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}
