import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { useMediaQuery } from 'react-responsive';

export default function InfoProductAddSeller() {
  const isMobile = useMediaQuery({minWidth: 600})
  return (
    <div className="container mt-5 pt-4">
      <div className={isMobile ? 'w-75 mx-auto' : 'w-100 mx-auto'}>
        <div className="custom-responsive-display">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="custom-font-3 position-absolute"
          />
        </div>
        <span>
          <div className={isMobile ? 'w-50 mx-auto' : 'w-100 mx-auto px-3'}>
            <Form action={"/dashboard-product-seller"}>
              <div className="form-group mb-3">
                <label
                  htmlFor="namaproduk"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Nama Produk
                </label>
                <Input
                  type="text"
                  className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                  placeholder="Nama Produk"
                />
              </div>

              <div className="form-group mb-3">
                <label
                  htmlFor="hargaproduk"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Harga Produk
                </label>
                <Input
                  type="text"
                  className="form-control p-2 pl-4 custom-font-1 custom-border-auth"
                  placeholder="Rp 0,00"
                />
              </div>

              <div className="form-group mb-3">
                <label
                  htmlFor="kategori"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Kategori
                </label>
                <div className="row">
                  <div className="col-md-12">
                    <select
                      className="form-select text-muted w-100 px-4 py-2 border custom-border-auth"
                      aria-label="Default select example"
                    >
                      <option defaultValue={{ value: null }}>
                        Pilih Kategori
                      </option>
                      <option value="Jember">Jam Tangan</option>
                      <option value="Jakarta">Elektronik</option>
                      <option value="Surabaya">Komputer &amp; Aksesoris</option>
                      <option value="Malang">Hobi &amp; Koleksi</option>
                      <option value="Bali">Perawatan &amp; Kecantikan</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="password"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Deskripsi
                </label>
                <Input
                  type="text"
                  className="form-control p-2 pl-4 pt-4 pb-5 custom-font-1 custom-border-auth"
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="password"
                  className="text-dark font-weight-bold mb-1 custom-font-2"
                >
                  Foto Produk
                </label>
                <div className="text-center ml-1 row align-items-center custom-bg-photo-product">
                  <FontAwesomeIcon
                    icon={faPlusSquare}
                    className="m-auto custom-font-3"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <button className="mt-3 form-group font-weight-bold py-2 w-100 custom-border-button custom-border-auth custom-font-1">
                    Preview
                  </button>
                </div>

                <div className="col-6">
                  <button className="mt-3 form-group font-weight-bold text-white border-0 py-2 w-100 custom-border-auth custom-button-auth custom-font-1">
                    Terbitkan
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </span>
      </div>
    </div>
  );
}
