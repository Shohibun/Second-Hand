import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import profil from "../images/profil.png";
import jam_kecil from "../images/jam_kecil.png";
import { useMediaQuery } from "react-responsive";
import NotifikasiHargaTawarSeller from "../components/NotifikasiHargaTawar[Seller]";

export default function InfoProductTawar() {
  const isMobile = useMediaQuery({ minWidth: 600 });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {isMobile ? (
        <div className="container mt-5 pt-4">
          <div className="w-75 mx-auto">
            <div className="custom-responsive-display">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="custom-font-3 position-absolute"
              />
            </div>
            <span>
              <div className="mx-auto w-50 py-4">
                <div className="border custom-border-auth mb-4 p-2">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={profil} alt="profil" />
                    </div>
                    <div className="col-md-10">
                      <p className="text-dark font-weight-bold custom-font-1">
                        Nama Pembeli
                      </p>
                      <p className="text-muted custom-font-5 custom-space-top">
                        Kota
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-3 text-dark font-weight-bold custom-font-1">
                  Daftar Produkmu yang ditawar
                </div>

                <div className=" mb-3 p-2">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={jam_kecil} alt="foto_produk" />
                    </div>
                    <div className="col-md-10">
                      <div className="row text-muted custom-font-5">
                        <p className="col text-muted">Penawaran Produk</p>
                        <p className="col text-right">20 Apr, 14:04</p>
                      </div>
                      <div className="text-dark custom-space-top custom-font-1">
                        <p>Jam Tangan Casio</p>
                        <p className="custom-space-top">Rp 250.000</p>
                        <p className="custom-space-top">Ditawar Rp 200.000</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <button className="mt-2 mr-2 py-2 px-4 w-25 custom-border-button custom-border-auth custom-font-1">
                      Tolak
                    </button>

                    <button
                      className="mt-2 text-white border-0 py-2 px-3 w-25 custom-border-auth custom-button-auth custom-font-1"
                      onClick={handleShow}
                    >
                      Terima
                    </button>
                    <Modal
                      size="sm"
                      show={show}
                      onHide={handleClose}
                      contentClassName="custom-border-auth"
                      centered
                    >
                      <NotifikasiHargaTawarSeller onHide={handleClose} />
                    </Modal>
                  </div>
                  <hr className="w-100" />
                </div>
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div className="container-fluid mt-5 pt-4">
          <div className="border custom-border-auth mb-4 p-2">
            <div className="row">
              <div className="col-2 mt-1">
                <img src={profil} alt="profil" />
              </div>
              <div className="col-10 mt-1">
                <p className="text-dark font-weight-bold custom-font-1">
                  Nama Pembeli
                </p>
                <p className="text-muted custom-font-5 custom-space-top">
                  Kota
                </p>
              </div>
            </div>
          </div>

          <div className="mb-3 text-dark font-weight-bold custom-font-1">
            Daftar Produkmu yang ditawar
          </div>

          <div className=" mb-3 p-2">
            <div className="row">
              <div className="col-2">
                <img src={jam_kecil} alt="foto_produk" />
              </div>
              <div className="col-10">
                <div className="row text-muted custom-font-5">
                  <p className="col text-muted">Penawaran Produk</p>
                  <p className="col text-right">20 Apr, 14:04</p>
                </div>
                <div className="text-dark custom-space-top custom-font-1">
                  <p>Jam Tangan Casio</p>
                  <p className="custom-space-top">Rp 250.000</p>
                  <p className="custom-space-top">Ditawar Rp 200.000</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="mt-2 mr-2 py-2 px-4 w-25 custom-border-button custom-border-auth custom-font-1">
                Tolak
              </button>

              <button
                className="mt-2 text-white border-0 py-2 px-3 w-25 custom-border-auth custom-button-auth custom-font-1"
                onClick={handleShow}
              >
                Terima
              </button>
              <Modal
                size="sm"
                show={show}
                onHide={handleClose}
                contentClassName="custom-border-auth"
                centered
              >
                <NotifikasiHargaTawarSeller onHide={handleClose} />
              </Modal>
            </div>
            <hr className="w-100" />
          </div>
        </div>
      )}
    </>
  );
}
