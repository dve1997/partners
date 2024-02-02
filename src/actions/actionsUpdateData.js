export const createOrder = (payload) => ({ type: "CREATE_ORDER", payload });
export const deleteOrder = (payload) => ({ type: "DELETE_ORDER", payload });
export const infoOrderId = (payload) => ({ type: "INFO_ORDER_ID", payload });
export const infoOrder = (payload) => ({ type: "INFO_ORDER", payload });
export const filterOrdersSearch = (payload) => ({
  type: "FILTER_ORDERS_SEARCH",
  payload,
});
export const filterOrdersPart = (payload) => ({
  type: "FILTER_ORDERS_PART",
  payload,
});
export const filterOrdersProd = (payload) => ({
  type: "FILTER_ORDERS_PROD",
  payload,
});
export const changeSale = (payload) => ({
  type: "CHANGE_SALE",
  payload,
});

export const updateSale = (payload) => ({
  type: "UPDATE_SALE",
  payload,
});
