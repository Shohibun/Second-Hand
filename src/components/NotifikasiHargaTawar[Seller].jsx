import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import profil from "../images/profil.png";
import jam_kecil from "../images/jam_kecil.png";

export default function NotifikasiHargaTawarSeller({onHide}) {
  return (
    <Modal.Body>
    <div className="w-100 p-2  custom-space-harga-tawar">
      
        <div onClick={onHide} className="text-right custom-font-6">
          <FontAwesomeIcon icon={faXmarkCircle} />
        </div>

        <p className="mt-2 text-dark font-weight-bold custom-font-1">
          Yeay kamu berhasil mendapat harga yang sesuai
        </p>

        <p className="text-muted custom-font-1">
          Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
        </p>

        <div className="w-100 py-2 px-3 border custom-bg-notif custom-border-auth">
          <div className="row text-dark font-weight-bold custom-font-1 ">
            <div className="col-md-12 text-center">
              <p>Product Match</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3">
              <img src={profil} alt="profil" />
            </div>
            <div className="col-md-9">
              <p className="text-dark font-weight-bold custom-font-1">
                Nama Pembeli
              </p>
              <p className="text-muted custom-space-top custom-font-5">Kota</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src={jam_kecil} alt="foto_produk" />
            </div>
            <div className="col-md-9">
              <div className="text-dark custom-font-1">
                <p>Jam Tangan Casio</p>
                <p className="custom-space-top"><s>Rp 250.000</s></p>
                <p className="custom-space-top">Ditawar Rp 200.000</p>
              </div>
            </div>
          </div>
        </div>
        <a href="/info-product-hubungi">
        <button className="mt-3 text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
          Hubungi via whatsapp &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path
              d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              fill="#FFF"
            />
          </svg>
        </button>
        </a>
      
    </div>
    </Modal.Body>
  );
}
