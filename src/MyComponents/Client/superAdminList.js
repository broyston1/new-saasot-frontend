import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Link, useParams } from "react-router-dom";
import { Userlist, UserDelete, getAllSuperAdminAction, GetAllCompanynNameAction } from "../../redux/actions/Admin-saasot-action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const SuperadminList = () => {
  const { listOf } = useParams()
  const dispatch = useDispatch();
  const [usersForRender, setUsersForRender] = useState([]);
  const [usersForRender2, setUsersForRender2] = useState([]);
  const [usersAll, setUsersAll] = useState([]);

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

  const { userData } = useSelector((state) => state.authReducer);
  const { success } = useSelector((state) => state.UserDeleteReducer);
  const { getAllSuperAdmin } = useSelector((state) => state.getAllSuperAdminReducer);

  const {

    success: successfull,
    AllCompanyName,
  } = useSelector((state) => state.GetAllCompanyNameReducer);
  const [clientId, setClientId] = useState();
  useEffect(() => {
    if (listOf == "superadmin") {
      dispatch(getAllSuperAdminAction("4"))
    } else if (listOf == "admin") {
      dispatch(getAllSuperAdminAction("1"));
    }else if (listOf == "company"){
      dispatch(GetAllCompanynNameAction());
    }
  }, [listOf, success]);

console.log("getAllSuperAdmin",getAllSuperAdmin)
  useEffect(() => {
    let userData = [];

    if (getAllSuperAdmin) {
      userData = getAllSuperAdmin?.map((item) => {
        const role = item.role === 1 ? "Admin" : item.role === 3 ? "User" : item.role === 4 ? "Superadmin" : null;
        const status1 = item.status;
        return {
          ...item,
          name: item.username,
          email: item.email,
          role: role,
          permissions: item.is_true ? "Yes" : "No",
          company:item?.company?.name,
          action: (
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <Link to={`/add/${listOf}/${item.id}`}>
                  <Button title="edit" className="iconbtn newbtn44">
                    <p className="editiconDelete1"><i className="fa fa-pencil"></i></p>
                  </Button>
                </Link>
                <Button title="delete" className="newbtn44 iconbtn" onClick={() => deleteHandler(item.status, item.id)}>
                  <p className="editiconDelete1"><i className="fa fa-trash"></i></p>
                </Button>
              </div>
            </div>
          )
        };
      });
    }
    setUsersForRender(userData);
  }, [successfullyupdated, getAllSuperAdmin, successfullyupdatedAdmin, success]);


  useEffect(() => {
    let userDat = [];

    if (AllCompanyName) {
      userDat = AllCompanyName.map((item) => {
        return {
          ...item,
          name: item.name,
          email: item.email,

          action: (
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <Link to={`/add/${listOf}/${item.id}`}>
                  <Button title="edit" className="iconbtn newbtn44">
                    <p className="editiconDelete1"><i className="fa fa-pencil"></i></p>
                  </Button>
                </Link>
                <Button title="delete" className="newbtn44 iconbtn" onClick={() => deleteHandler(item.status, item.id)}>
                  <p className="editiconDelete1"><i className="fa fa-trash"></i></p>
                </Button>
              </div>
            </div>
          )
        };
      });
    }
    setUsersForRender2(userDat);
  }, [AllCompanyName]);


  const deleteHandler = (item, id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // Perform the delete operation
        // ...
        dispatch(UserDelete(id, listOf));
      }
    });
  };

  const data2 = {
    columns: [
      {
        label: "Name",
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
    rows: usersForRender2,
  };
  const data1 = {
    columns: [
      {
        label: "User Name",
        field: "name",
        sort: "asc",
        width: 500,
      },
      {
        label: "E-mail",
        field: "email",
        sort: "asc",
        width: 500,
      },
      {
        label: "Role",
        field: "role",
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
  if (listOf === "superadmin") {
    data1.columns.splice(3, 0, {
      label: "Permissions",
      field: "permissions",
      sort: "asc",
      width: 500,
    });
  }
  if (listOf === "admin") {
    data1.columns.splice(3, 0, {
      label: "Client",
      field: "company",
      sort: "asc",
      width: 500,
    });
  }
  useEffect(() => {
    const storedClient = localStorage.getItem('clientDetails');
    if (storedClient) {
      const client = JSON.parse(storedClient);
      setClientId(client.id);
    }
  }, [Daterecord]);
  return (
    <>
      <div className="content">
        <div className="userdivsec">
          <div className="container">
            <h1 style={{  textTransform: "capitalize"}}>All {listOf=="admin" ? "clients-users" : listOf } list</h1>
            <div className="Addclass">
              <Link to={`/add/${listOf}`}>
                <button className="adduser addbtnsec" style={{  textTransform: "capitalize"}}>Add {listOf=="admin" ? "client-user" : listOf }</button>
              </Link>
            </div>
            {getAllSuperAdmin &&   <MDBDataTable
              className="dashbordtable dashbordtable1 userclass"
              style={{}}
              responsive
              striped
              bordered
              small
              data={data1}
            />}
           


          </div>

        </div>

      </div>
    </>
  );
};

export default SuperadminList;
