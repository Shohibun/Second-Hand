import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

export default function NotifikasiStatusPenjualan({onHide}) {
  return (
    <Modal.Body>
    <div className="w-100 mx-2 p-2 custom-space-harga-tawar">
      <div onClick={onHide} className="text-right custom-font-6">
        <FontAwesomeIcon icon={faXmarkCircle} />
      </div>

      <p className="text-dark font-weight-bold custom-font-1">
        Perbarui status penjualan produkmu
      </p>

      <Form action="/info-product-status">
        <div className="row">
          <div className="col-md-2">
            <Input type="radio" value="true" className="mt-2" />
          </div>

          <div className="col-md-10">
            <label htmlFor="true" className="text-dark custom-font-1">
              Berhasil terjual
            </label>
            <p className="text-muted custom-font-1 custom-space-top">
              Kamu telah sepakat menjual produk ini kepada pembeli
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2">
            <Input type="radio" value="false" className="mt-2" />
          </div>

          <div className="col-md-10">
            <label htmlFor="false" className="text-dark custom-font-1">
              Batalkan transaksi
            </label>
            <p className="text-muted custom-font-1 custom-space-top">
              Kamu membatalkan transaksi produk ini dengan pembeli
            </p>
          </div>
        </div>

        <button className="mt-1 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
          Kirim
        </button>
      </Form>
    </div>
    </Modal.Body>
  );
}
