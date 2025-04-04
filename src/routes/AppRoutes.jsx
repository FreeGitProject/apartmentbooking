import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ApartmentBookingLanding from "../pages/ApartmentBookingLanding";
import ApartmentListingsPage from "../pages/ApartmentListingsPage";
import ApartmentDetailPage from "../pages/ApartmentDetailPage";
import ApartmentBookingLandingg from "../pages/ApartmentBookingLanding2";
import Premium from "../pages/Premium";
//import Listing from "../pages/Listing";
//import Detail from "../pages/Detail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ApartmentBookingLanding />} />
      <Route path="/2" element={<ApartmentBookingLandingg />} />
      <Route path="/listing" element={<ApartmentListingsPage />} />
      <Route path="/detail" element={<ApartmentDetailPage />} />
      <Route path="/premium" element={<Premium />} />
    </Routes>
  );
}

export default AppRoutes;
