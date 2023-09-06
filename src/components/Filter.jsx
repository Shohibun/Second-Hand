import React, { useEffect } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function Filter({ onHide, allData, setFilteredData }) {
  const [newValueFilter, setNewValueFilter] = useState(false)
  const [filterData, setFilterData] = useState([
    {
      condition: "",
      basedOn: "",
      operator: "",
      value: "",
      min: 0,
      max: 0,
    },
  ]);

  const operatorWithOneValue = ["name", "description", "price"];

  const filterBasedOn = [
    { value: "name", label: "Nama" },
    { value: "description", label: "Deskripsi" },
    { value: "price", label: "Harga" },
    { value: "priceRange", label: "Jangkauan Harga" },
    { value: "category", label: "Kategori" },
  ];

  const filterOperator = [
    { value: "prefix", label: "Awalan" },
    { value: "suffix", label: "Akhiran" },
    { value: "contain", label: "Mengandung" },
    { value: "notContain", label: "Tidak Mengandung" },
    { value: "moreThan", label: ">" },
    { value: "lessThan", label: "<" },
    { value: "moreThanTo", label: ">=" },
    { value: "lessThanTo", label: "<=" },
  ];

  const filterCondition = [
    { value: "or", label: "OR" },
    { value: "and", label: "AND" },
  ];

  // const filterAdd = [
  //   { label: "+ Add filter rule" },
  //   { value: "individu", label: "Add filter rule" },
  //   { value: "group", label: "Add filter group" },
  // ];

  // Bagian perhitungan
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

  // Yang pertama kali dieksekusi
  useEffect(() => {
    console.log("newValueFilter", newValueFilter)
  }, [newValueFilter])

  // Bagian penambahan filter
  const handleNewFilter = () => {
    if (newValueFilter === false) {
      setNewValueFilter(true)
    }

    const newFilter = {
      condition: "",
      basedOn: "",
      operator: "",
      value: "",
      min: 0,
      max: 0,
    };

    setFilterData([...filterData, newFilter]);
  };

  // Bagian remove filter
  const hanldeDeleteFilter = (index) => {
    const newFilters = [...filterData]
    newFilters.splice(index, 1)
    setFilterData(newFilters)
  }

  // Bagian inputkan value ke name
  const handleFilterCondition = (index, value) => {
    const filterDataTemp = [...filterData];
    filterDataTemp[index]["condition"] = value;
    setFilterData(filterData);
  };

  const handleFilterChange = (index, value) => {
    const filterDataTemp = [...filterData];
    filterDataTemp[index]["basedOn"] = value;
    setFilterData(filterDataTemp);
  };

  const handleOperatorChange = (index, event) => {
    const { name, value } = event.target;
    const tempFilterData = [...filterData];
    tempFilterData[index][name] = value;
    setFilterData(tempFilterData);
  };

  const handleValueChange = (index, event) => {
    const { name, value } = event.target;
    const tempFilterData = [...filterData];
    tempFilterData[index][name] = value;
    setFilterData(tempFilterData);
  };

  // Bagian filter
  const handleFilter = () => {
    // or itu digabung
    // and dicari kesamaan keduanya
    // Ternyata masih belum dinamis untuk penginputan condition "or" atau "and"

    // Jadi filter ini semisal yang ke input "or" maka akan mengerjakan filter "or" saja
    // Jika yang ke input "and" makan akan mengerjakan filter and saja
    let tempData = [];

    if (filterData[0].condition === "" && newValueFilter === false) {
      console.log("masuk ke filter pertama");
      filterData.forEach((filter) => {
        if (filter.basedOn === "name") {
          if (filter.operator === "prefix") {
            tempData.push(...filterDataByNamePrefix(allData, filter.value));
          } else if (filter.operator === "suffix") {
            tempData.push(...filterDataByNameSuffix(allData, filter.value));
          }
        } else if (filter.basedOn === "description") {
          if (filter.operator === "contain") {
            tempData.push(
              ...filterDataByDescriptionContain(allData, filter.value)
            );
          } else if (filter.operator === "notContain") {
            tempData.push(
              ...filterDataByDescriptionNotContain(allData, filter.value)
            );
          }
        } else if (filter.basedOn === "price") {
          if (filter.operator === "moreThan") {
            tempData.push(...filterDataByPriceMaxTo(allData, filter.value));
          } else if (filter.operator === "lessThan") {
            tempData.push(...filterDataByPriceMinTo(allData, filter.value));
          } else if (filter.operator === "moreThanTo") {
            tempData.push(...filterDataByPriceMaxMoreTo(allData, filter.value));
          } else if (filter.operator === "lessThanTo") {
            tempData.push(...filterDataByPriceMinMoreTo(allData, filter.value));
          }
        } else if (filter.basedOn === "priceRange") {
          tempData.push(
            ...filterDataByRangePrice(allData, filter.min, filter.max)
          );
        } else if (filter.basedOn === "category") {
          tempData.push(...filterDataByCategory(allData, filter.value));
        }
      });
    } else {
      if (filterData[1].condition === "or") {
        // Jadi langsung dipush ke array kosong
        console.log("masuk or");
        filterData.forEach((filter) => {
          if (filter.basedOn === "name") {
            if (filter.operator === "prefix") {
              tempData.push(...filterDataByNamePrefix(allData, filter.value));
            } else if (filter.operator === "suffix") {
              tempData.push(...filterDataByNameSuffix(allData, filter.value));
            }
          } else if (filter.basedOn === "description") {
            if (filter.operator === "contain") {
              tempData.push(
                ...filterDataByDescriptionContain(allData, filter.value)
              );
            } else if (filter.operator === "notContain") {
              tempData.push(
                ...filterDataByDescriptionNotContain(allData, filter.value)
              );
            }
          } else if (filter.basedOn === "price") {
            if (filter.operator === "moreThan") {
              tempData.push(...filterDataByPriceMaxTo(allData, filter.value));
            } else if (filter.operator === "lessThan") {
              tempData.push(...filterDataByPriceMinTo(allData, filter.value));
            } else if (filter.operator === "moreThanTo") {
              tempData.push(
                ...filterDataByPriceMaxMoreTo(allData, filter.value)
              );
            } else if (filter.operator === "lessThanTo") {
              tempData.push(
                ...filterDataByPriceMinMoreTo(allData, filter.value)
              );
            }
          } else if (filter.basedOn === "priceRange") {
            tempData.push(
              ...filterDataByRangePrice(allData, filter.min, filter.max)
            );
          } else if (filter.basedOn === "category") {
            tempData.push(...filterDataByCategory(allData, filter.value));
          }
        });
      } else if (filterData[1].condition === "and") {
        // Seperti disaring satu-satu sampai dapat yang diinginkan
        console.log("masuk and");
        tempData = [...allData];
        filterData.forEach((filter) => {
          if (filter.basedOn === "name") {
            if (filter.operator === "prefix") {
              tempData = filterDataByNamePrefix(tempData, filter.value);
            } else if (filter.operator === "suffix") {
              tempData = filterDataByNameSuffix(tempData, filter.value);
            }
          } else if (filter.basedOn === "description") {
            if (filter.operator === "contain") {
              tempData = filterDataByDescriptionContain(tempData, filter.value);
            } else if (filter.operator === "notContain") {
              tempData = filterDataByDescriptionNotContain(
                tempData,
                filter.value
              );
            }
          } else if (filter.basedOn === "price") {
            if (filter.operator === "moreThan") {
              tempData = filterDataByPriceMaxTo(tempData, filter.value);
            } else if (filter.operator === "lessThan") {
              tempData = filterDataByPriceMinTo(tempData, filter.value);
            } else if (filter.operator === "moreThanTo") {
              tempData = filterDataByPriceMaxMoreTo(tempData, filter.value);
            } else if (filter.operator === "lessThanTo") {
              tempData = filterDataByPriceMinMoreTo(tempData, filter.value);
            }
          } else if (filter.basedOn === "priceRange") {
            tempData = filterDataByRangePrice(tempData, filter.min, filter.max);
          } else if (filter.basedOn === "category") {
            tempData = filterDataByCategory(tempData, filter.value);
          }
        });
      }
    }

    setFilteredData(tempData);
    console.log("setFilteredData", tempData);
    console.log("FilterData", filterData);
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

        {filterData.map((filter, index) => {
          return (
            <div className="row mb-2" key={index}>
              <div className="col-md-2">
                <select
                  className="form-control"
                  onChange={(event) => {
                    handleFilterCondition(index, event.target.value);
                  }}
                >
                  <option value={""} disabled selected>
                    Condition
                  </option>
                  {filterCondition.map((item) => {
                    return <option value={item.value}>{item.label}</option>;
                  })}
                </select>
              </div>

              <div className="col-md-2">
                <select
                  className="form-control"
                  onChange={(event) => {
                    handleFilterChange(index, event.target.value);
                  }}
                >
                  <option value={""} disabled selected>
                    Based On
                  </option>
                  {filterBasedOn.map((item) => {
                    return <option value={item.value}>{item.label}</option>;
                  })}
                </select>
              </div>

              {operatorWithOneValue.includes(filter.basedOn) ? (
                <>
                  <div className="col-md-2">
                    <select
                      name="operator"
                      className="form-control"
                      onChange={(event) => {
                        handleOperatorChange(index, event);
                      }}
                    >
                      <option value={""} disabled selected>
                        Contains
                      </option>
                      {filter.basedOn === "name"
                        ? filterOperator.slice(0, 2).map((item, index) => {
                            return (
                              <option key={index} value={item.value}>
                                {item.label}
                              </option>
                            );
                          })
                        : filter.basedOn === "description"
                        ? filterOperator.slice(2, 4).map((item, index) => {
                            return (
                              <option key={index} value={item.value}>
                                {item.label}
                              </option>
                            );
                          })
                        : filter.basedOn === "price"
                        ? filterOperator.slice(4, 8).map((item, index) => {
                            return (
                              <option key={index} value={item.value}>
                                {item.label}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>

                  <div className="col-md-4">
                    <input
                      className="form-control"
                      type="text"
                      name="value"
                      onChange={(event) => handleValueChange(index, event)}
                    />
                  </div>
                </>
              ) : null}

              {filter.basedOn === "priceRange" ? (
                <>
                  <div className="col-md-3">
                    <input
                      className="form-control"
                      type="numeric"
                      name="min"
                      onChange={(event) => handleValueChange(index, event)}
                    />
                  </div>

                  <div className="col-md-3">
                    <input
                      className="form-control"
                      type="numeric"
                      name="max"
                      onChange={(event) => handleValueChange(index, event)}
                    />
                  </div>
                </>
              ) : null}

              {filter.basedOn === "category" ? (
                <div className="col-md-6">
                  <input
                    className="form-control"
                    type="text"
                    name="value"
                    onChange={(event) => handleValueChange(index, event)}
                  />
                </div>
              ) : null}

              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={hanldeDeleteFilter}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        <div className="mt-3">
          <button
            onClick={handleNewFilter}
            className="btn btn-outline-info w-25 text-left"
          >
            + Add Filter
          </button>
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
