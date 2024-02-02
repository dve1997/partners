import { combineReducers, createStore } from "redux";

import { reducerGetData } from "../reducers/reducerGetData";
import { reducerUpdateData } from "../reducers/reducerUpdateData";

export const store = createStore(
  combineReducers({ reducerGetData, reducerUpdateData })
);
