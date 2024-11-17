import { configureStore } from "@reduxjs/toolkit";
import { exampleApi } from "../../features/form/api";

export const store = configureStore({
  reducer: {
    [exampleApi.reducerPath]: exampleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exampleApi.middleware)
});
export default store;