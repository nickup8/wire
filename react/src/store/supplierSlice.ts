import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface SupplierState {
    id: number | null;
}

const initialState: SupplierState = {
    id: null,
};

export const supplierSlice = createSlice({
    name: "supplier",
    initialState,
    reducers: {
        editSupplier: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { editSupplier } = supplierSlice.actions;
export const editSupplierId = (state: RootState) => state.supplier.id;

export default supplierSlice.reducer;
