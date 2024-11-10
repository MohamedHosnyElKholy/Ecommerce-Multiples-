import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './app/feature/dashboardSlice';
export const store = configureStore({
  reducer: {
    dashboardReducer,
  },
});
