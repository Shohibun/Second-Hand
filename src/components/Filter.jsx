import Select from "react-select";
import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Filter({
  onHide,
  allData,
  setFilteredData,
  filteredData,
}) {
  const [isVisibleOne, setIsVisibleOne] = useState(false);
  const [isVisibleGroup, setIsVisibleGroup] = useState(false);
  const [isVisibleGroupTwo, setIsVisibleGroupTwo] = useState(false);
  const [rangePrice, setRangePrice] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [formDataFilter, setFormDataFilter] = useState({
    filterOneBasedOn: "", // Option pertama (nama, deskripsi, dll)
    filerTwoBasedOn: "", // Option pertama tapi di filter kedua (nama, deskripsi, dll)
    filterOneContains: "", // Option filterOneContains (filterOneAwalan, filterOneAkhiran, dll)
    filterTwoContains: "", // Option filterOneContains di filter kedua (filterOneAwalan, filterOneAkhiran, dll)
    condition: "", // Kondisi dimana OR atau AND
    filterOneAwalan: "",
    filterOneAkhiran: "",
    filterOneMengandung: "",
    filterOneTidakMengandung: "",
    filterOneMaxTo: "",
    filterOneMinTo: "",
    filterOneMaxMoreTo: "",
    filterOneMinMoreTo: "",
    filterOneRangeMin: "",
    filterOneRangeMax: "",
    filterOneCategory: "",
    filterTwoAwalan: "",
    filterTwoAkhiran: "",
    filterTwoMengandung: "",
    filterTwoTidakMengandung: "",
    filterTwoMaxTo: "",
    filterTwoMinTo: "",
    filterTwoMaxMoreTo: "",
    filterTwoMinMoreTo: "",
    filterTwoRangeMin: "",
    filterTwoRangeMax: "",
    filterTwoCategory: "",
  });

  const filterOneOptionsSatu = [
    { value: "filterOneName", label: "Nama" },
    { value: "filterOneDescription", label: "Deskripsi" },
    { value: "filterOnePrice", label: "Harga" },
    { value: "filterOneRangePrice", label: "Range Harga" },
    { value: "filterOneCategory", label: "Kategori" },
  ];

  const filterOneOptionsDua = [
    { value: "filterOneAwalan", label: "Awalan" },
    { value: "filterOneAkhiran", label: "Akhiran" },
    { value: "filterOneMengandung", label: "Mengandung" },
    { value: "filterOnetidakMengandung", label: "Tidak Mengandung" },
    { value: "filterOneMaxTo", label: ">" },
    { value: "filterOneMinTo", label: "<" },
    { value: "filterOneMaxMoreTo", label: ">=" },
    { value: "filterOneMinMoreTo", label: "<=" },
  ];

  const filterTwoOptionsSatu = [
    { value: "filterTwoName", label: "Nama" },
    { value: "filterTwoDescription", label: "Deskripsi" },
    { value: "filterTwoPrice", label: "Harga" },
    { value: "filterTwoRangePrice", label: "Range Harga" },
    { value: "filterTwoCategory", label: "Kategori" },
  ];

  const filterTwoOptionsDua = [
    { value: "filterTwoAwalan", label: "Awalan" },
    { value: "filterTwoAkhiran", label: "Akhiran" },
    { value: "filterTwoMengandung", label: "Mengandung" },
    { value: "filterTwotidakMengandung", label: "Tidak Mengandung" },
    { value: "filterTwoMaxTo", label: ">" },
    { value: "filterTwoMinTo", label: "<" },
    { value: "filterTwoMaxMoreTo", label: ">=" },
    { value: "filterTwoMinMoreTo", label: "<=" },
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
    console.log(event.target, "target");

    if (name === "filterOneBasedOn") {
      // Ketika "Based On" berubah, cari option pertama yang sesuai dengan nilai baru
      let defaultfilterOneContainsValue = "";
      if (value === "filterOneName") {
        defaultfilterOneContainsValue = filterOneOptionsDua[0].value;
      } else if (value === "filterOneDescription") {
        defaultfilterOneContainsValue = filterOneOptionsDua[2].value;
      } else if (value === "filterOnePrice") {
        defaultfilterOneContainsValue = filterOneOptionsDua[4].value;
      } else if (value === "filterOneCategory") {
        defaultfilterOneContainsValue = filterOneOptionsSatu[4].value;
      }

      setFormDataFilter({
        ...formDataFilter, // Copy semua dataa yang ada di formDataFilter
        [name]: value, // Lalu ubah value nya yang name nya adalah...
        filterOneContains: defaultfilterOneContainsValue, // Atur "filterOneContains" ke nilai yang sesuai
      });
    } else {
      setFormDataFilter({
        ...formDataFilter,
        [name]: value,
      });
    }
    console.log(formDataFilter);
  };

  const filterDataByNamePrefix = (data, keyword) => {
    // Fiter untuk nama filterOneAwalan
    const filteredData = data.filter((item) => {
      const itemName = item.nama.toLowerCase(); // Gantilah 'nama' dengan nama bidang yang sesuai
      const kataKata = itemName.split(" ");
      // Periksa apakah kata pertama dari nama item mengandung kata kunci
      return kataKata[0].startsWith(keyword.toLowerCase());
    });
    return filteredData;
  };

  const filterDataByNameSuffix = (data, keyword) => {
    // Fiter untuk nama filterOneAkhiran
    const filteredData = data.filter((item) => {
      const itemName = item.nama.toLowerCase(); // Gantilah 'nama' dengan nama bidang yang sesuai
      const kataKata = itemName.split(" ");
      // Periksa apakah kata terakhir dari nama item mengandung kata kunci
      const kataTerakhir = kataKata[kataKata.length - 1];
      return kataTerakhir.startsWith(keyword.toLowerCase());
    });
    return filteredData;
  };

  const filterDataByDescriptionContain = (data, keyword) => {
    const filteredData = data.filter((item) => {
      const itemDescription = item.deskripsi
        .toLowerCase()
        .includes(keyword.toLowerCase());
      return itemDescription;
    });
    return filteredData;
  };

  const filterDataByDescriptionNotContain = (data, keyword) => {
    const filteredData = data.filter((item) => {
      const description = item.deskripsi;
      const itemDescription = !description
        .toLowerCase()
        .includes(keyword.toLowerCase());
        console.log("tidak megandung satu")
      return itemDescription;
    });
    return filteredData;
  };

  const filterDataByCategory = (data, keyword) => {
    const filteredData = data.filter((item) => {
      const itemCategory =
        item.kategori.toLowerCase() === keyword.toLowerCase();
      return itemCategory;
    });
    return filteredData;
  };

  const filterDataByPriceMaxTo = (data, limit) => {
    const filteredData = data.filter((item) => {
      const itemPriceMaxTo = item.harga > limit;
      return itemPriceMaxTo;
    });
    return filteredData;
  };

  const filterDataByPriceMinTo = (data, limit) => {
    const filteredData = data.filter((item) => {
      const itemPriceMinTo = item.harga < limit;
      return itemPriceMinTo;
    });
    return filteredData;
  };

  const filterDataByPriceMaxMoreTo = (data, limit) => {
    const filteredData = data.filter((item) => {
      const itemPriceMaxMoreTo = item.harga >= limit;
      return itemPriceMaxMoreTo;
    });
    return filteredData;
  };

  const filterDataByPriceMinMoreTo = (data, limit) => {
    const filteredData = data.filter((item) => {
      const itemPriceMinMoreTo = item.harga <= limit;
      return itemPriceMinMoreTo;
    });
    return filteredData;
  };

  const filterDataByRangePrice = (data, limitOne, limitTwo) => {
    const filteredData = data.filter((item) => {
      const itemRangePrice = item.harga >= limitOne && item.harga <= limitTwo;
      return itemRangePrice;
    });
    return filteredData;
  };

  const handleFilter = () => {
    if (formDataFilter.filterOneContains === "filterOneAwalan") {
      const filteredData = filterDataByNamePrefix(
        allData,
        formDataFilter.filterOneAwalan
      );
      setResultData(filteredData);
    } else if (formDataFilter.filterOneContains === "filterOneAkhiran") {
      const filteredData = filterDataByNameSuffix(
        allData,
        formDataFilter.filterOneAkhiran
      );
      setResultData(filteredData);
    } else if (formDataFilter.filterOneContains === "filterOneMengandung") {
      const filteredData = filterDataByDescriptionContain(
        allData,
        formDataFilter.filterOneMengandung
      );
      setResultData(filteredData);
    } else if (
      formDataFilter.filterOneContains === "filterOnetidakMengandung"
    ) {
      const filteredData = filterDataByDescriptionNotContain(
        allData,
        formDataFilter.filterOnetidakMengandung
      );
      setResultData(filteredData);
    } else if (formDataFilter.filterOneContains === "filterOneCategory") {
      const filteredData = filterDataByCategory(
        allData,
        formDataFilter.filterOneCategory
      );
      setResultData(filteredData);
    } else if (formDataFilter.filterOneContains === "filterOneMaxTo") {
      const filteredData = filterDataByPriceMaxTo(
        allData,
        formDataFilter.filterOneMaxTo
      );
      setResultData(filteredData);
    } else if (formDataFilter.filterOneContains === "filterOneMinTo") {
      const filteredData = filterDataByPriceMinTo(
        allData,
        formDataFilter.filterOneMinTo
      );
      setResultData(filteredData);
    } else if (formDataFilter.filterOneContains === "filterOneMaxMoreTo") {
      const filteredData = filterDataByPriceMaxMoreTo(
        allData,
        formDataFilter.filterOneMaxMoreTo
      );
      setResultData(filteredData);
    } else if (formDataFilter.filterOneContains === "filterOneMinMoreTo") {
      const filteredData = filterDataByPriceMinMoreTo(
        allData,
        formDataFilter.filterOneMinMoreTo
      );
      setResultData(filteredData);
    } else {
      const filteredData = filterDataByRangePrice(
        allData,
        formDataFilter.filterOneRangeMin,
        formDataFilter.filterOneRangeMax
      );
      setResultData(filteredData);
    }

    // or itu digabung
    // and dicari kesamaan keduanya

    if (formDataFilter.condition === "or") {
      if (formDataFilter.filterTwoContains === "filterTwoAwalan") {
        const filteredData = filterDataByNamePrefix(
          allData,
          formDataFilter.filterTwoAwalan
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (formDataFilter.filterTwoContains === "filterTwoAkhiran") {
        const filteredData = filterDataByNameSuffix(
          allData,
          formDataFilter.filterTwoAkhiran
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (formDataFilter.filterTwoContains === "filterTwoMengandung") {
        const filteredData = filterDataByDescriptionContain(
          allData,
          formDataFilter.filterTwoMengandung
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (
        formDataFilter.filterTwoContains === "filterTwoTidakMengandung"
      ) {
        const filteredData = filterDataByDescriptionNotContain(
          allData,
          formDataFilter.filterTwoTidakMengandung
        );
        console.log("tidak mengandung")
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (formDataFilter.filterTwoContains === "filterTwoMaxTo") {
        const filteredData = filterDataByPriceMaxTo(
          allData,
          formDataFilter.filterTwoMaxTo
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (formDataFilter.filterTwoContains === "filterTwoMinTo") {
        const filteredData = filterDataByPriceMinTo(
          allData,
          formDataFilter.filterTwoMinTo
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (formDataFilter.filterTwoContains === "filterTwoMaxMoreTo") {
        const filteredData = filterDataByPriceMaxMoreTo(
          allData,
          formDataFilter.filterTwoMaxMoreTo
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (formDataFilter.filterTwoContains === "filterTwoMinMoreTo") {
        const filteredData = filterDataByPriceMinMoreTo(
          allData,
          formDataFilter.filterTwoMinMoreTo
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else if (formDataFilter.filterTwoContains === "filterTwoCategory") {
        const filteredData = filterDataByCategory(
          allData,
          formDataFilter.filterTwoCategory
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      } else {
        const filteredData = filterDataByRangePrice(
          allData,
          formDataFilter.filterTwoRangeMin,
          formDataFilter.filterTwoRangeMax
        );
        setResultData((resultData) => [...resultData, ...filteredData]);
      }
    }

    setFilteredData(resultData);
    console.log("result data:", resultData);
    console.log("form data filter:", formDataFilter);
  };

  // Bagian Hide and Show
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
          <FontAwesomeIcon
            icon={faX}
            className=""
            type="button"
            onClick={onHide}
          />
        </div>

        <div className="row">
          <div className="col-md-2 ">
            <h6>Where</h6>
          </div>

          <div className="col-md-2">
            <select
              name="filterOneBasedOn"
              onChange={handleChange}
              className="form-control"
              defaultValue={""}
            >
              <option value={""} hidden disabled>
                Based On
              </option>
              {filterOneOptionsSatu.map((item) => {
                return <option value={item.value}>{item.label}</option>;
              })}
            </select>
          </div>

          {formDataFilter.filterOneBasedOn === "filterOneRangePrice" ? (
            <div className="col-md-3">
              <input
                className="form-control mr-sm-2"
                type="number"
                placeholder="Harga minimum"
                aria-label="hargaMinimum"
                name="filterOneRangeMin"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="col-md-2">
              <select
                name="filterOneContains"
                className="form-control"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value={""} hidden disabled>
                  Contains
                </option>
                {formDataFilter.filterOneBasedOn === "filterOneName"
                  ? filterOneOptionsDua.slice(0, 2).map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })
                  : formDataFilter.filterOneBasedOn === "filterOneDescription"
                  ? filterOneOptionsDua.slice(2, 4).map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })
                  : formDataFilter.filterOneBasedOn === "filterOnePrice"
                  ? filterOneOptionsDua.slice(4, 8).map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })
                  : null}
              </select>
            </div>
          )}

          {formDataFilter.filterOneBasedOn === "filterOneRangePrice" ? (
            <div className="col-md-3">
              <input
                className="form-control mr-sm-2"
                type="number"
                placeholder="Harga maksimum"
                aria-label="hargaMaksimal"
                name="filterOneRangeMax"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                placeholder={formDataFilter.filterOneContains}
                name={formDataFilter.filterOneContains}
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
          <div className="row mt-3">
            <div className="col-md-2">
              <select
                name="condition"
                className="form-control"
                onChange={handleChange}
              >
                <option value={""} hidden disabled selected>Condition</option>
                {optionsEmpat.map((item) => (
                  <option value={item.value}>{item.label}</option>
                ))}
              </select>
            </div>

            <div className="col-md-2">
              <select
                name="filerTwoBasedOn"
                className="form-control"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value={""} hidden disabled>Based On</option>
                {filterTwoOptionsSatu.map((item) => {
                  return <option value={item.value}>{item.label}</option>;
                })}
              </select>
            </div>

            {formDataFilter.filerTwoBasedOn === "filterTwoRangePrice" ? (
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Harga Minimum"
                  name="filterTwoRangeMin"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="col-md-2">
                <select
                  name="filterTwoContains"
                  className="form-control"
                  onChange={handleChange}
                  defaultValue={""}
                >
                  <option value={""} hidden disabled>
                    Contains
                  </option>
                  {formDataFilter.filerTwoBasedOn === "filterTwoName"
                    ? filterTwoOptionsDua.slice(0, 2).map((item) => {
                        return <option value={item.value}>{item.label}</option>;
                      })
                    : formDataFilter.filerTwoBasedOn === "filterTwoDescription"
                    ? filterTwoOptionsDua.slice(2, 4).map((item) => {
                        return <option value={item.value}>{item.label}</option>;
                      })
                    : formDataFilter.filerTwoBasedOn === "filterTwoPrice"
                    ? filterTwoOptionsDua.slice(4, 8).map((item) => {
                        return <option value={item.value}>{item.label}</option>;
                      })
                    : null}
                </select>
              </div>
            )}

            {formDataFilter.filerTwoBasedOn === "filterTwoRangePrice" ? (
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Harga Maksimum"
                  name="filterTwoRangeMax"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="col-md-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder={formDataFilter.filterTwoContains}
                  name={formDataFilter.filterTwoContains}
                  onChange={handleChange}
                />
              </div>
            )}

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
                      options={filterOneOptionsSatu}
                      defaultValue={filterOneOptionsSatu[0]}
                      name="filterOneBasedOn"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-2">
                    <Select
                      options={filterOneOptionsDua}
                      name="filterOneContains"
                      defaultValue={filterOneOptionsDua[0]}
                      onChange={handleChange}
                    />
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
                            options={filterOneOptionsSatu}
                            defaultValue={filterOneOptionsSatu[0]}
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
                                options={filterOneOptionsDua}
                                defaultValue={filterOneOptionsDua[0]}
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
            onClick={handleFilter}
            type="button"
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
