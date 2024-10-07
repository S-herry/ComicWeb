import { createSlice } from "@reduxjs/toolkit";

const initUserState = { user: {}, isLogin: false };
const userSlice = createSlice({
  name: "users",
  initialState: initUserState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
      if (action.payload != null && action.payload.user) {
        state.isLogin = true;
      }
    },
    signOut(state) {
      state.isLogin = false;

      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      state.user = {};
    },
    changeIsLogin(state) {
      console.log("true");
      state.isLogin = true;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
