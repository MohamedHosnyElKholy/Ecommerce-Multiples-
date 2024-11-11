import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./app/lib/loginSlice.jsx";
import dashboardReducer from "./app/feature/dashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    dashboardReducer,
  },
});
