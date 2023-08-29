import React from "react";
import data from "../databases/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Home() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  return (
    <div className="custom-overflow-x-hidden">
      {isMobile ? (
        <div className="container-fluid mt-5 pt-5">
          <div className="row">
            <div className="col-md-2 p-0">
              <div className="w-100 h-100 custom-bg-banner-1 custom-border-banner-left"></div>
            </div>
            <div className="col-md-8 mx-auto">
              <img
                src={require("../images/banner.png")}
                alt="banner"
                className="w-100"
              />
            </div>
            <div className="col-md-2 p-0">
              <div className="w-100 h-100 custom-bg-banner-2 custom-border-banner-right"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="custom-banner-mobile">
          <div className="row">
            <div className="col-6 pl-5 pt-5">
              <h1 className="font-weight-bold custom-font-6">
                Bulan Ramadhan Banyak Diskon!
              </h1>
              <p className="text-dark custom-font-5">Diskon Hingga</p>
              <p className="text-danger custom-font-7">60%</p>
            </div>
            <div className="col-6">
              <img
                src={require("../images/box.png")}
                alt="banner"
                className="w-75"
              />
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5 pt-4">
        <h6 className="text-dark font-weight-bold">
          Telurusi Barang Yang Diinginkan
        </h6>

        <form className="form-inline mb-2" method="POST">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Nama/Deskripsi"
            aria-label="nama"
          />
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Harga minimum"
            aria-label="hargaMinimum"
          />
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Harga maksimal"
            aria-label="hargaMaksimal"
          />
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Kategori"
            aria-label="kategori"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        {isMobile ? (
          <div className="d-flex justify-content-start">
            <div className="inner-addon left-addon mr-3 custom-space-5 custom-button-auth custom-border-button custom-border-search">
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-white m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Semua
                  </p>
                </div>
              </Link>
            </div>

            <div className="inner-addon left-addon mr-3 custom-space-5 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Hobi
                  </p>
                </div>
              </Link>
            </div>

            <div className="inner-addon left-addon mr-3 custom-space-5 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Kendaraan
                  </p>
                </div>
              </Link>
            </div>

            <div className="inner-addon left-addon mr-3 custom-space-5 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Baju
                  </p>
                </div>
              </Link>
            </div>

            <div className="inner-addon left-addon mr-3 custom-space-5 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Elektronik
                  </p>
                </div>
              </Link>
            </div>

            <div className="inner-addon left-addon custom-space-5 custom-bg-banner-2 custom-border-button-2 custom-border-search">
              <Link to={"#"}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-dark custom-fa"
                />
                <div className="row align-items-center">
                  <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                    Kesehatan
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="container-fluid custom-scroll">
            <div className="row flex-row flex-nowrap">
              <div className="col-5 mr-2 inner-addon border custom-button-auth custom-border-button custom-border-search w-100">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-white custom-fa"
                  />
                  <div className="row align-items-center">
                    <p className="text-white m-auto pb-1 pt-2 pl-3 custom-font-1">
                      Semua
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-dark custom-fa"
                  />
                  <div className="row align-items-center">
                    <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                      Hobi
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-dark custom-fa"
                  />
                  <div className="row align-items-center">
                    <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                      Kendaraan
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-dark custom-fa"
                  />
                  <div className="row align-items-center">
                    <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                      Baju
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-dark custom-fa"
                  />
                  <div className="row align-items-center">
                    <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                      Elektronik
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-5 mr-2 inner-addon border custom-bg-banner-2 custom-border-button custom-border-search w-100">
                <Link to={"#"}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-dark custom-fa"
                  />
                  <div className="row align-items-center">
                    <p className="text-dark m-auto pb-1 pt-2 pl-3 custom-font-1">
                      Kesehatan
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* <div className="row mb-3">
          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>

          <div className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}>
            <div className="border rounded px-1 py-1">
              <div className="card border-0">
                <Link to={"/dashboard-product-buyer"}>
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
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row mb-3">
          {data.datas.length === 0 ? (
            <>
              <h1>Belum ada produk</h1>
            </>
          ) : (
            data.datas.map((produk) => (
              <div
                key={produk.id}
                className={isMobile ? "col-md-2 mt-3" : "col-6 mt-3"}
              >
                <div className="border rounded px-1 py-1">
                  <div className="card border-0">
                    <Link to={"dashboard-product-buyer"}>
                      <img
                        src={produk.gambar}
                        className="card-img-top"
                        alt="jam"
                      />
                      <div className="card-body">
                        <p className="card-text text-dark custom-font-1">
                          {produk.nama}
                        </p>
                        <p className="text-muted custom-font-5">
                          {produk.kategori}
                        </p>
                        <p className="text-dark custom-font-1">
                          {produk.harga}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
