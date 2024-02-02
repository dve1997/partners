const initState = {
  createOrder: null,
  deleteOrder: null,
  infoOrderId: null,
  infoOrder: {},
  filterSearch: "",
  filterTypePart: "all",
  filterTypeProd: "all",
  sale: "",
  updateOrderSale: null,
};

export const reducerUpdateData = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ORDER":
      return {
        ...state,
        createOrder: action.payload,
      };
    case "DELETE_ORDER":
      return {
        ...state,
        deleteOrder: action.payload,
      };
    case "INFO_ORDER_ID":
      return {
        ...state,
        infoOrderId: action.payload,
      };
    case "INFO_ORDER":
      return {
        ...state,
        infoOrder: action.payload,
      };
    case "FILTER_ORDERS_SEARCH":
      return {
        ...state,
        filterSearch: action.payload,
      };
    case "FILTER_ORDERS_PART":
      return {
        ...state,
        filterTypePart: action.payload,
      };
    case "FILTER_ORDERS_PROD":
      return {
        ...state,
        filterTypeProd: action.payload,
      };
    case "CHANGE_SALE":
      return {
        ...state,
        sale: action.payload,
      };
    case "UPDATE_SALE":
      return {
        ...state,
        updateOrderSale: action.payload,
      };
    default:
      return state;
  }
};
