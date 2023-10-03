import React from "react";
import ReactDOM from "react-dom/client";
import Principal from "./Principal";
import "./index.css";
import { TaskContextProvider } from "../src/context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-screen">
    <div className="container mx-auto">
      <React.StrictMode>
        <TaskContextProvider>
          <Principal />
        </TaskContextProvider>
      </React.StrictMode>
    </div>
  </main>
);
