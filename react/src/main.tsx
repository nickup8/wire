import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ContextProvider>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </ContextProvider>
);
