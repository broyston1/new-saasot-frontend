import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Link, useParams } from "react-router-dom";
import { Userlist, UserDelete, GetAllCompanynNameAction } from "../../redux/actions/Admin-saasot-action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const CompanyTable = () => {
    const dispatch = useDispatch();
    const { listOf } = useParams()
    const [usersForRender, setUsersForRender] = useState([]);
    const [rerender, setRerender] = useState(false);

    const { Daterecord } = useSelector((state) => state.DatefilterUserReducer);
    const {
        error,
        success: successfullyupdated,
        Userlistdata,
    } = useSelector((state) => state.UserlistReducer);
    const {
        success: successfullyupdatedAdmin,
        UserlistAdmindata,
    } = useSelector((state) => state.UserlistAdminReducer);

    const {

        success: successfull,
        AllCompanyName,
    } = useSelector((state) => state.GetAllCompanyNameReducer);

    const { userData } = useSelector((state) => state.authReducer);
    const { error: errorof, success, message: allset } = useSelector((state) => state.UserDeleteReducer);
    const [clientId, setClientId] = useState();
    useEffect(() => {
        dispatch(GetAllCompanynNameAction());
    }, [success, allset, listOf]);

    // useEffect(() => {
    //     let userData = [];

    //     if (AllCompanyName) {

    //         userData = AllCompanyName.map((item) => {
    //             const role = item.role === 1 ? "Admin" : item.role === 3 ? "User" : "N/A";
    //             const status1 = item.status;
    //             return {
    //                 ...item,
    //                 name: item.name,
    //                 email: item.email,
    //                 role: role,
    //                 status1: status1,
    //                 action: (
    //                     <div style={{ display: "flex" }}>
    //                         <div style={{ display: "flex" }}>
    //                             <Link to={`/add/company/${item.id}`}>
    //                                 <Button title="edit" className="iconbtn newbtn44">
    //                                     <p className="editiconDelete1"><i className="fa fa-pencil"></i></p>
    //                                 </Button>
    //                             </Link>
    //                             <Button title="delete" className="newbtn44 iconbtn" onClick={() => deleteHandler(item.status, item.id)}>
    //                                 <p className="editiconDelete1"><i className="fa fa-trash"></i></p>
    //                             </Button>
    //                         </div>
    //                     </div>
    //                 )
    //             };
    //         });
    //     }
    //     setUsersForRender(userData);
    // }, [success, allset, listOf,AllCompanyName]);

    useEffect(() => {
        let userData = [];
        if (Array.isArray(AllCompanyName) && AllCompanyName.length > 0) {
            userData = AllCompanyName?.map((item) => ({
                id: item.id,
                name: item.name,
                action: (
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex" }}>
                            <Link to={`/add/company/${item.id}`}>
                                <Button title="edit" className="iconbtn newbtn44">
                                    <p className="editiconDelete1"><i className="fa fa-pencil"></i></p>
                                </Button>
                            </Link>
                            <Button title="delete" className="newbtn44 iconbtn" onClick={() => deleteHandler(item.id)}>
                                <p className="editiconDelete1"><i className="fa fa-trash"></i></p>
                            </Button>
                        </div>
                    </div>
                )
            }));
        }
    
        setUsersForRender(userData);
    }, [AllCompanyName]);




    const deleteHandler = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                dispatch(UserDelete(id, listOf));
                setRerender(true)
            }
        });
    };

    const data1 = {
        columns: [
            {
                label: "Client Name",
                field: "name",
                sort: "asc",
                width: 500,
            },

            {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 100,
            },
        ],
        rows: usersForRender,
    };
    if (userData?.user?.role === 3 || userData?.user?.is_true == false) {

        data1.columns = data1.columns.filter(column => column.field !== "action");
    }
    useEffect(() => {
        const storedClient = localStorage.getItem('clientDetails');
        if (storedClient) {
            const client = JSON.parse(storedClient);
            setClientId(client.id);
        }
    }, [Daterecord]);
    // useEffect(() => {
    //     if (success && rerender) {
    //         swal({
    //             title: "",
    //             text: allset,
    //             className: "successAlert",
    //             icon: "https://flowbite.com/docs/images/logo.svg",
    //             buttons: false,
    //             timer: 3000,
    //             open: true,
    //         });
    //         navigate("/company-list/company")
    //         setRerender(false);
    //     }
    //     if (errorof && rerender) {
    //         swal({
    //             title: addServProrror,
    //             text: "Error",
    //             className: "errorAlert",
    //             icon: "warning",
    //             buttons: false,
    //             timer: 4000,
    //             customClass: {
    //                 title: "errorTitle",
    //                 content: "errorText",
    //             },
    //         });
    //         setRerender(false);
    //     }
    // }, [allset]);
    return (
        <>
            <div className="content">
                <div className="userdivsec">
                    <div className="container">
                        <h1>All Client list</h1>
                        <div className="Addclass">
                            <Link to={`/add/${listOf}`}>
                                <button className="adduser addbtnsec">Add Client</button>
                            </Link>
                        </div>
                        {AllCompanyName && <>
                  
                        <MDBDataTable
                            className="dashbordtable dashbordtable1 userclass"
                            style={{}}
                            responsive
                            striped
                            bordered
                            small
                            data={data1}
                        />
                              </>}
                    </div>

                </div>

            </div>
        </>
    );
};

