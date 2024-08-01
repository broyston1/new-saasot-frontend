import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import {
  ViewContractDbWithoutPageAction,
  Invoicelistrequest,
  Arrlist,
  Datelist,
  GetContractDbFilterListAction,
  getCutomerTotalFilterAction,
} from "../../redux/actions/Admin-saasot-action";


import { ViewContractDbUserAction } from "../../redux/actions/UserDetailAction";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { CSVLink } from "react-csv";
import { MDBDataTable, MDBTableFoot } from "mdbreact";
import { Link, useNavigate, useParams } from "react-router-dom";
import SpinnerLoading from "../../containers/SpinnerLoader";
import LoadingSpinner from "../../containers/LoadingSpinner";

const ContractDbView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userID } = useParams()
  const [secTableLoader, setSecTableLoader] = useState(false);
  const [revinueList, setRevinueList] = useState("billing");
  const [startPeriod, setStartPeriod] = useState("Jun 18");
  const [endPeriod, setEndPeriod] = useState("Nov 29");
  const seccontainerRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("day");
  const [usersForRender, setUsersForRender] = useState([]);
  const [addSection, setAddSection] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  const [pageNumShow1, setPageNumShow1] = useState(1);
  const [invoicelistPage, setInvoicelistPage] = useState();
  const [atoZfilter, setAtoZFilter] = useState("");

  const [ViewContractDbDataR, setViewContractDbData] = useState();


  const { DBfilterData } = useSelector(
    (state) => state.GetContractDbFilterListReducer
  );

  const {
    ViewContractDbData,
    success: ViewContractDbDataSuccess,

  } = useSelector((state) => state.ViewContractDbUserReducer);
  const { ViewContractDbDataRed, success, error } = useSelector(
    (state) => state.ViewContractDbWihtoutPageReducer
  );

  // useEffect(()=>{
  //   if(ViewContractDbDataRed){
  //     setViewContractDbData(ViewContractDbDataRed)
  //   }

  // },[success,ViewContractDbDataRed,revinueList, selectedOption, pageNumShow1,atoZfilter])
