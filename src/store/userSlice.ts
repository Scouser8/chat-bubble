import { createSlice } from "@reduxjs/toolkit";
import { USERS } from "../constants";
import { User } from "../components/types";

type UserState = User;

const initialState: UserState = USERS[0];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { setUser: (state, action) => (state = action.payload) },
});

export default userSlice.reducer;
