import React from "react";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "react-responsive";
import DashboardJualSeller from "../pages/DashboardJual[Seller]";
import NavbarJualSellerMobile from "../components/NavbarJualSellerMobile";

export default function LayoutDashboardJualSeller() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  return (
    <>
      {isMobile ? <Navbar /> : <NavbarJualSellerMobile />}
      <DashboardJualSeller />
    </>
  );
}
