import {
  CLIENT_SEARCH_DATA_REQUEST,
  CLIENT_SEARCH_DATA_SUCCESS,
  CLIENT_SEARCH_DATA_FAILURE,
  DATE_LIST_DATA_SHOW_REQUEST,
  DATE_LIST_DATA_SHOW_SUCCESS,
  DATE_LIST_DATA_SHOW_FAILURE,
  ARR_LIST_DATA_SHOW_REQUEST,
  ARR_LIST_DATA_SHOW_SUCCESS,
  ARR_LIST_DATA_SHOW_FAILURE,
  INVOICE_DATA_LIST_REQUEST,
  INVOICE_DATA_LIST_SUCCESS,
  INVOICE_DATA_LIST_FAILURE,
  VIEW_CONTACT_DB_DATA_LIST_REQUEST,
  VIEW_CONTACT_DB_DATA_LIST_SUCCESS,
  VIEW_CONTACT_DB_DATA_LIST_FAILURE,
  GET_CUSTUMER_DATA_TOTAL_REQUEST,
  GET_CUSTUMER_DATA_TOTAL_SUCCESS,
  GET_CUSTUMER_DATA_TOTAL_FAILURE,
  GET_CUSTOMER_FILTER_DATA_REQUEST,
  GET_CUSTOMER_FILTER_DATA_SUCCESS,
  GET_CUSTOMER_FILTER_DATA_FAILURE,
  GET_CONTRACT_DATA_DB_FILTER_REQUEST,
  GET_CONTRACT_DATA_DB_FILTER_SUCCESS,
  GET_CONTRACT_DATA_DB_FILTER_FAILURE,
} from "../../constants/UserDetailConstant";

import axios from "axios";
import api from "../../utils/api";
import { BACKEND_API_URL } from "../../environment";

export const ClientsearchtrquestUserAction =
  (id, DataItem, startdate, enddate, selectedoption, value) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: CLIENT_SEARCH_DATA_REQUEST,
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
          `${BACKEND_API_URL}authentication_id/revenue/${id}/${DataItem}/${startdate}/${enddate}/${selectedoption}/?search=${value}`,
          config
        );

        dispatch({
          type: CLIENT_SEARCH_DATA_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: CLIENT_SEARCH_DATA_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const DatelistUserAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DATE_LIST_DATA_SHOW_REQUEST,
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

    let { data } = await api.get(
      `${BACKEND_API_URL}authentication_id/start-end/${id}/`,
      config
    );

    dispatch({
      type: DATE_LIST_DATA_SHOW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATE_LIST_DATA_SHOW_FAILURE,
      payload: error.response.data.error
        ? error.response.data.error
        : error.response.data,
    });
  }
};

export const ArrlistUserAction =
  (id,startperiod, endperiod, selectedOption) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: ARR_LIST_DATA_SHOW_REQUEST,
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

        const data = await axios.get(
          `${BACKEND_API_URL}authentication_id/arr-rollforward/${startperiod}/${endperiod}/${selectedOption}/${id}/`,
        );
        dispatch({
          type: ARR_LIST_DATA_SHOW_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ARR_LIST_DATA_SHOW_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const InvoicelistrequestUserAction =
  (id, startperiod, endperiod, selectedOption, page) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: INVOICE_DATA_LIST_REQUEST,
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
          `${BACKEND_API_URL}authentication_id/arr-customer/${id}/${startperiod}/${endperiod}/${selectedOption}/?page=${page}`,
          config
        );
        console.log("InvoicelistActon",data)
        dispatch({
          type: INVOICE_DATA_LIST_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: INVOICE_DATA_LIST_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const ViewContractDbUserAction =
  (id, DataItem, startdate, enddate, selectedOption, page) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: VIEW_CONTACT_DB_DATA_LIST_REQUEST,
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
        let data = [];
        if (id) {
          data = await axios.get(
            `${BACKEND_API_URL}authentication_id/revenue/${id}/${DataItem}/${startdate}/${enddate}/${selectedOption}/?page=${page}`,
          );
          
        } else {
          data = await axios.get(
            `${BACKEND_API_URL}invoice/revenue/${DataItem}/${startdate}/${enddate}/${selectedOption}/?page=${page}`,
            config
          );
        }

        http://122.160.74.251:8030//4/billing/Jun%2016/Nov%2029/day/?page=1

        // const data = [];
        // if (id) {
        //   data = await axios.get(
        //     `${BACKEND_API_URL}authentication_id/revenue/${id}/${DataItem}/${startdate}/${enddate}/${selectedOption}/?page=${page}`,
        //     config
        //   );
        // } else if (!id) {
        //   data = await axios.get(
        //     `${BACKEND_API_URL}invoice/revenue/${DataItem}/${startdate}/${enddate}/${selectedOption}/?page=${page}`,
        //     config
        //   );
        // }

        // Pending

        dispatch({
          type: VIEW_CONTACT_DB_DATA_LIST_SUCCESS,
          payload:id ? data.data : data ,
        });
      } catch (error) {
        dispatch({
          type: VIEW_CONTACT_DB_DATA_LIST_FAILURE,
          payload: error.response.data.error
            ? error.response.data.error
            : error.response.data,
        });
      }
    };

export const getCutomerTotalUserAction =
  (id, selectedOption) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CUSTUMER_DATA_TOTAL_REQUEST,
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
        `${BACKEND_API_URL}authentication_id/table-total/${id}/arr/${selectedOption}/`,
        config
      );

      dispatch({
        type: GET_CUSTUMER_DATA_TOTAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CUSTUMER_DATA_TOTAL_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const getCutomerTotalFilterUserAction =
  (id, selectedOption, revinueList) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CUSTOMER_FILTER_DATA_REQUEST,
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
        `${BACKEND_API_URL}authentication_id/table-total/${id}/${revinueList}/${selectedOption}/`,
        config
      );

      dispatch({
        type: GET_CUSTOMER_FILTER_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CUSTOMER_FILTER_DATA_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };

export const GetContractDbFilterListUserAction =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_CONTRACT_DATA_DB_FILTER_REQUEST,
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
        `${BACKEND_API_URL}authentication_id/database-dropdown-list/${id}`,
        config
      );

      dispatch({
        type: GET_CONTRACT_DATA_DB_FILTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTRACT_DATA_DB_FILTER_FAILURE,
        payload: error.response.data.error
          ? error.response.data.error
          : error.response.data,
      });
    }
  };
