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
} from "../../constants/UserDetailConstant";;

export const ClientsearchDataUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_SEARCH_DATA_REQUEST:
      return { loading: true };
    case CLIENT_SEARCH_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        Clientsearchrecord: action.payload,
      };

    case CLIENT_SEARCH_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DatefilterUserReducer = (state = {}, action) => {
  switch (action.type) {
    case DATE_LIST_DATA_SHOW_REQUEST:
      return { loading: true };
    case DATE_LIST_DATA_SHOW_SUCCESS:
      return {
        loading: false,
        success: true,
        Daterecord: action.payload,
      };

    case DATE_LIST_DATA_SHOW_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ArrlistUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ARR_LIST_DATA_SHOW_REQUEST:
      return { loading: true };
    case ARR_LIST_DATA_SHOW_SUCCESS:
      return {
        loading: false,
        success: true,
        Arrlistdata: action.payload,
      };

    case ARR_LIST_DATA_SHOW_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const InvoicegetUserReducer = (state = {}, action) => {
  switch (action.type) {
    case INVOICE_DATA_LIST_REQUEST:
      return { loading: true };
    case INVOICE_DATA_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        Invoicelist: action.payload,
      };

    case INVOICE_DATA_LIST_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const ViewContractDbUserReducer = (
  state = { ViewContractDbData: [] },
  action
) => {
  switch (action.type) {
    case VIEW_CONTACT_DB_DATA_LIST_REQUEST:
      return { loading: true };

    case VIEW_CONTACT_DB_DATA_LIST_SUCCESS:
      return {
        loading: false,
        ViewContractDbData: action.payload,
        success: true,
      };
    case VIEW_CONTACT_DB_DATA_LIST_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getCutomerTotalUserReducer = (state = { getCotTatal: [] }, action) => {
  switch (action.type) {
    case GET_CUSTUMER_DATA_TOTAL_REQUEST:
      return { loading: true };

    case GET_CUSTUMER_DATA_TOTAL_SUCCESS:
      return {
        loading: false,
        getCotTatal: action.payload,
        success: true,
      };
    case GET_CUSTUMER_DATA_TOTAL_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getCutomerTotalFilterUserReducer = (
  state = { getCotTatalFilter: [] },
  action
) => {
  switch (action.type) {
    case GET_CUSTOMER_FILTER_DATA_REQUEST:
      return { loading: true };

    case GET_CUSTOMER_FILTER_DATA_SUCCESS:
      return {
        loading: false,
        getCotTatalFilter: action.payload,
        success: true,
      };
    case GET_CUSTOMER_FILTER_DATA_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const GetContractDbFilterListUserReducer = (
  state = { DBfilterData: [] },
  action
) => {
  switch (action.type) {
    case GET_CONTRACT_DATA_DB_FILTER_REQUEST:
      return { loading: true };

    case GET_CONTRACT_DATA_DB_FILTER_SUCCESS:
      return {
        loading: false,
        DBfilterData: action.payload,
        success: true,
      };
    case GET_CONTRACT_DATA_DB_FILTER_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
