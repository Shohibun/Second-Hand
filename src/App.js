import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutHome from "./layouts/LayoutHome";
import Register from "./layouts/Register";
import Login from "./layouts/Login";
import LayoutInfoProfile from "./layouts/LayoutInfoProfile";
import LayoutInfoProductAdd from "./layouts/LayoutInfoProductAdd[Seller]";
import LayoutDashboardProductSeller from "./layouts/LayoutDashboardProduct[Seller]";
import LayoutDashboardProductBuyer from "./layouts/LayoutDashboardProduct[Buyer]";
import LayoutDashboardProductNotifTawarBuyer from "./layouts/LayoutDashboardProductNotifTawar[Buyer]";
import NotifikasiTawarBerhasil from "./components/NotifikasiTawarBerhasil[Buyer]";
import LayoutInfoProductTawar from "./layouts/LayoutInfoProductTawar[Seller]";
import LayoutInfoProductHubungi from "./layouts/LayoutInfoProductHubungi[Seller]";
import LayoutDashboardJualSeller from "./layouts/LayoutDashboardJual[Seller]";
import LayoutDashboardJualProductSeller from "./layouts/LayoutDashboardJualProduct[Seller]";
import LayoutDashboardJualDiminatiSeller from "./layouts/LayoutDashboardJualDiminati[Seller]";
import LayoutInfoProductStatus from "./layouts/LayoutInfoProductStatus";
import NotifikasiSeller from "./components/NotifikasiSeller[Seller]";
import LayoutHomeAccount from "./layouts/LayoutHomeAccount";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LayoutHome />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/home-account"} element={<LayoutHomeAccount />} />
        <Route path={"/info-profile"} element={<LayoutInfoProfile />} />
        <Route path={"/info-product-add"} element={<LayoutInfoProductAdd />} />
        <Route
          path={"/dashboard-product-seller"}
          element={<LayoutDashboardProductSeller />}
        />
        <Route
          path={"/dashboard-jual-seller"}
          element={<LayoutDashboardJualSeller />}
        />
        <Route
          path={"/dashboard-jual-product-seller"}
          element={<LayoutDashboardJualProductSeller />}
        />
        <Route
          path={"/dashboard-jual-diminati-seller"}
          element={<LayoutDashboardJualDiminatiSeller />}
        />
        <Route
          path={"/dashboard-product-buyer"}
          element={<LayoutDashboardProductBuyer />}
        />
        <Route
          path={"/dashboard-product-notif-tawar-buyer"}
          element={<LayoutDashboardProductNotifTawarBuyer />}
        />
        <Route
          path={"/notifikasi-tawar-berhasil"}
          element={<NotifikasiTawarBerhasil />}
        />
        <Route path={"/notifikasi-seller"} element={<NotifikasiSeller />} />
        <Route
          path={"/info-product-tawar"}
          element={<LayoutInfoProductTawar />}
        />
        <Route
          path={"/info-product-hubungi"}
          element={<LayoutInfoProductHubungi />}
        />
        <Route
          path={"/info-product-status"}
          element={<LayoutInfoProductStatus />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
