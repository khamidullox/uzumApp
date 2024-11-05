import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  change: null,
  month: 1,
  simle: null,
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
    planSimle: (state, { payload }) => {
      state.simle = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { topChange, planMonth, planSimle } = topSlice.actions;

export default topSlice.reducer;
