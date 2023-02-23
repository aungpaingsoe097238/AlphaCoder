import { configureStore } from "@reduxjs/toolkit";
import modelSlice from "./services/modelSlice";

export const store = configureStore({
  reducer: {
    model: modelSlice
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware, contactApi.middleware)
});