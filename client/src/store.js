import { combineReducers } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getAllItemsReducers } from "./reducer/itemReducers";
import { cartReducer } from "./reducer/cartReducers";
import {
  loginUserReducer,
  registerUserReducer,
  getAllUsersReducers,
} from "./reducer/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducers,
} from "./reducer/orderReducer";

const finalReducer = combineReducers({
  getAllItemsReducers: getAllItemsReducers,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducers: getUserOrdersReducers,
  getAllUsersReducers: getAllUsersReducers,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [];
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancer = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
