import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AllUsersListAction, logout } from "../../redux/actions/auth-actions";
import {
  GetAllCompanynNameAction,
  UserDelete,
} from "../../redux/actions/Admin-saasot-action";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function Header(props) {
  const dispatch = useDispatch();
  const [count, setcount] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);
  let navigate = useNavigate();
  const [searchTure, setSearchTure] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const menuRef = useRef(null);
  const companyRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { userData } = useSelector((state) => state.authReducer);
  const { Daterecord } = useSelector((state) => state.DatefilterUserReducer);
  const { DBfilterData } = useSelector(
    (state) => state.GetContractDbFilterListUserReducer
  );

  const {
    success: successAdd,
    message,
    UserlistPOSTdata,
  } = useSelector((state) => state.UserPostReducer);
  const { user } = useSelector((state) => state.userDetailsReducer);

  const chatSocket = new WebSocket(
    "wss://" +
      "dev-ws.adifect.com" +
      "/ws/notifications/" +
      userData?.user?.user_id +
      "/"
  );

  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);

    if (data && data?.data?.value) {
      let newStr1 = data.data.value.text.count;
      setcount(newStr1);
    }
  };

  chatSocket.onclose = function (e) {};

  const toggleClass = (e) => {
    if (
      menuRef.current &&
      showDropdown &&
      !menuRef.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };
  document.addEventListener("mousedown", toggleClass);

  const toggleCompanyClass = (e) => {
    if (
      companyRef.current &&
      showCompanyDropdown &&
      !companyRef.current.contains(e.target)
    ) {
      setTimeout(function () {
        setShowCompanyDropdown(false);
      }, 1200);
    }
  };
  document.addEventListener("mousedown", toggleCompanyClass);

  const logoutHandler = () => {
    props.setHeaderCompany(null);
    dispatch(logout());
  };

  const {
    error,
    success: successfullyupdated,
    AllCompanyName,
  } = useSelector((state) => state.GetAllCompanyNameReducer);
  const { success, message: allset } = useSelector(
    (state) => state.UserDeleteReducer
  );

  useEffect(() => {
    dispatch(GetAllCompanynNameAction());
  }, [successAdd, allset]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".agency-jobssearch")) return;
      setSearchTure(false);
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    dispatch(AllUsersListAction());
  }, []);

  const { AllUsersList } = useSelector((state) => state.AllUsersListReducer);

  const [isopen, setOpenis] = React.useState(false);

  const handleClickOpen = () => {
    setOpenis(true);
  };

  const ishandleClose = (client) => {
    localStorage.setItem("clientDetails", JSON.stringify(client));
    setOpenis(false);
  };
  const navigateHandler = (id) => {
    localStorage.setItem("clientDetails", JSON.stringify(id));
    navigate(`/user/detils/${id.id}`);
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".loginsigin")) return;
      setShowDropdown(false);
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [clientName, setClientName] = useState();
  useEffect(() => {
    const storedClient = localStorage.getItem("clientDetails");
    if (storedClient) {
      const client = JSON.parse(storedClient);
      setClientName(client.name);
    } else {
      setClientName();
    }
  }, [Daterecord, successfullyupdated, DBfilterData]);
  return (
    <>
      <div className="mainDiv">
        <div className="header">
          <div className="loginRight">
            <div
              className="cmpnyNameHead"
              style={{
                maxWidth: userData?.user?.role === 4 ? "280px" : "auto",
              }}
            >
              <span className="saasotcontent">
                {clientName ? clientName : userData?.user?.company_name ?? null}
              </span>
            </div>

            <div className="d-flex gap-[10px]">
              {userData?.user?.role === 4 ? (
                <div className="d-flex justify-center align-items-center gap-[10px]">
                  {userData?.user?.is_true && (
                    <>
                      <Link to="/company-list/company">
                        <button
                          className="adduser addbtnsec"
                          style={{
                            width: "118px",
                            marginBottom: "0px",
                            marginRight: "10px",
                          }}
                        >
                          View Clients
                        </button>
                      </Link>
                      <Link to="/super-list/superadmin">
                        <button
                          className="adduser addbtnsec"
                          style={{
                            width: "155px",
                            marginBottom: "0px",
                            marginRight: "10px",
                          }}
                        >
                          View Superadmins
                        </button>
                      </Link>
                      <Link to="/super-list/admin">
                        <button
                          className="adduser addbtnsec"
                          style={{
                            width: "155px",
                            marginBottom: "0px",
                            marginRight: "10px",
                          }}
                        >
                          View Clients-Users
                        </button>
                      </Link>{" "}
                    </>
                  )}

                  {/* <select className="form-select " aria-label="Default select example" onChange={(event) => navigateHandler(JSON.parse(event.target.value))}>
                <option value="">Please  Superadmin or Client</option>
                <option  to="/add-client"  >Superadmin</option>
                <option to="/add-client" >Client</option>
                </select> */}
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    style={{ maxWidth: "222px" }}
                    onChange={(event) =>
                      navigateHandler(JSON.parse(event.target.value))
                    }
                  >
                    <option value="">Please select a company</option>
                    {AllCompanyName?.length > 0 &&
                      AllCompanyName.map((company) => (
                        <option
                          value={JSON.stringify(company)}
                          key={company.id}
                        >
                          {company.name}
                        </option>
                      ))}
                  </select>
                </div>
              ) : null}

              <li
                className="ml-7 johndoe"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <Link className="LoginName dropdown" to="#">
                  <span className="header-profile-pic">
                    {user?.profile_img && (
                      <img src={user?.profile_img} alt="Profile Picture" />
                    )}
                    {!user?.profile_img && (
                      <img
                        src={process.env.PUBLIC_URL + "/img/avataruser.png"}
                        alt=""
                      />
                    )}
                  </span>
                  <span className="loginName ml-1">
                    {userData?.user?.first_name && userData?.user?.last_name ? (
                      <>
                        {userData?.user?.first_name} {userData?.user?.last_name}
                      </>
                    ) : (
                      <>{userData?.user?.name}</>
                    )}
                  </span>
                  <i className="fa fa-caret-down dropdown"></i>
                </Link>
                {showDropdown && (
                  <>
                    <div className="loginsigin">
                      {userData?.user?.role === 1 && (
                        <li>
                          <Link to={`/profile/${userData?.user?.user_id}`}>
                            <img
                              className="mr-2 logout"
                              style={{ width: "26px", marginRight: "10px" }}
                              src={
                                process.env.PUBLIC_URL + "/img/profileimage.png"
                              }
                              alt=""
                            />
                            Profile
                          </Link>
                        </li>
                      )}
                      <li onClick={logoutHandler}>
                        <Link to="/">
                          <img
                            className="mr-2 logout "
                            style={{ marginLeft: "3px" }}
                            src={process.env.PUBLIC_URL + "/img/logout.png"}
                            alt=""
                          />
                          Logout
                        </Link>
                      </li>

                      {/* {userData?.user?.role == 1 && (
                      <li onClick={handleClickOpen}>
                        <Link to="#">
                          <img
                            className="mr-2 logout alluserimage"
                            src={process.env.PUBLIC_URL + "/img/alluserimage.png"}
                            alt=""
                          />
                          All Clients
                        </Link>
                      </li>
                    )} */}
                    </div>
                  </>
                )}
              </li>
            </div>
          </div>
        </div>

        <div>
          <Dialog
            open={isopen}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => ishandleClose("")}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              {" "}
              <div className="userlistshow">
                <h3>All Admins List</h3>

                <h3>
                  <i
                    onClick={() => ishandleClose("")}
                    class="fa fa-close cursor-pointer"
                  ></i>
                </h3>
              </div>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <div>
                  {AllUsersList?.map((item) => (
                    <div className="userlistshow mb-4" key={item.id}>
                      <div className="userdetails">
                        <img src="/img/avataruser.png" />
                        <div>
                          <h4 className="usernameadd">{item?.username}</h4>
                          <p className="emailadd">{item?.email}</p>
                        </div>
                      </div>

                      <div>
                        <Link
                          onClick={() => ishandleClose(item)}
                          to={`/user/detils/${item.id}`}
                          className="viewmorebtn"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
