import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  let navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const { userData } = useSelector((state) => state.authReducer);
  const { Daterecord } = useSelector((state) => state.DatefilterUserReducer);
  const { DBfilterData } = useSelector(
    (state) => state.GetContractDbFilterListUserReducer
  );

  const [topD, setTopD] = useState([]);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [clientId, setClientId] = useState();
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };
  const handleRemoveLocalStorage = () => {
    localStorage.removeItem("clientDetails");
    setClientId(null);
  };

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [navigate, userData]);

  let topData;
  let midData;
  let bottomData;
  //Admin Sidebar.
  topData = [
    {
      title: "Dashboard",
      imgPath: "/img/app1.png",
      path: userData?.user?.role === 4 ? "/dashboard" : "/home",
    },
    {
      title: "Home",
      imgPath: "/img/homeicon.png",
      path: clientId ? `/user/detils/${clientId}` : "/home",
    },
    {
      title: "users",
      imgPath: "/img/user1.png",
      path: "/users",
    },
    {
      title: "upload-file",
      imgPath: "/img/jobicon1.png",
      path: "/upload-file",
    },
    {
      title: "CustomerUpload",
      imgPath: "/img/icon40.png",
      path: "/customer-upload",
    },

    {
      title: "ShowProductServices",
      imgPath: "/img/skillicon.png",
      path: "/show-products/servies",
    },
    {
      title: "ContractUpload",
      imgPath: "/img/Company-Vector.png",
      path: "/contract-upload",
    },
    {
      title: "AddContract",
      imgPath: "/img/app1.png",
      path: "/add-contract",
    },
    { title: "ClosedPeriod", imgPath: "/img/help.png", path: "/closed-period" },
    {
      title: "QuickbookSetting",
      imgPath: "/img/app1.png",
      path: "/quickbook-connect",
    },
    // {
    //   title: "Media",
    //   imgPath: "/img/Earnings_old.png",
    //   path: "/admin-media",
    // },
  ];
  const handleItemClick = () => {
    if (window.innerWidth < 769) {
      setIsTextVisible(!isTextVisible);
    }
  };
  useEffect(() => {
    const filteredTopData =
      clientId || userData?.user?.role !== 4 ? topData : [];
    setTopD(filteredTopData);
  }, [clientId, userData?.user?.role]);

  // midData = [
  //   {
  //     title: "upload-file",
  //     imgPath: "/img/jobicon1.png",
  //     path: "/upload-file",
  //   },
  //   {
  //     title: "CustomerUpload",
  //     imgPath: "/img/icon40.png",
  //     path: "/customer-upload",
  //   },

  //   {
  //     title: "ShowProductServices",
  //     imgPath: "/img/skillicon.png",
  //     path: "/show-products/servies",
  //   },
  //   {
  //     title: "ContractUpload",
  //     imgPath: "/img/Company-Vector.png",
  //     path: "/contract-upload",
  //   },
  //   {
  //     title: "AddContract",
  //     imgPath: "/img/app1.png",
  //     path: "/add-contract",
  //   },
  // ];
  // bottomData = [
  //   { title: "ClosedPeriod", imgPath: "/img/help.png", path: "/closed-period" },
  //   {
  //     title: "QuickbookSetting",
  //     imgPath: "/img/app1.png",
  //     path: "/quickbook-connect",
  //   },
  // ];
  // }

  useEffect(() => {
    const storedClient = localStorage.getItem("clientDetails");
    if (storedClient) {
      const client = JSON.parse(storedClient);
      setClientId(client.id);
    } else {
      setClientId();
    }
  }, [Daterecord, DBfilterData]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <>
      <div className="togglenewbtn" onClick={toggleTextVisibility}>
        {isTextVisible ? (
          <img src="/img/bar-icon.png" alt="toggle image" />
        ) : (
          <img src="/img/togglenew.png" alt="toggle image" />
        )}
      </div>
      {isTextVisible && (
        <div
          id="mySidepanel"
          className={
            windowWidth < 768
              ? "sidemenubar sidepanel mobile-device-active"
              : "sidemenubar sidepanel"
          }
          style={{ width: "0%" }}
        >
          <ul className="nav-list">
            <li className="sidebarcell">
              <div className="Menu">
                <span className="menu_img"></span>
              </div>
            </li>
            {topD?.map((item, index) => (
              <>
                {item.path == "/upload-file" && userData?.user?.role == 4 ? (
                  <></>
                ) : (
                  <>
                    <li
                      className={pathname === item.path ? "active" : ""}
                      key={index}
                      // onClick={item.onClick}
                      onClick={handleItemClick}
                    >
                      <Link className="Menu" to={item.path}>
                        <span className="menu_img">
                          <img
                            className="mr-2"
                            src={process.env.PUBLIC_URL + item.imgPath}
                            alt=""
                          />
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </>
            ))}

            {/* {midData?.map((item, index) => (
              <li
                className={pathname === item.path ? "active" : ""}
                key={index}
              >
                <Link className="Menu" to={item.path}>
                  <span className="menu_img">
                    <img
                      className=""
                      src={process.env.PUBLIC_URL + item.imgPath}
                      alt=""
                    />
                  </span>
                </Link>
              </li>
            ))}

            {bottomData?.map((item, index) => (
              <li
                className={pathname === item.path ? "active" : ""}
                key={index}
              >
                <Link className="Menu" to={item.path}>
                  <span className="menu_img">
                    <img
                      className="mr-2"
                      src={process.env.PUBLIC_URL + item.imgPath}
                      alt=""
                    />
                  </span>
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
      )}
    </>
  );
}
