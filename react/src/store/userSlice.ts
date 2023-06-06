import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface IUser {
    user: string | null;
    token: string | null;
}

const initialState: IUser = {
    user: null,
    token: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            (state.user = action.payload), (state.token = action.payload);
        },
    },
});

export const { setUser } = userSlice.actions;
export const userName = (state: RootState) => state.user.user;
export default userSlice.reducer;
