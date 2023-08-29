/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NavbarInfoProfile() {
  return (
    <nav className="navbar navbar-expand-sm navbar-white bg-white fixed-top">
      <div className="container">
      <div className="custom-display">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-responsive-size"
          />
        </div>
        <a className="navbar-brand custom-logo-navbar" href="#"></a>
        <span className="text-center m-auto">
          <span className="text-dark font-weight-bold custom-title-nav">Info Penawar</span>
        </span>
      </div>
    </nav>
  );
}
