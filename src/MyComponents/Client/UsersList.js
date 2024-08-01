import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { Userlist, UserDelete, UserlistAdminAction } from "../../redux/actions/Admin-saasot-action";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

const UsersList = () => {
  const dispatch = useDispatch();
  const [usersForRender, setUsersForRender] = useState([]);
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
  const [clientId, setClientId] = useState();
  useEffect(() => {
    if (clientId) {
      dispatch(UserlistAdminAction(clientId))
    } else if (!clientId) {

      dispatch(Userlist());
    }
  }, [clientId, success]);
  useEffect(() => {
    if (clientId) {
      setUsersAll(UserlistAdmindata)
    } else if (!clientId) {

      setUsersAll(Userlistdata)
    }
  }, [UserlistAdmindata, Userlistdata])


  // useEffect(() => {
  //   let userData = [];
  //   if (usersAll) {
  //     usersAll?.map((item, index) => {
  //       item.name = item.username;
  //       item.email = item.email;
  //       item.role = item.role === 1 ? "Admin" : item.role === 3 ? "member" : "N/A";
  //       if (item.status == false) {
  //         item.status1 = false;

  //       }
  //       if (item.status == true) {
  //         item.status1 = true;
  //       }

  //       item.action = (
  //         <div style={{ display: "flex" }}>
  //           <div style={{ display: "flex" }}>
  //             <Link to={`/add-user/${item.id}`}>
  //               <Button title="delete" className="iconbtn newbtn44">
  //                 <p className="editiconDelete1">  <i class="fa fa-pencil"></i></p>
  //               </Button>
  //             </Link>
  //             <Button title="delete" className=" newbtn44 iconbtn">
  //               <p
  //                 className="editiconDelete1"
  //                 onClick={() => deleteHandler(item.status, item.id)}
  //               >
  //                 <i class="fa fa-trash"></i>
  //               </p>
  //             </Button>

  //           </div>
  //         </div>
  //       );
  //       userData.push(item);
  //     });
  //   }

  //   setUsersForRender(userData);
  // }, [successfullyupdated, usersAll, successfullyupdatedAdmin]);

  useEffect(() => {
    let userData = [];

    if (usersAll) {
      const filteredUsers = usersAll.filter(user => user.id !== userData?.user?.user_id && user.role !== 1);
      userData = filteredUsers.map((item) => {
        const role = item.role === 1 ? "Admin" : item.role === 3 ? "User" : "N/A";
        const status1 = item.status;
        return {
          ...item,
          name: item.username,
          email: item.email,
          role: role,
          status1: status1,
          action: (
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex" }}>
                <Link to={`/add-user/${item.id}`}>
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
  }, [successfullyupdated, usersAll, successfullyupdatedAdmin]);



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
        dispatch(UserDelete(id));
      }
    });
  };

  const data1 = {
    columns: [
      {
        label: "Name",
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
  return (
    <>
      <div className="content">
        <div className="userdivsec">
          <div className="container">
            <div className="Addclass">
              <Link to="/add-user">
                <button className="adduser addbtnsec">Add User</button>
              </Link>
            </div>
            {usersAll && <MDBDataTable
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

export default UsersList;
