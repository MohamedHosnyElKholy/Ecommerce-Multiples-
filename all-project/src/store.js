import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./app/lib/loginSlice.jsx"; 
export const store = configureStore({
  reducer: {
    // All reducers
    auth: authSlice,
  },
});
