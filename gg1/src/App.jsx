import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Card";
import Favorites from "./pages/Favorites";
import Catalog from "./pages/Catalog";
import Tayota from "./pages/Tayota";
import Modeltayota from "./pages/Modeltayota";
import St from "./pages/St";
import UsedCars from "./pages/UsedCars";
import UsedCarDetail from "./pages/UsedCarDetail";
import ExpressCredit from "./pages/ExpressCredit";
import TradeIn from "./pages/TradeIn";
import MedicalWorkers from "./pages/MedicalWorkers";
import Rasochka from "./pages/Rasochka";
import Taksikridit from "./pages/Taksikridit";
import Okomponi from "./pages/Okomponi";
import Taxcentr from "./pages/Taxcentr";
import Otziv from "./pages/otziv";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/tayota" element={<Tayota />} />
      <Route path="/modeltayota" element={<Modeltayota />} />
      <Route path="/insurance" element={<St />} />
      <Route path="/used-cars" element={<UsedCars />} />
      <Route path="/used-cars/:carId" element={<UsedCarDetail />} />
      <Route path="/express-credit" element={<ExpressCredit />} />
      <Route path="/trade-in" element={<TradeIn />} />
      <Route path="/medical-workers" element={<MedicalWorkers />} />
      <Route path="/rasochka" element={<Rasochka />} />
      <Route path="/taxi-credit" element={<Taksikridit />} />
      <Route path="/about-company" element={<Okomponi />} />
      <Route path="/tech-center" element={<Taxcentr />} />
      <Route path="/reviews" element={<Otziv />} />
    </Routes>
  );
}
