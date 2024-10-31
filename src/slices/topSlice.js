import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  change: null,
};

export const topSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    topChange: (state, { payload }) => {
      state.change = payload;
    },
    planMout: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { topChange } = topSlice.actions;

export default topSlice.reducer;
