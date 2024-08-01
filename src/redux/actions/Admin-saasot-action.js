import {
  ADMIN_UPLOADED_CSV_FILES_FAILURE,
  ADMIN_UPLOADED_CSV_FILES_REQUEST,
  ADMIN_UPLOADED_CSV_FILES_SUCCESS,
  CLIENT_PRODUCTS_SERVICE_GET_SUCCESS,
  CLIENT_PRODUCTS_SERVICE_GET_FAILURE,
  CLIENT_PRODUCTS_SERVICE_GET_REQUEST,
  CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_SUCCESS,
  CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_ADMIN_REQUEST,
  CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_ADMIN_FAILURE,
  CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_ADMIN_SUCCESS,
  CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_REQUEST,
  CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_FAILURE,
  CLIENT_GET_LIST_PRODUCT_SERVICE_TYPE_SUCCESS,
  CLIENT_GET_LIST_PRODUCT_SERVICE_TYPE_REQUEST,
  CLIENT_GET_LIST_PRODUCT_SERVICE_TYPE_FAILURE,
  CLIENT_GET_LIST_REVENUE_RECOGNITION_SUCCESS,
  CLIENT_GET_LIST_REVENUE_RECOGNITION_REQUEST,
  CLIENT_GET_LIST_REVENUE_RECOGNITION_FAILURE,
  CLIENT_ADD_PRODUCT_SERVICE_SUCCESS,
  CLIENT_ADD_PRODUCT_SERVICE_REQUEST,
  CLIENT_ADD_PRODUCT_SERVICE_FAILURE,
  CLIENT_PRODUCTS_SERVICE_GET_BY_ID_SUCCESS,
  CLIENT_PRODUCTS_SERVICE_GET_BY_ID_FAILURE,
  CLIENT_PRODUCTS_SERVICE_GET_BY_ID_REQUEST,
  CLIENT_ADD_CONTEACT_POST_SUCCESS,
  CLIENT_ADD_CONTEACT_POST_REQUEST,
  CLIENT_ADD_CONTEACT_POST_FAILURE,
  CLINET_SH0W_CSV_FILES_SUCCESS,
  CLINET_SH0W_CSV_FILES_FAILURE,
  CLINET_SH0W_CSV_FILES_REQUEST,
  GET_ALL_SUPERADMIN_ADMIN_SUCCESS,
  GET_ALL_SUPERADMIN_ADMIN_FAILURE,
  GET_ALL_SUPERADMIN_ADMIN_REQUEST,
  CLINET_SH0W_CSV_FILES_ADMIN_SUCCESS,
  CLINET_SH0W_CSV_FILES_ADMIN_FAILURE,
  CLINET_SH0W_CSV_FILES_ADMIN_REQUEST,
  CLIENT_SHOW_CONTRACT_DATABASE_SUCCESS,
  CLIENT_SHOW_CONTRACT_DATABASE_REQUEST,
  CLIENT_SHOW_CONTRACT_DATABASE_FAILURE,
  CLIENT_SHOW_CONTRACT_DATABASE_WITHOUT_PAGE_SUCCESS,
  CLIENT_SHOW_CONTRACT_DATABASE_WITHOUT_PAGE_REQUEST,
  CLIENT_SHOW_CONTRACT_DATABASE_WITHOUT_PAGE_FAILURE,
  CLIENT_SHOW_CONTRACT_SCREEN_SUCCESS,
  CLIENT_SHOW_CONTRACT_SCREEN_REQUEST,
  CLIENT_SHOW_CONTRACT_SCREEN_FAILURE,
  CLIENT_ARR_VIEW_LIST_SUCCESS,
  CLIENT_ARR_VIEW_LIST_FAILURE,
  CLIENT_ARR_VIEW_LIST_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILURE,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAILURE,
  PRODUCT_ADD_REQUEST,
  CONTRACT_UPDATE_SUCCESS,
  CONTRACT_UPDATE_FAILURE,
  CONTRACT_UPDATE_REQUEST,
  INVOICE_LIST_SUCCESS,
  INVOICE_LIST_FAILURE,
  INVOICE_LIST_REQUEST,
  INVOICE_CUSTOMER_LIST_SUCCESS,
  INVOICE_CUSTOMER_LIST_FAILURE,
  INVOICE_CUSTOMER_LIST_REQUEST,
  ARR_LIST_SUCCESS,
  ARR_LIST_FAILURE,
  ARR_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_ADMIN_SUCCESS,
  USER_LIST_ADMIN_FAILURE,
  USER_LIST_ADMIN_REQUEST,
  USER_LISTID_SUCCESS,
  USER_LISTID_FAILURE,
  USER_LISTID_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  USER_DELETE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAILURE,
  USER_ADD_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  PROFILE_UPDATE_REQUEST,
  ClosedPeriod_LIST_SUCCESS,
  ClosedPeriod_LIST_FAILURE,
  ClosedPeriod_LIST_REQUEST,
  ClosedPeriod_ADD_SUCCESS,
  ClosedPeriod_ADD_FAILURE,
  ClosedPeriod_ADD_REQUEST,
  ClosedPeriod_UPDATE_SUCCESS,
  ClosedPeriod_UPDATE_FAILURE,
  ClosedPeriod_UPDATE_REQUEST,
  LIFE_LIST_SUCCESS,
  LIFE_LIST_FAILURE,
  LIFE_LIST_REQUEST,
  LIFE_UPDATE_SUCCESS,
  LIFE_UPDATE_FAILURE,
  LIFE_UPDATE_REQUEST,
  QUICKBOOK_LIST_SUCCESS,
  QUICKBOOK_LIST_FAILURE,
  QUICKBOOK_LIST_REQUEST,
  CLIENTARR_LIST_SUCCESS,
  CLIENTARR_LIST_FAILURE,
  CLIENTARR_LIST_REQUEST,
  ARRGRACE_LIST_SUCCESS,
  ARRGRACE_LIST_FAILURE,
  ARRGRACE_LIST_REQUEST,
  ARRGRACE_POST_SUCCESS,
  ARRGRACE_POST_FAILURE,
  ARRGRACE_POST_REQUEST,
  DATEFILTER_GET_SUCCESS,
  DATEFILTER_GET_FAILURE,
  DATEFILTER_GET_REQUEST,
  CLIENT_ADDCONTRACT_PRODUCTS_SERVICE_GET_SUCCESS,
  CLIENT_ADDCONTRACT_PRODUCTS_SERVICE_GET_FAILURE,
  CLIENT_ADDCONTRACT_PRODUCTS_SERVICE_GET_REQUEST,
  CONTRACT_DATABASE_GET_FILTER_DATA_SUCCESS,
  CONTRACT_DATABASE_GET_FILTER_DATA_REQUEST,
  CONTRACT_DATABASE_GET_FILTER_DATA_FAILURE,
  INVOICE_LIST_CSV_SUCCESS,
  INVOICE_LIST_CSV_FAILURE,
  INVOICE_LIST_CSV_REQUEST,
  INVOICE_LIST_EXCEL_SUCCESS,
  INVOICE_LIST_EXCEL_FAILURE,
  INVOICE_LIST_EXCEL_REQUEST,
  CLIENT_SHOW_CONTRACT_CSV_DATABASE_SUCCESS,
  CLIENT_SHOW_CONTRACT_CSV_DATABASE_REQUEST,
  CLIENT_SHOW_CONTRACT_CSV_DATABASE_FAILURE,
  GET_CUSTOMER_NAME_TABLE_TOTAL_REQUEST,
  GET_CUSTOMER_NAME_TABLE_TOTAL_SUCCESS,
  GET_CUSTOMER_NAME_TABLE_TOTAL_FAIL,
  GET_CUSTOMER_TABLE_TOTAL_FILTER_REQUEST,
  GET_CUSTOMER_TABLE_TOTAL_FILTER_SUCCESS,
  GET_CUSTOMER_TABLE_TOTAL_FILTER_FAILURE,
  CLIENT_SEARCH_SUCCESS,
  CLIENT_SEARCH_FAILURE,
  CLIENT_SEARCH_REQUEST,
  CLIENT_ARRSEARCH_SUCCESS,
  CLIENT_ARRSEARCH_FAILURE,
  CLIENT_ARRSEARCH_REQUEST,
  CONTRACT_SEARCH_SUCCESS,
  CONTRACT_SEARCH_FAILURE,
  CONTRACT_SEARCH_REQUEST,
  CONTRACTSCREEN_UPDATE_SUCCESS,
  CONTRACTSCREEN_UPDATE_FAILURE,
  CONTRACTSCREEN_UPDATE_REQUEST,
  PENDING_TABLE_SUCCESS,
  PENDING_TABLE_FAILURE,
  PENDING_TABLE_REQUEST,
  PENDING_TABLE_ADMIN_SUCCESS,
  PENDING_TABLE_ADMIN_FAILURE,
  PENDING_TABLE_ADMIN_REQUEST,
  GET_PRODUCT_SERVICES_SUCCESS,
  GET_PRODUCT_SERVICES_FAILURE,
  GET_PRODUCT_SERVICES_REQUEST,
  POST_PRODUCT_SERVICES_SUCCESS,
  POST_PRODUCT_SERVICES_FAILURE,
  POST_PRODUCT_SERVICES_REQUEST,
  EDIT_PRODUCT_SERVICES_SUCCESS,
  EDIT_PRODUCT_SERVICES_FAILURE,
  EDIT_PRODUCT_SERVICES_REQUEST,
  DELETE_PRODUCT_SERVICES_SUCCESS,
  DELETE_PRODUCT_SERVICES_FAILURE,
  DELETE_PRODUCT_SERVICES_REQUEST,
  GET_CONTRACT_UPLOAD_SUCCESS,
  GET_CONTRACT_UPLOAD_FAILURE,
  GET_CONTRACT_UPLOAD_REQUEST,
  GET_ALL_COMPANY_NAME_SUCCESS,
  GET_ALL_COMPANY_NAME_FAILURE,
  GET_ALL_COMPANY_NAME_REQUEST,

} from "../../constants/Admin-saasot-constants";

