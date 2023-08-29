import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import profil from "../images/profil.png";
import jam_kecil from "../images/jam_kecil.png";

export default function InfoProductStatus() {

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
              Daftar Produkmu yang ditawar
            </div>

            <div className=" mb-3 p-2">
              <div className="row">
                <div className="col-md-2">
                  <img src={jam_kecil} alt="foto_produk" />
                </div>
                <div className="col">
                  <div className="row text-muted custom-font-5">
                    <p className="col">Berhasil terjual</p>
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
                
               
              </div>
              <hr className="w-100" />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
