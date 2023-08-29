import React from "react";
import {Modal} from "react-bootstrap";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotifikasiHargaTawar({onHide}) {
  return (
    <Modal.Body>
    <div className="w-100 p-2 custom-space-harga-tawar">
      <div onClick={onHide} className="text-right custom-font-6">
        <FontAwesomeIcon icon={faXmarkCircle} />
      </div>

      <p className="text-dark font-weight-bold custom-font-1">
        Masukkan Harga Tawarmu
      </p>

      <p className="text-muted custom-font-1">
        Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
        segera dihubungi penjual.
      </p>

      <div className="w-100 px-3 pt-3 border custom-bg-notif custom-border-auth">
        <div className="row">
          <div className="col-md-3">
            <img src={require("../images/jam_kecil.png")} alt="Jam" />
          </div>

          <div className="col-md-9">
            <p className="text-dark font-weight-bold custom-font-1">
              Jam Tangan Casio
            </p>
            <p className="text-dark custom-font-1 custom-space-top">
              Rp 250.000
            </p>
          </div>
        </div>
      </div>

      <Form action="/dashboard-product-notif-tawar-buyer" className="mt-3">
        <div className="form-group mb-3">
          <label
            htmlFor="hargatawar"
            className="text-dark font-weight-bold mb-1 custom-font-2"
          >
            Harga Tawar
          </label>
          <Input
            type="text"
            className="form-control p-2 custom-font-1"
            placeholder="Rp 0,00"
          />
        </div>

        <button className="mt-1 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
          Kirim
        </button>
      </Form>
    </div>
    </Modal.Body>
  );
}
