import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    sideBar: false,
    search: false,
  },
  reducers: {
    sideBarHandler: (state, action) => {
      state.sideBar = action.payload;
    },
    searchHandler: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { sideBarHandler, searchHandler } = layoutSlice.actions;

export default layoutSlice.reducer;
