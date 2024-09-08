import { createSlice } from "@reduxjs/toolkit";

let dataFromLoclaStore = () => {
  return (
    JSON.parse(localStorage.getItem("user")) || {
      user: null,
      isAuthState: false,
    }
  );
};

const initialState = dataFromLoclaStore();
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.user = payload;
      userSlice.caseReducers.setLocal(state);
    },
    logOutUser: (state, { payload }) => {
      state.user = null;
      userSlice.caseReducers.setLocal(state);
    },
    setLocal: (state) => {
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
