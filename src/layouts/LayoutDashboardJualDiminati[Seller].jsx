import React from "react";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "react-responsive";
import DashboardJualDiminatiSeller from "../pages/DashboardJualDiminati[Seller]";
import NavbarJualSellerMobile from "../components/NavbarJualSellerMobile";

export default function LayoutDashboardJualDiminatiSeller() {
    const isMobile = useMediaQuery({ minWidth: 600 });

    return(
        <>
        {isMobile ? <Navbar /> : <NavbarJualSellerMobile />}
        <DashboardJualDiminatiSeller />
        </>
    )
}
