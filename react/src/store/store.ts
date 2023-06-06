import { configureStore } from "@reduxjs/toolkit";
import supplierReducer from "./supplierSlice";
import userSlice from "./userSlice";
import drawerSlice from "./drawerSlice";

export const store = configureStore({
    reducer: {
        supplier: supplierReducer,
        user: userSlice,
        drawer: drawerSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
