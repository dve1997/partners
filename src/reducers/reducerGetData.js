const initState = {
  statusLoading: "LOADING_GET",
  orders: [],
};

export const reducerGetData = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_GET":
      return {
        ...state,
        statusLoading: "LOADING_GET",
      };
    case "LOADED_GET":
      return {
        ...state,
        statusLoading: "LOADED_GET",
        orders: action.payload,
      };
    case "ERROR_GET":
      return {
        ...state,
        statusLoading: "ERROR_GET",
      };
    default:
      return state;
  }
};
