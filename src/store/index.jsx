import { configureStore } from "@reduxjs/toolkit";
import comicSlice from "./comicSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    comic: comicSlice,
    user: userSlice,
  },
});

export default store;