export default CompanyTable;
































// import React, { useEffect, useState } from "react";
// import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
// import { MDBDataTable } from "mdbreact";
// import { Link, useParams } from "react-router-dom";
// import { Userlist, UserDelete, getAllSuperAdminAction, GetAllCompanynNameAction } from "../../redux/actions/Admin-saasot-action";
// import { useDispatch, useSelector } from "react-redux";
// import swal from "sweetalert";

// const CompanyTable = () => {
//     const { listOf } = useParams()
//     const dispatch = useDispatch();
//     const [usersForRender, setUsersForRender] = useState([]);
//     const [usersForRender2, setUsersForRender2] = useState([]);





//     const {

//         success: successfull,
//         AllCompanyName,
//     } = useSelector((state) => state.GetAllCompanyNameReducer);


//     useEffect(() => {

//         dispatch(GetAllCompanynNameAction());

//     }, [listOf]);

//     useEffect(() => {
//         let userDat = [];

//         if (AllCompanyName) {
//             userDat = AllCompanyName.map((item) => {
//                 return {
//                     ...item,
//                     name: item.name,
//                     email: item.email,

//                     action: (
//                         <div style={{ display: "flex" }}>
//                             <div style={{ display: "flex" }}>
//                                 <Link to={`/add/${listOf}/${item.id}`}>
//                                     <Button title="edit" className="iconbtn newbtn44">
//                                         <p className="editiconDelete1"><i className="fa fa-pencil"></i></p>
//                                     </Button>
//                                 </Link>
//                                 <Button title="delete" className="newbtn44 iconbtn" onClick={() => deleteHandler(item.status, item.id)}>
//                                     <p className="editiconDelete1"><i className="fa fa-trash"></i></p>
//                                 </Button>
//                             </div>
//                         </div>
//                     )
//                 };
//             });
//         }
//         setUsersForRender2(userDat);
//     }, [AllCompanyName]);


//     const deleteHandler = (item, id) => {
//         swal({
//             title: "Are you sure?",
//             text: "Once deleted, you will not be able to recover this item!",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//         }).then((willDelete) => {
//             if (willDelete) {
//                 // Perform the delete operation
//                 // ...
//                 dispatch(UserDelete(id, listOf));
//             }
//         });
//     };

//     const data2 = {
//         columns: [
//             {
//                 label: "Name",
//                 field: "name",
//                 sort: "asc",
//                 width: 500,
//             },
//             {
//                 label: "Action",
//                 field: "action",
//                 sort: "asc",
//                 width: 100,
//             },
//         ],
//         rows: usersForRender2,
//     };

//     return (
//         <>
//             <div className="content">
//                 <div className="userdivsec">
//                     <div className="container">
//                         <h1>All {listOf} list</h1>
//                         <div className="Addclass">
//                             <Link to={`/add/${listOf}`}>
//                                 <button className="adduser addbtnsec">Add {listOf}</button>
//                             </Link>
//                         </div>
//                         <MDBDataTable
//                             className="dashbordtable dashbordtable1 userclass"
//                             style={{}}
//                             responsive
//                             striped
//                             bordered
//                             small
//                             data={data2}
//                         />


//                     </div>

//                 </div>

//             </div>
//         </>
//     );
// };

// export default CompanyTable;
