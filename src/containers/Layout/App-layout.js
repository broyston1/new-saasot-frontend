import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";


function AppLayout(props) {
  const { Daterecord } = useSelector((state) => state.DatefilterUserReducer);
  const { DBfilterData } = useSelector((state) => state.GetContractDbFilterListUserReducer);
  const { userData } = useSelector((state) => state.authReducer);
  const {
    error,
    success: successfullyupdated,
    Userlistdata,
  } = useSelector((state) => state.UserlistReducer);
  const {

    success: successfullyupdated2,
    AllCompanyName,
  } = useSelector((state) => state.GetAllCompanyNameReducer);
  const [clientName, setClientName] = useState();


  useEffect(() => {
    const storedClient = localStorage.getItem('clientDetails');
    if (storedClient) {
      const client = JSON.parse(storedClient);
      setClientName(client.name);
    } else {
      setClientName();
    }
  }, [Daterecord, successfullyupdated, successfullyupdated2, DBfilterData]);

  return (
    <>
      <>
        <div className="admin_layout_after_loader ">
          <div className="Topdivallpage" id="Topdivallpage">
            <div
              className={
                props.isToggle
                  ? " sidebar DAMSidebar sidebarmenu2"
                  : " sidebar sidebarmenu2"
              }
            >
              <Sidebar />
            </div>
            <div
              className={
                props.isToggle ? "Rightbar DAMSidebar2" : "Rightbar"
              }
            >
              <div className="row mlr-un layoutdiv">
                <div
                  className={
                    props.isToggle
                      ? " sidebar DAMSidebar sidebarmenu2 headerTop"
                      : " sidebar sidebarmenu2 headerTop"
                  }
                >
                  {/* <div className="Damlogo">
                    <span className="saasotcontent">{clientName ? clientName : userData?.user?.company_name ?? null}</span>
                  </div>
                  <div className="Damlogo2">
                    <button
                      className="allpagetoggle"
                      type="button"
                      onClick={(e) => props.setIsToggle(!props.isToggle)}
                    >
                      <span className="saasotcontent">{clientName ? clientName : userData?.user?.company_name ?? null}</span>
                    </button>
                  </div> */}
                  <Header
                    headerCompany={props.headerCompany}
                    setHeaderCompany={props.setHeaderCompany}
                    searchfeedback={props.searchfeedback}
                    setSearchfeedback={props.setSearchfeedback}
                  />
                </div>
              </div>
              <Outlet
                context={[
                  props.headerCompany,
                  props.setHeaderCompany,
                  props.searchfeedbackCreator,
                  props.setSearchfeedbackCreator,
                ]}
              />
            </div>
          </div>
          <Footer />
        </div>
      </>
      {/* )} */}
    </>
  );
}
export default AppLayout;
