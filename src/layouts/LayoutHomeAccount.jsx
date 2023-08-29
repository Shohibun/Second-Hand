import React from "react";
import Jual from "../components/Jual";
import NavbarHomeAccount from "../components/NavbarHomeAccount";
import Home from "../pages/Home";
import { useMediaQuery } from "react-responsive";
import NavbarHomeAccountMobile from "../components/NavbarHomeAccountMobile";

export default function LayoutHomeAccount() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  return (
    <>
      {isMobile ? <NavbarHomeAccount /> : <NavbarHomeAccountMobile />}
      <Home />
      <Jual />
    </>
  );
}