console.log("ViewContractDbDataR",ViewContractDbDataR)
  useEffect(() => {
    if (userID) {
      setViewContractDbData(ViewContractDbData)
    } else if  (success && ViewContractDbDataRed && !userID) {
      setViewContractDbData(ViewContractDbDataRed);
    }
  }, [success,userID,ViewContractDbDataSuccess]);

  useEffect(() => {
    if (atoZfilter || revinueList) {
      setFilteredData([]);
    }
  }, [atoZfilter, revinueList]);

  const { getCotTatalFilter } = useSelector(
    (state) => state.getCutomerTotalFilterReducer
  );

  useEffect(() => {
    if (userID) {
      dispatch(ViewContractDbUserAction(
        userID,
        revinueList,
        startPeriod,
        endPeriod,
        selectedOption,
        pageNumShow1
      ))
    } else if (!userID && revinueList) {
      dispatch(
        ViewContractDbWithoutPageAction(
          revinueList,
          startPeriod,
          endPeriod,
          selectedOption,
          pageNumShow1,
          atoZfilter
        )
      );
    }
  }, [revinueList, selectedOption, pageNumShow1, atoZfilter, userID]);

  useEffect(() => {
    if (error) {
      setSecTableLoader(false);
    }
  }, [error]);

  useEffect(() => {
    if (selectedOption) {
      dispatch(getCutomerTotalFilterAction(selectedOption, revinueList,userID));
    }
  }, [selectedOption, revinueList,userID]);

  useEffect(() => {
    dispatch(GetContractDbFilterListAction());
  }, []);

  useEffect(() => {
    if (
      ViewContractDbDataR &&
      ViewContractDbDataR.data &&
      ViewContractDbDataR.heading
    ) {
      const keysToMatch = ["revenue", "billing", "deferred_revenue"];

      const filterArray = (item) => {
        const matchedKey = keysToMatch.find((key) => item[key]);
        return matchedKey ? matchedKey : null;
      };
      const userData = ViewContractDbDataR?.data?.map((item, index) => {
        const selectedArray = filterArray(item);
        const formattedData = {
          product_name: (
            <div className="viewcontractdiv1t" style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <p
                  className="editiconDeletenew"
                  onClick={() =>
                    handleCustomerClick1(
                      index,
                      item?.items?.tansaction?.customer_name
                    )
                  }
                >
                  {item?.items?.tansaction?.customer_name}
                </p>
              </div>
            </div>
          ),

          order_close_data: (
            <p className="producttextdate">
              {item.items?.tansaction?.order_close_data}
            </p>
          ),
          customer_name: item.items?.tansaction?.customer_name,

          invoice_number: item.items?.tansaction?.invoice_number,
          billing_method: (
            <p className="producttext">
              {item?.items?.productp_service?.product_name}
            </p>
          ),
          qty: item.items?.quantity,
          sale_price: item.items?.sale_price,
          amount: item.items?.amount,
          s_start_d: moment(item.items?.s_start_d).format("MM-DD-yyyy"),
          s_end_d: moment(item.items?.s_end_d).format("MM-DD-yyyy"),
        };
        if (selectedArray !== null) {
          ViewContractDbDataR?.heading?.forEach((heading) => {
            const columnName = heading.toLowerCase().replace(/[^a-z0-9]/g, "_");
            const revenue = item[selectedArray]?.find(
              (rev) =>
                rev.date.toLowerCase().replace(/[^a-z0-9]/g, "_") === columnName
            );
            formattedData[columnName] = revenue ? revenue.value.toFixed(2) : "";
          });
        }
        return formattedData;
      });

      // Calculate column totals
      const columnTotals = {
        product_name: "Total",
        order_close_data: "",
        customer_name: "",
        invoice_number: "",
        billing_method: "",
        qty: null,
        sale_price: null,
        amount: null,
        ...(ViewContractDbDataR?.heading?.filter(Boolean).map((heading) => {
          const field = heading?.toLowerCase()?.replace(/[^a-z0-9]/g, "_");
          return {
            label: heading || "",
            field: field || "",
            sort: "asc",
            width: 500,
          };
        }) ?? []),
      };

      ViewContractDbDataR?.heading?.forEach((heading) => {
        const columnName = heading;
        const apiEntry = getCotTatalFilter?.total?.find(
          (entry) => entry.date === columnName
        );
        columnTotals[columnName] = apiEntry
          ? apiEntry.value.toFixed(2)
          : "0.00";
      });

      // Add the totals row to the userData array
      userData.push(columnTotals);

      setUsersForRender(userData);
    }
  }, [ViewContractDbDataR, success, ViewContractDbDataRed]);

  const handleCustomerClick1 = (index, customer_name) => {
    // Handle the click event for the customer_name here
    const idxArray = ViewContractDbDataR?.data[index].tansaction?.id; // Get the idx array
    localStorage.setItem("name", customer_name);
    navigate(`/customer-screen/${idxArray}`);
  };

  const csvData1 = usersForRender?.map((rowData) => {
    const dynamicColumns = ViewContractDbDataR?.heading
      ?.map((heading) => {
        const field = heading?.toLowerCase()?.replace(/[^a-z0-9]/g, "_");
        const value = rowData[field];
        return { [heading]: value };
      })
      .filter(
        (column) =>
          column[Object.keys(column)[0]] !== undefined &&
          column[Object.keys(column)[0]] !== null &&
          column[Object.keys(column)[0]] !== 0
      );

    const dataRow = {
      Customer: rowData.customer_name || "",
      "Invoice Date": rowData.order_close_data || "",
      "Invoice Number": rowData.invoice_number || "",
      "Product/Service": rowData.billing_method || "",
      Qty: rowData.qty || "",
      "Sales Price": rowData.sale_price || "",
      Amount: rowData.amount || "",
      "Subscription Start Date": rowData.s_start_d || "",
      "Subscription End Date": rowData.s_end_d || "",
      ...(dynamicColumns?.reduce((acc, cur) => ({ ...acc, ...cur }), {}) || {}),
    };

    return dataRow;
  });

  const createWorksheet = () => {
    const worksheetData = [
      Object.keys(csvData1[0]),
      ...csvData1.map(Object.values),
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    return worksheet;
  };

  const createWorkbook = () => {
    const worksheet = createWorksheet();
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    return workbook;
  };

  const saveWorkbook = (workbook, filename) => {
    const excelBuffer = XLSX.write(workbook, {
      type: "array",
      bookType: "xlsx",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, filename);
  };

  const handleDownloadExcel = () => {
    const workbook = createWorkbook();
    saveWorkbook(workbook, "data.xlsx");
  };

  useEffect(() => {
    if (ViewContractDbDataR?.data) {
      setFilteredData((prevState) => [
        ...prevState,
        ...ViewContractDbDataR?.data,
      ]);
      setSecTableLoader(false);
    }
  }, [ViewContractDbDataR]);

  const sechandleScroll = () => {
    setAddSection("addfixedDiv");

    const container = seccontainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const threshold = 150; // Adjust this value as needed
      if (
        scrollTop + clientHeight >= scrollHeight - threshold &&
        pageNumShow1
      ) {
        // alert(pageNumShow1);
        setSecTableLoader(true);
        setPageNumShow1((prevCount) => prevCount + 1);
        // containerRef.current.scrollTop = 2
      }
    }
  };

  const handleClickAToZ = (dataShow) => {
    setAtoZFilter(dataShow);
  };

  return (
    <>
      <div className="content mb-0">
        <Row>
          <Col md="12">
            <Card className="card spacing_bottom spacing_bottom_0">
              <div className="CardHeader">
                <div className="parentSectionContractDb">
                  <div className="Contract-Database-List-main">
                    {/* <Link to="/admin/view-contract-Db"> */}
                    <h1 className="Contract-Database-List-text">
                      {" "}
                      Contract Database List
                    </h1>
                    {/* </Link> */}
                    <span className="totaldata">
                      {" "}
                      {ViewContractDbDataR?.count} Total Entries
                    </span>
                  </div>
                  <div className="ChildSectionContractDb dbviewsec">
                    <div className="revenutypefirstsection">
                      <select
                        value={revinueList}
                        onChange={(e) => setRevinueList(e.target.value)}
                        name="revenue_type_frist"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 revenuetypeclassdiv"
                      >
                        {DBfilterData?.data?.map((item) => (
                          <option value={item.name}>{item.name }</option>
                        ))}
                      </select>
                    </div>
                    <div className="excelCsvDownload">
                      {usersForRender && usersForRender.length > 0 && (
                        <button
                          className="csvbuttonfordownloadExcel"
                          onClick={handleDownloadExcel}
                        >
                          Excel
                        </button>
                      )}
                      {usersForRender && usersForRender.length > 0 && (
                        <CSVLink
                          className="csvbuttonfordownload"
                          data={csvData1}
                        >
                          CSV
                        </CSVLink>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="container-fluid table_1_Last">
                  <div
                    className="table_res_newsecLast newcontactadd"
                    onScroll={sechandleScroll}
                    ref={seccontainerRef}
                  >
                    <table className="table-responsive">
                      <thead>
                        <tr>
                          <th className="news_customer">
                            <div className="filtersectionShow">
                              CUSTOMER
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "items__tansaction__customer_name"
                                    )
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "-items__tansaction__customer_name"
                                    )
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            <div className="filtersectionShow">
                              INVOICE DATE
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "items__tansaction__order_close_data"
                                    )
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "-items__tansaction__order_close_data"
                                    )
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            <div className="filtersectionShow">
                              INVOICE NUMBER
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "items__tansaction__invoice_number"
                                    )
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "-items__tansaction__invoice_number"
                                    )
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            {" "}
                            <div className="filtersectionShow">
                              Product/Service
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "items__productp_service__product_name"
                                    )
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ(
                                      "-items__productp_service__product_name"
                                    )
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            <div className="filtersectionShow">
                              Qty
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ("items__quantity")
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ("-items__quantity")
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            <div className="filtersectionShow">
                              Sales Price
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ("items__sale_price")
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ("-items__sale_price")
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            <div className="filtersectionShow">
                              Amount
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ("items__amount")
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ("-items__amount")
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            <div className="filtersectionShow">
                              SUBSCRIPTION START DATE
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ("items__s_start_d")
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ("-items__s_start_d")
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          <th>
                            <div className="filtersectionShow">
                              SUBSCRIPTION END DATE
                              <span className="filtersectionShowSpan">
                                <i
                                  class="fa fa-sort-asc"
                                  onClick={() =>
                                    handleClickAToZ("items__s_end_d")
                                  }
                                ></i>

                                <i
                                  class="fa fa-sort-desc"
                                  onClick={() =>
                                    handleClickAToZ("-items__s_end_d")
                                  }
                                ></i>
                              </span>
                            </div>
                          </th>
                          {ViewContractDbDataR?.heading?.map(
                            (heading, index) => (
                              <>
                                <th key={index} className="heading">
                                  <div className="filtersectionShow">

                                    {heading}
                                    <span className="filtersectionShowSpan">
                                      <i
                                        class="fa fa-sort-asc"
                                        onClick={() =>
                                          handleClickAToZ("items__s_end_d")
                                        }
                                      ></i>

                                      <i
                                        class="fa fa-sort-desc"
                                        onClick={() =>
                                          handleClickAToZ("-items__s_end_d")
                                        }
                                      ></i>
                                    </span>
                                  </div>
                                </th>
                              </>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData?.map((rowData, rowIndex) => {
                          const formattedData = {
                            product_name: (
                              <div
                                className="viewcontractdiv1t"
                                style={{ display: "flex" }}
                              >
                                <div style={{ display: "flex" }}>
                                  <p
                                    className="editiconDeletenew"
                                    onClick={() =>
                                      handleCustomerClick1(
                                        rowIndex,
                                        rowData?.items?.tansaction
                                          ?.customer_name
                                      )
                                    }
                                  >
                                    {rowData?.items?.tansaction?.customer_name}
                                  </p>
                                </div>
                              </div>
                            ),
                            order_close_data:
                              rowData?.items?.tansaction?.order_close_data,
                            customer_name:
                              rowData?.items?.tansaction?.customer_name,
                            invoice_number:
                              rowData?.items?.tansaction?.invoice_number,
                            billing_method:
                              rowData?.items?.productp_service?.product_name,
                            qty: rowData?.items?.quantity,
                            sale_price: rowData?.items?.sale_price,
                            amount: rowData?.items?.amount,
                            s_start_d: moment(rowData.items?.s_start_d).format(
                              "MM-DD-yyyy"
                            ),
                            s_end_d: moment(rowData.items?.s_end_d).format(
                              "MM-DD-yyyy"
                            ),
                          };

                          const keysToMatch = [
                            "revenue",
                            "billing",
                            "deferred_revenue",
                          ];
                          const filterArray = (item) => {
                            const matchedKey = keysToMatch.find(
                              (key) => item[key]
                            );
                            return matchedKey ? matchedKey : null;
                          };
                          const selectedArray = filterArray(rowData);

                          if (selectedArray !== null) {
                            ViewContractDbDataR?.heading?.forEach((heading) => {
                              const columnName = heading
                                .toLowerCase()
                                .replace(/[^a-z0-9]/g, "_");
                              const revenue = rowData[selectedArray]?.find(
                                (rev) =>
                                  rev.date
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]/g, "_") === columnName
                              );
                              formattedData[columnName] = revenue
                                ? revenue.value.toFixed(2)
                                : "0.00";
                            });
                          }

                          return (
                            <tr key={rowIndex}>
                              <td>{formattedData.product_name}</td>
                              <td>
                                <p className="datetext1">
                                  {formattedData.order_close_data}
                                </p>
                              </td>
                              <td>{formattedData.invoice_number}</td>
                              <td>
                                <p className="method-text">
                                  {formattedData.billing_method}
                                </p>
                              </td>
                              <td>{formattedData.qty}</td>
                              <td>{formattedData.sale_price}</td>
                              <td>{formattedData.amount}</td>
                              <td>{formattedData.s_start_d}</td>
                              <td>{formattedData.s_end_d}</td>
                              {ViewContractDbDataR?.heading?.map(
                                (heading, index) => (
                                  <td key={index}>
                                    <div className="hover-value">
                                      {
                                        formattedData[
                                        heading
                                          .toLowerCase()
                                          .replace(/[^a-z0-9]/g, "_")
                                        ]
                                      }
                                    </div>
                                  </td>
                                )
                              )}
                            </tr>
                          );
                        })}

                        {/* {pageNumShow < pageSize && (
                          <div className="loadingsctionForLastTable">
                            <p className="loadingParagraph">Loading.....</p>
                          </div>
                        )} */}
                      </tbody>
                      <tfoot className="lastTableTfoot">
                        {ViewContractDbDataR?.heading?.length > 0 ? (
                          <tr className="totalRow">
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {ViewContractDbDataR?.heading?.map(
                              (heading, headingIndex) => {
                                const columnName = heading
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]/g, "_");
                                const totalForColumn =
                                  getCotTatalFilter?.total?.find(
                                    (total) =>
                                      total.date
                                        .toLowerCase()
                                        .replace(/[^a-z0-9]/g, "_") ===
                                      columnName
                                  );
                                const totalValue = totalForColumn
                                  ? totalForColumn.value.toLocaleString(
                                    "en-US",
                                    {
                                      style: "decimal",
                                      minimumFractionDigits: 0,
                                      maximumFractionDigits: 0,
                                    }
                                  )
                                  : 0;

                                return <td key={headingIndex}>{totalValue}</td>;
                              }
                            )}
                          </tr>
                        ) : null}
                      </tfoot>
                    </table>
                  </div>
                  {secTableLoader && (
                    <div className="Sectableloadersection">
                      <SpinnerLoading />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContractDbView;
