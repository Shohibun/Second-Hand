import React, { useState } from "react";
import data from "../databases/data.json";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Filter from "../components/Filter";
import { Modal } from "react-bootstrap";

export default function Home() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  const [showFilter, setShowFilter] = useState(false);
  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  const allData = data.datas;
  const [filteredData, setFilteredData] = useState([]); //data awal array kosong

  useEffect(() => {
    //yang dieksekusi pertama kali
    window.scroll(0, 0);
  }, []);

  function filterProduk(data, nama, hargaMinimum, hargaMaksimum, kategori) {
    return data.filter((produk) => {
      const namaMatch =
        !nama || produk.nama.toLowerCase().includes(nama.toLowerCase());
      const hargaMatch =
        (!hargaMinimum || produk.harga >= hargaMinimum) &&
        (!hargaMaksimum || produk.harga <= hargaMaksimum);
      const kategoriMatch =
        !kategori || produk.kategori.toLowerCase() === kategori.toLowerCase();

      return namaMatch && hargaMatch && kategoriMatch;
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //agar tidak reload tampilannya

    const filterNama = event.target.productName.value;
    const filterHargaMin = event.target.rangeMinimum.value;
    const filterHargaMax = event.target.rangeMaximum.value;
    const filterKategori = event.target.category.value;

    const filtered = filterProduk(
      allData,
      filterNama,
      filterHargaMin,
      filterHargaMax,
      filterKategori
    );
    setFilteredData(filtered);
    console.log(filtered);
  };

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

        <div className="d-flex justify-content-center mb-2">
          <button
            className="btn custom-cursor custom-border-button-3 w-25"
            onClick={handleShowFilter}
          >
            Filter
          </button>

          <Modal
            size="xl"
            show={showFilter}
            onHide={handleCloseFilter}
            centered
          >
            <Filter
              onHide={handleCloseFilter}
              allData={allData}
              setFilteredData={setFilteredData}
            />
          </Modal>
        </div>

        <form method="GET" className="form-inline mb-2" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Nama/Deskripsi"
            aria-label="nama"
            name="productName"
          />
          <input
            className="form-control mr-sm-2"
            type="number"
            placeholder="Harga minimum"
            aria-label="hargaMinimum"
            name="rangeMinimum"
          />
          <input
            className="form-control mr-sm-2"
            type="number"
            placeholder="Harga maksimum"
            aria-label="hargaMaksimal"
            name="rangeMaximum"
          />
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Kategori"
            aria-label="kategori"
            name="category"
          />
          <button
            className="btn cursor custom-border-button-3 my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="row mb-3">
          {allData.length === 0 ? (
            <>
              <h1>Belum ada produk</h1>
            </>
          ) : filteredData.length === 0 ? (
            allData.map((produk) => (
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
          ) : (
            filteredData.map((produk) => (
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
