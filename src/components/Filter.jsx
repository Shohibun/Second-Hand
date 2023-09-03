/* eslint-disable jsx-a11y/anchor-is-valid */
import Select from "react-select";
import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Filter({
  onHide,
  allData,
  filteredData,
  setFilteredData,
}) {
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleGroup, setIsVisibleGroup] = useState(false);
  const [isVisibleGroupTwo, setIsVisibleGroupTwo] = useState(false);
  const [rangePrice, setRangePrice] = useState(false);
  const [formDataFilter, setFormDataFilter] = useState({
    basedOn: "",
    contains: "",
    awalan: "",
    akhiran: "",
    conditionTwo: "",
    conditionTwoBasedOn: "",
    conditionTwoContains: "",
  });

  const optionsSatu = [
    { value: "nama", label: "Nama" },
    { value: "deskripsi", label: "Deskripsi" },
    { value: "harga", label: "Harga" },
    { value: "rangeHarga", label: "Range Harga" },
    { value: "kategori", label: "Kategori" },
  ];

  const optionsDua = [
    { value: "awalan", label: "Berawalan" },
    { value: "akhiran", label: "Berakhiran" },
    { value: "mengandung", label: "Mengandung" },
    { value: "tidakMengandung", label: "Tidak Mengandung" },
    { value: ">", label: ">" },
    { value: "<", label: "<" },
    { value: ">=", label: ">=" },
    { value: "<=", label: "<=" },
  ];

  const optionsEmpat = [
    { value: "or", label: "OR" },
    { value: "and", label: "AND" },
  ];

  const optionsLima = [
    { label: "+ Add filter rule" },
    { value: "individu", label: "Add filter rule" },
    { value: "group", label: "Add filter group" },
    { value: "groupTwo", label: "Add filter group two" },
  ];

  // Bagian Filter
  const handleChange = (event) => {
    const { name, value } = event.target;
    // const name = event.target.name;
    // const value = event.target.value;

    if (name === "basedOn") {
      // Ketika Based On berubah, mencari option pertama yang sesuai dengan nilai baru
      let defaultContainsValue = "";

      if (value === "nama") {
        defaultContainsValue = optionsDua[0].value;
      } else if (value === "deskripsi") {
        defaultContainsValue = optionsDua[2].value;
      } else if (value === "harga") {
        defaultContainsValue = optionsDua[4].value;
      }

      setFormDataFilter({
        ...formDataFilter, // Copy semua data yang ada di formDataFilter
        [name]: value, // Lalu ubah valuenya yang namenya adalah...
        contains: defaultContainsValue, // Mengatur contains ke nilai yang sesuai
      });
    } else {
      setFilteredData({
        ...formDataFilter,
        [name]: value,
      });
    }
    console.log(formDataFilter);
  };

  const filterDataByNamePrefix = (data, keyword) => {
    // Filter untuk nama yang awalan
    const filteredData = data.filter((item) => {
      const itemName = item.nama.toLowerCase();
      const say = itemName.split(" ");
      return say[0].startsWith(keyword.toLowerCase());
    });
    return filteredData;
  };

  const filterDataByNameSuffix = (data, keyword) => {
    // Filter untuk nama yang akhiran
    const filteredData = data.filter((item) => {
      const itemName = item.nama.toLowerCase();
      const say = itemName.split(" ");
      const lastSay = say[say.length - 1];
      return lastSay.startsWith(keyword.toLowerCase());
    });
    return filteredData;
  };

  const handleFilter = () => {
    if (formDataFilter.contains === "awalan") {
      const filteredData = filterDataByNamePrefix(
        allData,
        formDataFilter.awalan
      );
      setFilteredData(filteredData);
    } else {
      const filteredData = filterDataByNameSuffix(
        allData,
        formDataFilter.akhiran
      );
      setFilteredData(filteredData);
    }
  };

  // Bagian Hide Show
  const changeHandler = (element) => {
    if (element.value === "individu") {
      console.log(element.value);
      setIsVisibleOne(true);
    } else if (element.value === "group") {
      console.log(element.value);
      setIsVisibleGroup(true);
    } else if (element.value === "groupTwo") {
      console.log(element.value);
      setIsVisibleGroupTwo(true);
    } else {
      setIsVisibleOne(false) ||
        setIsVisibleGroup(false) ||
        setIsVisibleGroupTwo(false);
    }
  };

  const deleteHandler = () => {
    if (isVisibleOne === true) {
      setIsVisibleOne(false);
    } else {
      setIsVisibleOne(true);
    }
  };

  const deleteHandlerHGroup = () => {
    if (isVisibleGroup === true) {
      setIsVisibleGroup(false);
    } else {
      setIsVisibleGroup(true);
    }
  };

  const deleteHandlerHGroupTwo = () => {
    if (isVisibleGroupTwo === true) {
      setIsVisibleGroupTwo(false);
    } else {
      setIsVisibleGroupTwo(true);
    }
  };

  const changeRange = (element) => {
    if (element.value === "rangeHarga") {
      setRangePrice(true);
    } else {
      setRangePrice(false);
    }
  };

  return (
    <Modal.Body>
      <div className="w-100 p-2">
        <div className="text-right custom-font-6">
          <FontAwesomeIcon icon={faX} onClick={onHide} type="button" />
        </div>

        <div className="row">
          <div className="col-md-2 ">
            <h6>Where</h6>
          </div>

          <div className="col-md-2">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="basedOn"
              onChange={handleChange}
            >
              <option value={""} hidden disabled selected>
                Based On
              </option>
              {optionsSatu.map((item) => {
                return <option value={item.value}>{item.label}</option>;
              })}
            </select>
          </div>

          {formDataFilter.basedOn === "rangeHarga" ? (
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlSelect1"
                placeholder="Harga Minimum"
                name="hargaMinimum"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="col-md-2">
              <select
                name="contains"
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange}
              >
                <option value={""} hidden disabled selected>
                  Contains
                </option>
                {formDataFilter.basedOn === "nama"
                  ? optionsDua.slice(0, 2).map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })
                  : formDataFilter.basedOn === "deskripsi"
                  ? optionsDua.slice(2, 4).map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })
                  : formDataFilter.basedOn === "harga"
                  ? optionsDua.slice(4, 8).map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })
                  : null}
              </select>
            </div>
          )}

          {formDataFilter.basedOn === "rangeHarga" ? (
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Harga Maksimum"
                name="hargaMaksimum"
              />
            </div>
          ) : (
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                placeholder={formDataFilter.contains}
                name={formDataFilter.contains}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="col-md-2">
            <button type="button" className="btn btn-danger">
              Remove
            </button>
          </div>
        </div>

        {isVisibleOne ? (
          <div className="row">
            <div className="col-md-2">
              <Select options={optionsEmpat} defaultValue={optionsEmpat[1]} />
            </div>

            <div className="col-md-2">
              <Select options={optionsSatu} defaultValue={optionsSatu[0]} />.
            </div>

            <div className="col-md-2">
              <Select options={optionsDua} defaultValue={optionsDua[0]} />
            </div>

            <div className="col-md-4">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Value...."
                aria-label="nama"
                name="productName"
              />
            </div>

            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-danger"
                onClick={deleteHandler}
              >
                Remove
              </button>
            </div>
          </div>
        ) : null}

        {isVisibleGroup ? (
          <div className="row">
            <div className="col-md-2">
              <div className="text-right ">
                <h6>Or</h6>
              </div>
            </div>

            <div className="col-md-10">
              <div className=" border p-3 rounded custom-bg-filter">
                <div className="row">
                  <div className="col-md-2 ">
                    <h6>Where</h6>
                  </div>

                  <div className="col-md-2">
                    <Select
                      options={optionsSatu}
                      defaultValue={optionsSatu[0]}
                    />
                  </div>

                  <div className="col-md-2">
                    <Select options={optionsDua} defaultValue={optionsDua[0]} />
                  </div>

                  <div className="col-md-4">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Value...."
                      aria-label="nama"
                      name="productName"
                    />
                  </div>

                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={deleteHandlerHGroup}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {isVisibleGroupTwo ? (
                  <div className="row my-3 ">
                    <div className="col-md-2">
                      <Select
                        options={optionsEmpat}
                        defaultValue={optionsEmpat[0]}
                      />
                    </div>

                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <Select
                            options={optionsSatu}
                            defaultValue={optionsSatu[0]}
                            onChange={changeRange}
                          />
                        </div>

                        {rangePrice ? (
                          <>
                            <div className="col-md-4">
                              <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Value...."
                                aria-label="nama"
                                name="productName"
                              />
                            </div>

                            <div className="col-md-1">
                              <hr />
                            </div>

                            <div className="col-md-4">
                              <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Value...."
                                aria-label="nama"
                                name="productName"
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-md-3">
                              <Select
                                options={optionsDua}
                                defaultValue={optionsDua[0]}
                              />
                            </div>

                            <div className="col-md-6">
                              <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Value...."
                                aria-label="nama"
                                name="productName"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={deleteHandlerHGroupTwo}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : null}

                <div className="row">
                  <div className="col-md-4">
                    <Select
                      options={optionsLima}
                      defaultValue={optionsLima[0]}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-3">
          <Select
            options={optionsLima}
            defaultValue={optionsLima[0]}
            onChange={changeHandler}
          />
        </div>

        <hr />

        <div className="">
          <button
            type="button"
            onClick={handleFilter}
            className="btn btn-outline-primary w-100 text-left mb-2"
          >
            Search
          </button>

          <button
            type="button"
            onClick={() => {
              setFilteredData(allData);
            }}
            className="btn btn-outline-danger w-100 text-left"
          >
            Delete Filter
          </button>
        </div>
      </div>
    </Modal.Body>
  );
}
