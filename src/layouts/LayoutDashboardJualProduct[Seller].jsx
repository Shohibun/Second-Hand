import React from "react";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "react-responsive";
import DashboardJualProductSeller from "../pages/DashboardJualProduct[Seller]";
import NavbarJualSellerMobile from "../components/NavbarJualSellerMobile";

export default function LayoutDashboardJualProductSeller() {
    const isMobile = useMediaQuery({ minWidth: 600 });

    return (
        <>
        {isMobile ? <Navbar /> : <NavbarJualSellerMobile />}
        <DashboardJualProductSeller />
        </>
    )
}
