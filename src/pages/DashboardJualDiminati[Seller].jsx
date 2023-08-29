/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function DashboardJualDiminatiSeller() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  return (
    <div className="custom-overflow-x-hidden">
      {isMobile ? (
        <div className="container mt-5 pt-4">
          <div className="w-75 mx-auto">
            <p className="text-dark font-weight-bold custom-font-6">
              Daftar Jual Saya
            </p>

            <div className="border my-3 px-3 pt-3 custom-border-auth">
              <div className="row">
                <div className="col-md-1">
                  <img src={require("../images/seller.png")} alt="seller" />
                </div>

                <div className="col-md-9">
                  <p className="text-dark font-weight-bold custom-font-1">
                    Nama Penjual
                  </p>
                  <p className="text-muted custom-font-5 custom-space-top">
                    Kota
                  </p>
                </div>

                <div className="col-md-2 text-right">
                  <form action="/info-profile">
                    <button className="mt-1 form-group font-weight-bold py-2 w-50 custom-border-button custom-border-auth custom-font-2">
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="w-100 border px-4 py-4 custom-border-auth">
                  <p className="text-dark font-weight-bold">Kategori</p>

                  <div className="d-flex justify-content-between">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <span className="mr-2">
                          <FontAwesomeIcon
                            icon={faBoxOpen}
                            className="text-muted"
                          />
                        </span>
                        <a href="/dashboard-jual-seller" className="text-dark">
                          Semua Produk
                        </a>
                      </div>
                    </div>
                    <span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-muted"
                      />
                    </span>
                  </div>
                  <hr />

                  <div className="d-flex justify-content-between custom-font-auth">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <span className="mr-2">
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <a
                          href="/dashboard-jual-diminati-seller"
                          className="custom-font-auth"
                        >
                          Diminati
                        </a>
                      </div>
                    </div>
                    <span className="custom-font-auth">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                  <hr className="custom-button-auth" />

                  <div className="d-flex justify-content-between">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <span className="mr-2 text-muted">
                          <FontAwesomeIcon icon={faDollarSign} />
                        </span>
                        <span className="text-dark">Terjual</span>
                      </div>
                    </div>
                    <span>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className="text-muted"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="row text-center">
                  <div className="col-md-12">
                    <img src={require("../images/minati.png")} alt="minati" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="border px-3 pt-2 custom-border-auth">
            <div className="row">
              <div className="col-2">
                <img src={require("../images/seller.png")} alt="seller" />
              </div>

              <div className="col-5 pl-0">
                <p className="text-dark font-weight-bold custom-font-1">
                  Nama Penjual
                </p>
                <p className="text-muted custom-font-5 custom-space-top">
                  Kota
                </p>
              </div>

              <div className="col-5 text-right">
                <form action="/info-profile">
                  <button className="mt-1 form-group font-weight-bold py-2 w-25 custom-border-button custom-border-auth custom-font-2">
                    Edit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="row mt-4 flex-row flex-nowrap custom-scroll">
            <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
              <a href="/dashboard-jual-seller">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Produk
                  </p>
                </div>
              </a>
            </div>
            <div className="col-5 mr-2 inner-addon border custom-button-auth custom-border-button custom-border-search w-100">
              <a href="/dashboard-jual-diminati-seller">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-white custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-white m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Diminati
                  </p>
                </div>
              </a>
            </div>
            <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
              <a href="#">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Terjual
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="row text-center my-4">
            <div className="col-md-12">
              <img src={require("../images/minati.png")} alt="minati" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
