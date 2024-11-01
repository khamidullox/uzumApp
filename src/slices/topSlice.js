import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  change: null,
  month: 1,
};

export const topSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    topChange: (state, { payload }) => {
      state.change = payload;
    },
    planMonth: (state, { payload }) => {
      state.month = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { topChange, planMonth } = topSlice.actions;

export default topSlice.reducer;
