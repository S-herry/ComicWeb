import { createSlice } from "@reduxjs/toolkit";

const initComicState = {};

const comicSlice = createSlice({
  name: "comic",
  initialState: initComicState,
  reducers: {},
});

export const comicAction = comicSlice.actions;
export default comicSlice.reducer;
