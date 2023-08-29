import React, {useState} from "react";
import {Modal} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import profil from "../images/profil.png";
import jam_kecil from "../images/jam_kecil.png";

import NotifikasiStatusPenjualan from "../components/NotifikasiStatusPenjualan[Seller]";

export default function InfoProductHubungi() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="container mt-5 pt-4">
      <div className="w-75 mx-auto">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="custom-font-3 position-absolute"
        />
        <span>
          <div className="mx-auto w-50 py-4">
            <div className="border custom-border-auth mb-4 p-2">
              <div className="row">
                <div className="col-md-2">
                  <img src={profil} alt="profil" />
                </div>
                <div className="col">
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
              Daftar Produkmu yang dibeli
            </div>

            <div className=" mb-3 p-2">
              <div className="row">
                <div className="col-md-2">
                  <img src={jam_kecil} alt="foto_produk" />
                </div>
                <div className="col">
                  <div className="row text-muted custom-font-5">
                    <p className="col">Penawaran Produk</p>
                    <p className="col text-right">20 Apr, 14:04</p>
                  </div>
                  <div className="text-dark custom-font-1 custom-space-top">
                    <p>Jam Tangan Casio</p>
                    <p className="custom-space-top">Rp 250.000</p>
                    <p className="custom-space-top">Ditawar Rp 200.000</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                
                <button onClick={handleShow} className="mt-2 mr-2 form-group py-2 px-4 custom-border-button custom-border-auth custom-font-1">
                  Status
                </button>
                <Modal 
                 size="sm"
                 show={show} 
                 onHide={handleClose}
                 contentClassName="custom-border-auth"
                 centered
                >
                  <NotifikasiStatusPenjualan onHide={handleClose} />
                </Modal>

                <button className="mt-2 form-group text-white border-0 py-2 px-4 custom-border-auth custom-button-auth custom-font-1">
                  Hubungi di &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" fill="#FFF" />
                  </svg>
                </button>
              </div>
              <hr className="w-100" />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
