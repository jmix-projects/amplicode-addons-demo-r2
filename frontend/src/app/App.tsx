import React from "react";
import "./App.css";
import { Login } from "./login/Login";
import { observer } from "mobx-react";
import { AppMain } from "./app-main/AppMain";
import { useDefaultScreenHotkeys } from "@amplicode/react-core";
import { securityStore } from "../security-store";

export const App = observer(() => {
  useDefaultScreenHotkeys();

  if (!securityStore.isLoggedIn) {
    return <Login />;
  }

  return <AppMain />;
});

export default App;
