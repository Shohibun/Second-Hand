import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarInfoProfile() {
  return (
    <nav className="navbar navbar-white bg-white fixed-top">
      <div className="container">
        <div className="custom-display">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-responsive-size"
          />
        </div>
        <Link className="navbar-brand custom-logo-navbar" to={"#"}></Link>
        <span className="text-center m-auto">
          <span className="text-dark custom-title-nav font-weight-bold">
            Lengkapi Info Akun
          </span>
        </span>
      </div>
    </nav>
  );
}
