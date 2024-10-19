"use client";

import React from "react";
import store from "../../../src/store";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