// import axios from "axios";
// import { BACKEND_URL } from "../../environment";

import axios from "axios";
import api from "../../utils/api";
import { BACKEND_API_URL } from "../../environment";

export const pendingrenewal =
  (startdate, enddate, selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PENDING_TABLE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/pending_arr/${startdate}/${enddate}/${selectedOption}`,
        config
      );

      dispatch({
        type: PENDING_TABLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PENDING_TABLE_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };


export const pendingAdminrenewal =
  (userID, startdate, enddate, selectedOption) => async (dispatch) => {
    try {
      dispatch({
        type: PENDING_TABLE_ADMIN_REQUEST,
      });
      const { data } = await axios.get(
        `${BACKEND_API_URL}authentication_id/pending_arr/${userID}/${startdate}/${enddate}/${selectedOption}`
      );

      dispatch({
        type: PENDING_TABLE_ADMIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PENDING_TABLE_ADMIN_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };


export const Contractscreenupdate =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTRACTSCREEN_UPDATE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.put(
        `${BACKEND_API_URL}invoice/transaction/${id}/`,
        params,
        config
      );

      dispatch({
        type: CONTRACTSCREEN_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONTRACTSCREEN_UPDATE_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const Contractsearch = (value) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTRACT_SEARCH_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.get(
      `${BACKEND_API_URL}invoice/list?search=${value}`,
      config
    );

    dispatch({
      type: CONTRACT_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CONTRACT_SEARCH_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const ClientaRRsearchtrquest =
  (startdate, enddate, selectedoption, value) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CLIENT_ARRSEARCH_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/arr-customer/${startdate}/${enddate}/${selectedoption}/?search=${value}`,
        config
      );

      dispatch({
        type: CLIENT_ARRSEARCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_ARRSEARCH_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const Clientsearchtrquest =
  (DataItem, startdate, enddate, selectedoption, value) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: CLIENT_SEARCH_REQUEST,
        });

        const {
          authReducer: { userData },
        } = getState();

        const config = {
          headers: {
            "Content-type": "multipart/form-data",
            Authorization: `Bearer ${userData.token}`,
          },
        };
        const { data } = await axios.get(
          `${BACKEND_API_URL}invoice/revenue/${DataItem}/${startdate}/${enddate}/${selectedoption}/?search=${value}`,
          config
        );

        dispatch({
          type: CLIENT_SEARCH_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CLIENT_SEARCH_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const Datelist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DATEFILTER_GET_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    // const { data } = await api.post(
    //   `${BACKEND_API_URL}job-activity/`,
    //   params,
    //   config
    // );

    const { data } = await api.get(
      `${BACKEND_API_URL}invoice/start-end/`,
      config
    );

    dispatch({
      type: DATEFILTER_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATEFILTER_GET_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const Arrgracepost = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARRGRACE_POST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.post(
      `${BACKEND_API_URL}invoice/arr-grace-period/`,
      params,
      config
    );

    dispatch({
      type: ARRGRACE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARRGRACE_POST_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const Arrgraceget = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARRGRACE_LIST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.get(
      `${BACKEND_API_URL}invoice/arr-grace-period/`,
      config
    );

    dispatch({
      type: ARRGRACE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARRGRACE_LIST_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const Clientarrget = (id, userID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENTARR_LIST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    let data;
    if (userID) {
      data = await axios.get(
        `${BACKEND_API_URL}authentication_id/arr-customer/${id}/day/${userID}`,

      );
    } else if (!userID) {
      data = await axios.get(
        `${BACKEND_API_URL}invoice/arr-customer/${id}/day`,
        config
      );
    }


    dispatch({
      type: CLIENTARR_LIST_SUCCESS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: CLIENTARR_LIST_FAILURE,
      payload: error.response?.data.error
        ? error.response?.data.error
        : error.response?.data,
    });
  }
};

export const Quickbookget = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUICKBOOK_LIST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.get(
      `${BACKEND_API_URL}quickbook/quickbook_oauth`,
      config
    );

    dispatch({
      type: QUICKBOOK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: QUICKBOOK_LIST_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const Lifelist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIFE_LIST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_API_URL}services/expected-months/`,
      config
    );

    dispatch({
      type: LIFE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIFE_LIST_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const LifelistUpdateapi = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIFE_UPDATE_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_API_URL}services/expected-months/`,
      params,
      config
    );

    dispatch({
      type: LIFE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIFE_UPDATE_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const closelistUpdate = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ClosedPeriod_UPDATE_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.post(
      `${BACKEND_API_URL}invoice/close-date/`,
      config
    );

    dispatch({
      type: ClosedPeriod_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ClosedPeriod_UPDATE_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const closelistADD = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ClosedPeriod_ADD_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.post(
      `${BACKEND_API_URL}invoice/close-date/`,
      config
    );

    dispatch({
      type: ClosedPeriod_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ClosedPeriod_ADD_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const closelistAdd = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ClosedPeriod_ADD_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.post(
      `${BACKEND_API_URL}invoice/close-date/`,
      config
    );

    dispatch({
      type: ClosedPeriod_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ClosedPeriod_ADD_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const closelist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ClosedPeriod_LIST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.get(
      `${BACKEND_API_URL}invoice/close-date/`,
      config
    );

    dispatch({
      type: ClosedPeriod_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ClosedPeriod_LIST_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const UserAdd = (params, creator) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ADD_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.post(
      `${BACKEND_API_URL}auth/user/`,
      params,
      config
    )
    // let data;
    // if (userData?.user?.role === 4 && creator == "super") {
    //   console.log("super", params)
    //   data = await axios.post(
    //     `${BACKEND_API_URL}auth/signup-company-user/`,
    //     params,
    //   )
    // } else (
    //   data = await axios.post(
    //     `${BACKEND_API_URL}auth/user/`,
    //     params,
    //     config
    //   )
    // )

    dispatch({
      type: USER_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({

      type: USER_ADD_FAILURE,
      payload: error.response.data.message ?
        error.response.data.message :
        error.response.data.message.non_field_errors[0] ?
          error.response.data.message.non_field_errors[0] :
          error.response.data.error
            ? error.response.data.error
            : error.message,
    });
  }
};

export const ProfileUpdateAction = (params, id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_UPDATE_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.put(
      `${BACKEND_API_URL}auth/user_update/${id}/`,
      params,
      config
    )

    dispatch({
      type: PROFILE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({

      type: PROFILE_UPDATE_FAILURE,
      payload: error.response.data.message ?
        error.response.data.message :
        error.response.data.message.non_field_errors[0] ?
          error.response.data.message.non_field_errors[0] :
          error.response.data.error
            ? error.response.data.error
            : error.message,
    });
  }
};


export const Userlistid = (id,comp) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LISTID_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    let data; 
    if(comp == "company"){
     data = await axios.get(
        `${BACKEND_API_URL}authentication_id/companies/${id}`,
        config
      );
    }else {
       data  = await axios.get(
        `${BACKEND_API_URL}auth/user_update/${id}`,
        config
      );
    }
    
    // let data;
    // if (userData?.user?.role === 4) {
    //   data = await axios.get(
    //     `${BACKEND_API_URL}auth/user_update/${id}`,
    //     config
    //   );
    // } else {
    //   data = await axios.get(
    //     `${BACKEND_API_URL}auth/user/${id}`,
    //     config
    //   );
    // }


    dispatch({
      type: USER_LISTID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LISTID_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const UserDelete = (id, comp) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    let data;
    if (userData?.user.role === 4 && comp == "company") {
      data = await axios.delete(
        `${BACKEND_API_URL}authentication_id/companies/${id}`,
        config
      );
    } else if (userData?.user.role === 4 && comp !== "company") {
      data = await axios.delete(
        `${BACKEND_API_URL}auth/user_update/${id}`,
        config
      );
    } else {
      data = await axios.delete(
        `${BACKEND_API_URL}auth/user/${id}`,
        config
      );
    }


    dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data,
    });
    console.log("==========================",data)
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const UserUpdate = (params, id,comp) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    let data;
    if (comp == "company") {
      data = await axios.patch(
        `${BACKEND_API_URL}authentication_id/companies/${id}/`,
        params,
        config
      )
    } else {
      data = await axios.patch(
        `${BACKEND_API_URL}auth/user/${id}/`,
        params,
        config
      );

    }

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const Userlist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const { data } = await axios.get(`${BACKEND_API_URL}auth/user`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const UserlistAdminAction = (company_id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_ADMIN_REQUEST,
    });


    const { data } = await axios.get(`${BACKEND_API_URL}/authentication_id/users/by-company/${company_id}`,);

    dispatch({
      type: USER_LIST_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_ADMIN_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const Arrlist =
  (startperiod, endperiod, selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ARR_LIST_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/arr-rollforward/${startperiod}/${endperiod}/${selectedOption}`,
        config
      );

      dispatch({
        type: ARR_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ARR_LIST_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const Customerinvoicelist =
  (id, selectedOption, userID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: INVOICE_CUSTOMER_LIST_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      let data;
      if (userID) {
        data = await axios.get(
          `${BACKEND_API_URL}authentication_id/arr-rollforward/${id}/${selectedOption}/${userID}`,

        );
      } else {
        data = await axios.get(
          `${BACKEND_API_URL}invoice/arr-rollforward/${id}/${selectedOption}`,
          config
        );
      }

      dispatch({
        type: INVOICE_CUSTOMER_LIST_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: INVOICE_CUSTOMER_LIST_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const Invoicelistrequest =
  (startperiod, endperiod, selectedOption, page, sorting) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: INVOICE_LIST_REQUEST,
        });

        const {
          authReducer: { userData },
        } = getState();

        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        };

        const { data } = await axios.get(
          `${BACKEND_API_URL}invoice/arr-customer/${startperiod}/${endperiod}/${selectedOption}/?page=${page}&ordering=${sorting}`,
          config
        );

        dispatch({
          type: INVOICE_LIST_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: INVOICE_LIST_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const InvoicelistrequestCSV =
  (selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: INVOICE_LIST_CSV_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/download-csv-arr/csv/${selectedOption}/`,
        config
      );

      dispatch({
        type: INVOICE_LIST_CSV_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: INVOICE_LIST_CSV_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const InvoicelistrequestEXCEL =
  (selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: INVOICE_LIST_EXCEL_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/download-csv-arr/excel/${selectedOption}/`,
        config
      );

      dispatch({
        type: INVOICE_LIST_EXCEL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: INVOICE_LIST_EXCEL_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const ContractUpdateAction =
  (params, id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTRACT_UPDATE_SUCCESS,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.patch(
        `${BACKEND_API_URL}invoice/calculation/${id}/`,
        params,
        config
      );

      dispatch({
        type: CONTRACT_UPDATE_REQUEST,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONTRACT_UPDATE_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const Productadd = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_ADD_SUCCESS,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_API_URL}services/product-type/`,
      params,
      config
    );

    dispatch({
      type: PRODUCT_ADD_REQUEST,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const UploadFileAction = (params,company_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_UPLOADED_CSV_FILES_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_API_URL}invoice/upload-csv/?company_id=${company_id}`,
      params,
      config
    );

    dispatch({
      type: ADMIN_UPLOADED_CSV_FILES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_UPLOADED_CSV_FILES_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const DeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.delete(
      `${BACKEND_API_URL}services/product-type/${id}`,
      config
    );

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const ProductUpdateAction =
  (id, params) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `${BACKEND_API_URL}services/product-type/${id}/`,
        params,
        config
      );

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_UPDATE_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetProductServiceAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_PRODUCTS_SERVICE_GET_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_API_URL}services/product-service`,
      config
    );

    dispatch({
      type: CLIENT_PRODUCTS_SERVICE_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_PRODUCTS_SERVICE_GET_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const GetAddContractProductServiceAction =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: CLIENT_ADDCONTRACT_PRODUCTS_SERVICE_GET_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}services/defined-service`,
        config
      );

      dispatch({
        type: CLIENT_ADDCONTRACT_PRODUCTS_SERVICE_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_ADDCONTRACT_PRODUCTS_SERVICE_GET_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetListProductServiceNameAction =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}services/undefined-service`,
        config
      );

      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };
export const GetListProductServiceNameAdminAction =
  (company_id) => async (dispatch) => {
    try {
      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_ADMIN_REQUEST,
      });
      const { data } = await axios.get(
        `${BACKEND_API_URL}services/product_service/?company_id=${company_id}`,
      );

      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_ADMIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_NAME_ADMIN_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetListProductServiceTypeAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_TYPE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      let response;

      if (id) {
        response = await axios.get(
          `${BACKEND_API_URL}services/product-type/${id}`,
          config
        );
      } else {
        response = await axios.get(
          `${BACKEND_API_URL}services/product-type`,
          config
        );
      }

      const data = response.data;

      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_TYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_GET_LIST_PRODUCT_SERVICE_TYPE_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetListRevenueAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_GET_LIST_REVENUE_RECOGNITION_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_API_URL}services/revenue-type/`,
      config
    );

    dispatch({
      type: CLIENT_GET_LIST_REVENUE_RECOGNITION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_GET_LIST_REVENUE_RECOGNITION_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const AddProductServiceAction =
  (params, productId, clientId, role) => async (dispatch, getState) => {
    console.log("role++++++++++++", params, productId, clientId, role)
    try {
      dispatch({
        type: CLIENT_ADD_PRODUCT_SERVICE_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      let data = [];
      if (clientId && productId) {
        data = await axios.patch(
          `${BACKEND_API_URL}services/product_service/${productId}/?company_id=${clientId}`,
          params,
          config);
      } else if (productId) {
        data = await axios.patch(
          `${BACKEND_API_URL}services/product-service/${productId}/`,
          params,
          config
        );
      } else if (role == 1 && !clientId) {
        data = await axios.post(
          `${BACKEND_API_URL}services/product-service/`,
          params,
          config
        );
      } else if (role == 4 && clientId) {
        data = await axios.post(
          `${BACKEND_API_URL}services/product_service/?company_id=${clientId}`,
          params,
          config
        );
      } else {
        console.log("Api not Hitted")
      }

      // const { data } = await axios.post(
      //   `${BACKEND_API_URL}services/product-service/`,
      //   params,
      //   config
      // );

      dispatch({
        type: CLIENT_ADD_PRODUCT_SERVICE_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.response?.data || 'An error occurred';
      dispatch({
        type: CLIENT_ADD_PRODUCT_SERVICE_FAILURE,
        payload: errorMessage,
      });
    }
  };

export const GetByIdProductAction = (id, clientId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_PRODUCTS_SERVICE_GET_BY_ID_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    let data;
    if (clientId) {
      data = await axios.get(
        `${BACKEND_API_URL}services/product_service/${id}/?company_id=${clientId}`,
        config
      );
    } else {
      data = await axios.get(
        `${BACKEND_API_URL}services/product-service/${id}/`,
        config
      );
    }


    dispatch({
      type: CLIENT_PRODUCTS_SERVICE_GET_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_PRODUCTS_SERVICE_GET_BY_ID_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const AddContractAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLIENT_ADD_CONTEACT_POST_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_API_URL}invoice/transaction/`,
      params,
      config
    );

    dispatch({
      type: CLIENT_ADD_CONTEACT_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_ADD_CONTEACT_POST_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};


export const CsvShowClientAction = (page) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CLINET_SH0W_CSV_FILES_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_API_URL}invoice/list?page=${page}`,
      config
    );

    dispatch({
      type: CLINET_SH0W_CSV_FILES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLINET_SH0W_CSV_FILES_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const getAllSuperAdminAction = (role) => async (dispatch, getState) => {

  try {
    dispatch({
      type: GET_ALL_SUPERADMIN_ADMIN_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_API_URL}auth/users/?role=${role}`,
      config
    );

    dispatch({
      type: GET_ALL_SUPERADMIN_ADMIN_SUCCESS,
      payload: data,
    });


  } catch (error) {
    const errorMessage = error.response?.data?.error || error.response?.data || 'An error occurred';
    dispatch({
      type: GET_ALL_SUPERADMIN_ADMIN_FAILURE,
      payload: errorMessage,
    });
  }
};

export const CsvShowClientAdminAction = (company_id, pageNum) => async (dispatch, getState) => {

  try {
    dispatch({
      type: CLINET_SH0W_CSV_FILES_ADMIN_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(
      `${BACKEND_API_URL}authentication_id/items?company_id=${company_id}&page=${pageNum}`,
      config
    );

    dispatch({
      type: CLINET_SH0W_CSV_FILES_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CLINET_SH0W_CSV_FILES_ADMIN_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const ViewContractDbAction =
  (DataItem, startdate, enddate, selectedOption, page) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: CLIENT_SHOW_CONTRACT_DATABASE_REQUEST,
        });

        const {
          authReducer: { userData },
        } = getState();


        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        };

        const { data } = await axios.get(
          `${BACKEND_API_URL}invoice/revenue/${DataItem}/${startdate}/${enddate}/${selectedOption}/?page=${page}`,
          config
        );

        dispatch({
          type: CLIENT_SHOW_CONTRACT_DATABASE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CLIENT_SHOW_CONTRACT_DATABASE_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const ViewContractDbWithoutPageAction =
  (DataItem, startdate, enddate, selectedOption, page, atoZFilter) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: CLIENT_SHOW_CONTRACT_DATABASE_WITHOUT_PAGE_REQUEST,
        });

        const {
          authReducer: { userData },
        } = getState();

        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        };

        const { data } = await axios.get(
          `${BACKEND_API_URL}invoice/revenue/${DataItem}/${startdate}/${enddate}/${selectedOption}/?ordering=${atoZFilter}&page=${page}`,
          config
        );

        dispatch({
          type: CLIENT_SHOW_CONTRACT_DATABASE_WITHOUT_PAGE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CLIENT_SHOW_CONTRACT_DATABASE_WITHOUT_PAGE_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const getCutomerTotalAction =
  (selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CUSTOMER_NAME_TABLE_TOTAL_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/table-total/arr/${selectedOption}/`,
        config
      );

      dispatch({
        type: GET_CUSTOMER_NAME_TABLE_TOTAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CUSTOMER_NAME_TABLE_TOTAL_FAIL,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const getCutomerTotalFilterAction =
  (selectedOption, revinueList, userID) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CUSTOMER_TABLE_TOTAL_FILTER_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };
      let data;
      if (userID) {
        data = await axios.get(
          `${BACKEND_API_URL}authentication_id/table-total/${userID}/${revinueList}/${selectedOption}/`,
          config
        );
      } else {
        data = await axios.get(
          `${BACKEND_API_URL}invoice/table-total/${revinueList}/${selectedOption}/`,
          config
        );
      }


      dispatch({
        type: GET_CUSTOMER_TABLE_TOTAL_FILTER_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: GET_CUSTOMER_TABLE_TOTAL_FILTER_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const CsvViewContractDbAction =
  (DataItem, startdate, enddate, selectedOption) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: CLIENT_SHOW_CONTRACT_CSV_DATABASE_REQUEST,
        });

        const {
          authReducer: { userData },
        } = getState();

        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        };

        const { data } = await axios.get(
          `${BACKEND_API_URL}invoice/download-csv-database-table/csv/${DataItem}/${selectedOption}/`,
          config
        );

        dispatch({
          type: CLIENT_SHOW_CONTRACT_CSV_DATABASE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CLIENT_SHOW_CONTRACT_CSV_DATABASE_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const ContractScreenAction =
  (dataID, selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CLIENT_SHOW_CONTRACT_SCREEN_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/multi-transaction-secreen/${dataID}/${selectedOption}`,
        config
      );

      dispatch({
        type: CLIENT_SHOW_CONTRACT_SCREEN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_SHOW_CONTRACT_SCREEN_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const ArrViewListAction =
  (selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CLIENT_ARR_VIEW_LIST_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      // const { data } = await axios.get(
      //   `${BACKEND_API_URL}invoice/arr-customer/${selectedOption}`,
      //   config
      // );

      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/arr-customer/Jan 18/Dec 19/day`,
        config
      );

      dispatch({
        type: CLIENT_ARR_VIEW_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CLIENT_ARR_VIEW_LIST_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetContractDbFilterListAction =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: CONTRACT_DATABASE_GET_FILTER_DATA_REQUEST,
      });

      const {
        authReducer: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.get(
        `${BACKEND_API_URL}invoice/database-dropdown-list/`,
        config
      );

      dispatch({
        type: CONTRACT_DATABASE_GET_FILTER_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CONTRACT_DATABASE_GET_FILTER_DATA_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetProductServiceAdminAction =
  (clientId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_PRODUCT_SERVICES_REQUEST,
      });

      const { data } = await axios.get(
        `${BACKEND_API_URL}services/product-service-types/${clientId}/`,
      );

      dispatch({
        type: GET_PRODUCT_SERVICES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_SERVICES_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };


export const PostProductServiceAdminAction = (clientId, params) => async (dispatch) => {
  try {
    dispatch({
      type: POST_PRODUCT_SERVICES_REQUEST,
    });


    const { data } = await axios.post(
      `${BACKEND_API_URL}services/product-service-types/${clientId}`,
      params
    );

    dispatch({
      type: POST_PRODUCT_SERVICES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_PRODUCT_SERVICES_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const EditProductServiceAdminAction =
  (clientId, productId, params) => async (dispatch) => {
    try {
      dispatch({
        type: EDIT_PRODUCT_SERVICES_REQUEST,
      });


      const { data } = await axios.put(
        `${BACKEND_API_URL}services/product-service-types/${clientId}/${productId}/`,
        params,

      );

      dispatch({
        type: EDIT_PRODUCT_SERVICES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_PRODUCT_SERVICES_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const DeleteProductServiceAdminAction = (clientId, productId) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_PRODUCT_SERVICES_REQUEST,
    });

    const { data } = await axios.delete(
      `${BACKEND_API_URL}services/product-service-types/${clientId}/${productId}/`,

    );

    dispatch({
      type: DELETE_PRODUCT_SERVICES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_SERVICES_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const GetContractUploadAction =
  (clientId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_CONTRACT_UPLOAD_REQUEST,
      });

      const { data } = await axios.get(
        `${BACKEND_API_URL}services/product-service-types/${clientId}/`,
      );

      dispatch({
        type: GET_CONTRACT_UPLOAD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTRACT_UPLOAD_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetAllCompanynNameAction =
  () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_COMPANY_NAME_REQUEST,
      });

      const { data } = await axios.get(
        `${BACKEND_API_URL}authentication_id/companies/`,
      );

      dispatch({
        type: GET_ALL_COMPANY_NAME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_COMPANY_NAME_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };