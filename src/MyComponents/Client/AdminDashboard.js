

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Link, useNavigate } from "react-router-dom";
import { GetAllCompanynNameAction, UserDelete } from "../../redux/actions/Admin-saasot-action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [usersForRender, setUsersForRender] = useState([]);

    const {
        error,
        success: successfullyupdated,
        AllCompanyName,
    } = useSelector((state) => state.GetAllCompanyNameReducer);

    const { success } = useSelector((state) => state.UserDeleteReducer);

    useEffect(() => {
        dispatch(GetAllCompanynNameAction());
    }, [success]);

    useEffect(() => {
        let userData = [];
        if (AllCompanyName) {
            AllCompanyName?.map((item, index) => {
                item.company_name = item.name;
                // item.description = item.email;
                // if (item.status == false) {
                //   item.status1 = false;

                // }
                // if (item.status == true) {
                //   item.status1 = true;
                // }

                item.action = (
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex" }}>
                            {/* <Link to={} onClick={ ()=>}>
                <Button title="delete" className="iconbtn newbtn44">
                  <p className="editiconDelete1">  View</p>
                </Button>
            </Link> */}
                            <Button title="delete" className=" newbtn44 iconbtn">
                                <p
                                    className="editiconDelete1"
                                    onClick={() => navigateHandler(item)}
                                >
                                    View

                                </p>
                            </Button>

                        </div>
                    </div>
                );
                userData.push(item);
            });
        }

        setUsersForRender(userData);
    }, [successfullyupdated]);

    const navigateHandler = (id) => {
        localStorage.setItem('clientDetails', JSON.stringify(id))
        navigate(`/user/detils/${id.id}`)
    };

    const data1 = {
        columns: [
            {
                label: "Company Name",
                field: "company_name",
                sort: "asc",
                width: 500,
            },
            //   {
            //     label: "E-mail",
            //     field: "description",
            //     sort: "asc",
            //     width: 500,
            //   },

            {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 100,
            },
        ],
        rows: usersForRender,
    };
    return (
        <>
            <div className="content">



                <div className="userdivsec">
                    <div className="container" style={{height:"60vh" ,display:"flex", justifyContent:"center",alignItems:"center"}}>
                       <h1 style={{fontWeight:"700 !important" ,fontSize:"72px !important"}}>  Welcome  </h1>
                    </div>

                </div>

            </div>
        </>
    );
};

export default AdminDashboard;
