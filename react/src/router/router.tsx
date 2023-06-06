import { Navigate, createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Suppplier } from "../components/supplier/Suppplier";
import { SupplierForm } from "../components/supplier/SupplierForm";
import { LoginLayout } from "../layouts/LoginLayout";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { SupplierFormNew } from "../components/supplier/SupplierFormNew";
import { SupplierFormEdit } from "../components/supplier/SupplierFormEdit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/supplier",
                element: <Suppplier />,
            },
            {
                path: "/supplier/new",
                element: <SupplierFormNew />,
            },
            {
                path: "/supplier/:id",
                element: <SupplierFormEdit />,
            },
        ],
    },
    {
        path: "/",
        element: <LoginLayout />,
    },
]);

export default router;
