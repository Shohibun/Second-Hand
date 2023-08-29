import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { useEffect } from "react";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";

export default function NavbarJualSellerMobile() {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("Logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [logOut]);

  return (
    <nav className="px-4 py-4 custom-toogler">
      <div className="row">
        <div className="col-2">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent15"
            aria-controls="navbarSupportedContent15"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="bg-white p-2 custom-border-auth">
              <span className="navbar-toggler-icon"></span>
            </div>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent15"
          >
            <ul className="navbar-nav mr-auto">
              <div className="nav-item active">
                <Link className="nav-link text-dark" to={"#"}>
                  Home <span className="sr-only">(current)</span>
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link text-dark" to={"/"} onClick={logOut}>
                  Logout
                </Link>
              </div>
            </ul>
          </div>
        </div>
        <div className="col-10 pt-2">
          <h6 className="text-dark font-weight-bold mt-2 custom-font-6">
            Daftar Jual Saya
          </h6>
        </div>
      </div>
    </nav>
  );
}
