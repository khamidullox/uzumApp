import { createSlice } from "@reduxjs/toolkit";

// let dataFromLoclaStore = () => {
//   return (
//     JSON.parse(localStorage.getItem("user")) || {
//       user: null,
//       isAuthState: false,
//     }
//   );
// };

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
  },
});

// Action creators are generated for each case reducer function
export const { topChange } = topSlice.actions;

export default topSlice.reducer;
