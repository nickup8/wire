import { Navigate, createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Suppplier } from "../components/supplier/Suppplier";
import { LoginLayout } from "../layouts/LoginLayout";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { SupplierFormNew } from "../components/supplier/SupplierFormNew";
import { SupplierFormEdit } from "../components/supplier/SupplierFormEdit";
import { Invoices } from "../components/invoices/Invoices";
import { InvoiceFormUpload } from "../components/invoices/InvoiceFormUpload";
import { Users } from "../components/users/Users";
import { UsersFormNew } from "../components/users/UsersFormNew";
import { Feeding } from "../components/feeding/Feeding";
import { BufferFeeding } from "../components/feeding/BufferFeeding";
import { Warehouse } from "../components/warehouse/Warehouse";
import { WarehouseAcceptance } from "../components/warehouse/WarehouseAcceptance";
import { WarehouseMarriage } from "../components/warehouse/WarehouseMarriage";

const token = false;

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
            {
                path: "/invoices",
                element: <Invoices />,
            },
            {
                path: "/invoices/new",
                element: <InvoiceFormUpload />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/users/new",
                element: <UsersFormNew />,
            },
            {
                path: "/feeding",
                element: <Feeding />,
            },
            {
                path: "/feeding/buffer",
                element: <BufferFeeding />,
            },
            {
                path: "/warehouse",
                element: <Warehouse />,
            },
            {
                path: "/warehouse/acceptance",
                element: <WarehouseAcceptance />,
            },
            {
                path: "/warehouse/marriage",
                element: <WarehouseMarriage />,
            },
        ],
    },
    {
        path: "/",
        element: <LoginLayout />,
    },
]);

export default router;
