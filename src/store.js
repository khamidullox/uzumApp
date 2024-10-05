import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import topSlice from "./slices/topSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    top: topSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/loginUser", "user/logout"],
        ignoredPaths: ["user.user"],
      },
    }),
});
