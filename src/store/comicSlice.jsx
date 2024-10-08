import { createSlice } from "@reduxjs/toolkit";

const initComicState = { comicInfo: {}, lastRecord: {} };

const comicSlice = createSlice({
  name: "comic",
  initialState: initComicState,
  reducers: {
    sendComicInfo(state, action) {
      state.comicInfo = action.payload;
    },
  },
});

export const comicAction = comicSlice.actions;
export default comicSlice.reducer;
