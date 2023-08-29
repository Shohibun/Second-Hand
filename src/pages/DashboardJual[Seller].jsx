/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faAngleRight,
  faBoxOpen,
  faDollarSign,
  faHeart,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function DashboardJualSeller() {
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

                  <div className="d-flex justify-content-between custom-font-auth">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <span className="mr-2">
                          <FontAwesomeIcon icon={faBoxOpen} />
                        </span>
                        <a
                          href="/dashboard-jual-seller"
                          className="custom-font-auth"
                        >
                          Semua Produk
                        </a>
                      </div>
                    </div>
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                  <hr />

                  <div className="d-flex justify-content-between">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <span className="mr-2 text-muted">
                          <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <a
                          href="/dashboard-jual-diminati-seller"
                          className="text-dark"
                        >
                          Diminati
                        </a>
                      </div>
                    </div>
                    <span className="text-muted">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                  <hr />

                  <div className="d-flex justify-content-between">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <span className="mr-2 text-muted">
                          <FontAwesomeIcon icon={faDollarSign} />
                        </span>
                        <span className="text-dark">Terjual</span>
                      </div>
                    </div>
                    <span className="text-muted">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="w-100 h-100 mx-auto text-muted py-5 row align-items-center custom-border-style custom-border-auth">
                      <div className="col-md-12 text-center">
                        <form action="/info-product-add">
                          <button className="btn btn-link text-muted">
                            <FontAwesomeIcon
                              icon={faPlusSquare}
                              className="custom-font-3"
                            />
                            <p className="custom-font-2">Tambah Produk</p>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_2.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_2.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_1.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_1.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_1.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_2.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_2.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="border rounded px-1 py-1">
                      <div className="card border-0">
                        <img
                          src={require("../images/jam_midlle_2.png")}
                          className="card-img-top"
                          alt="jam"
                        />
                        <div className="card-body">
                          <p className="card-text text-dark custom-font-1">
                            Jam tangan Casion
                          </p>
                          <p className="text-muted custom-font-5">Aksesoris</p>
                          <p className="text-dark custom-font-1">Rp 250.000</p>
                        </div>
                      </div>
                    </div>
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
            <div className="col-5 mr-2 inner-addon border custom-button-auth custom-border-button custom-border-search w-100">
              <a href="/dashboard-jual-seller">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="text-white custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-white m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Produk
                  </p>
                </div>
              </a>
            </div>
            <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
              <a href="/dashboard-jual-diminati-seller">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
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

          <div className="row">
            <div className="col-6 mt-4">
              <div className="w-100 h-100 mx-auto text-muted py-5 row align-items-center custom-border-style custom-border-auth">
                <div className="col-md-12 text-center">
                  <form action="/info-product-add">
                    <button className="btn btn-link text-muted">
                      <FontAwesomeIcon
                        icon={faPlusSquare}
                        className="custom-font-3"
                      />
                      <p className="custom-font-2">Tambah Produk</p>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-6 mt-4">
              <div className="border rounded px-1 py-1">
                <div className="card border-0">
                  <img
                    src={require("../images/jam_midlle_2.png")}
                    className="card-img-top"
                    alt="jam"
                  />
                  <div className="card-body">
                    <p className="card-text text-dark custom-font-1">
                      Jam tangan Casion
                    </p>
                    <p className="text-muted custom-font-5">Aksesoris</p>
                    <p className="text-dark custom-font-1">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mt-4">
              <div className="border rounded px-1 py-1">
                <div className="card border-0">
                  <img
                    src={require("../images/jam_midlle_1.png")}
                    className="card-img-top"
                    alt="jam"
                  />
                  <div className="card-body">
                    <p className="card-text text-dark custom-font-1">
                      Jam tangan Casion
                    </p>
                    <p className="text-muted custom-font-5">Aksesoris</p>
                    <p className="text-dark custom-font-1">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mt-4">
              <div className="border rounded px-1 py-1">
                <div className="card border-0">
                  <img
                    src={require("../images/jam_midlle_1.png")}
                    className="card-img-top"
                    alt="jam"
                  />
                  <div className="card-body">
                    <p className="card-text text-dark custom-font-1">
                      Jam tangan Casion
                    </p>
                    <p className="text-muted custom-font-5">Aksesoris</p>
                    <p className="text-dark custom-font-1">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mt-4">
              <div className="border rounded px-1 py-1">
                <div className="card border-0">
                  <img
                    src={require("../images/jam_midlle_2.png")}
                    className="card-img-top"
                    alt="jam"
                  />
                  <div className="card-body">
                    <p className="card-text text-dark custom-font-1">
                      Jam tangan Casion
                    </p>
                    <p className="text-muted custom-font-5">Aksesoris</p>
                    <p className="text-dark custom-font-1">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mt-4">
              <div className="border rounded px-1 py-1">
                <div className="card border-0">
                  <img
                    src={require("../images/jam_midlle_2.png")}
                    className="card-img-top"
                    alt="jam"
                  />
                  <div className="card-body">
                    <p className="card-text text-dark custom-font-1">
                      Jam tangan Casion
                    </p>
                    <p className="text-muted custom-font-5">Aksesoris</p>
                    <p className="text-dark custom-font-1">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mt-4">
              <div className="border rounded px-1 py-1">
                <div className="card border-0">
                  <img
                    src={require("../images/jam_midlle_1.png")}
                    className="card-img-top"
                    alt="jam"
                  />
                  <div className="card-body">
                    <p className="card-text text-dark custom-font-1">
                      Jam tangan Casion
                    </p>
                    <p className="text-muted custom-font-5">Aksesoris</p>
                    <p className="text-dark custom-font-1">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 mt-4">
              <div className="border rounded px-1 py-1">
                <div className="card border-0">
                  <img
                    src={require("../images/jam_midlle_1.png")}
                    className="card-img-top"
                    alt="jam"
                  />
                  <div className="card-body">
                    <p className="card-text text-dark custom-font-1">
                      Jam tangan Casion
                    </p>
                    <p className="text-muted custom-font-5">Aksesoris</p>
                    <p className="text-dark custom-font-1">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
