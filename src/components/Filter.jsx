/* eslint-disable jsx-a11y/anchor-is-valid */
import Select from "react-select";
import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Filter({ onHide }) {
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleGroup, setIsVisibleGroup] = useState(false);
  const [isVisibleGroupTwo, setIsVisibleGroupTwo] = useState(false);

  const [rangePrice, setRangePrice] = useState(false);

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

  const optionsSatu = [
    { label: "Based on" },
    { value: "nama", label: "Nama" },
    { value: "deskripsi", label: "Deskripsi" },
    { value: "harga", label: "Harga" },
    { value: "rangeHarga", label: "Range Harga" },
    { value: "kategori", label: "Kategori" },
  ];

  const optionsDua = [
    { label: "Contains" },
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

  return (
    <Modal.Body>
      <div className="w-100 p-2">
        <div onClick={onHide} className="text-right custom-font-6">
          <FontAwesomeIcon icon={faX} className="" type="button" />
        </div>

        <div className="row">
          <div className="col-md-2 ">
            <h6>Where</h6>
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
            className="btn btn-outline-primary w-100 text-left mb-2"
          >
            Search
          </button>

          <button
            type="reset"
            className="btn btn-outline-danger w-100 text-left"
          >
            Delete Filter
          </button>
        </div>
      </div>
    </Modal.Body>
  );
}
