import React from "react";
import ReactDOM from "react-dom/client";
import Principal from "./Principal";
import "./index.css";
import { TaskContextProvider } from "../src/context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <Principal />
    </TaskContextProvider>
  </React.StrictMode>
);
