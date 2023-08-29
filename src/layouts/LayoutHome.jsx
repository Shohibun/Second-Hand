import React from "react";
import Jual from "../components/Jual";
import NavbarHome from "../components/NavbarHome";
import NavbarHomeMobile from "../components/NavbarHomeMobile";
import Home from "../pages/Home";
import { useMediaQuery } from "react-responsive";

export default function LayoutHome() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  return (
    <>
      {isMobile ? <NavbarHome /> : <NavbarHomeMobile />}
      <Home />
      <Jual />
    </>
  );
}
