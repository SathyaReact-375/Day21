import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import logger from "redux-logger"; 
import messageReducer from "./messageSlice";
import themeReducer from "./themeSlice";
import userAuthReducer from "./userAuthSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    message: messageReducer,
    theme: themeReducer,
    userAuth: userAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger), 
  devTools: true, 
});

export default store;