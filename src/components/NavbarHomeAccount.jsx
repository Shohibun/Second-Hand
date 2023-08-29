import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import EventBus from "../common/EventBus";
import { useEffect } from "react";
import { logout } from "../actions/auth";
import { useDispatch } from "react-redux";

export default function NavbarHomeAccount() {
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
    <div className="custom-responsive-display">
      <nav className="navbar navbar-white bg-white fixed-top navbar-8">
        <div className="container">
          <div className="row w-100">
            <div className="col-10">
              <div className="d-flex">
                <Link className="navbar-brand custom-logo-navbar" to={"#"}></Link>
                <form>
                  <div className="inner-addon right-addon custom-space-3">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-muted ml-2 custom-fa"
                    />
                    <input
                      type="text"
                      className="form-control ml-2 custom-border-auth custom-bg-notif"
                      placeholder="Cari di sini ..."
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-1">
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent15"
                  aria-controls="navbarSupportedContent15"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent15"
                >
                  <ul className="navbar-nav mr-auto">
                    <div className="nav-item">
                      <div className="nav-item">
                        <Link
                          className="nav-link text-dark"
                          to={"/"}
                          onClick={logOut}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-1">
              <Link to={"/info-profile"}>
                <FontAwesomeIcon icon={faUser} className="btn" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
