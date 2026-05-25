import { configureStore } from "@reduxjs/toolkit";
import { appReducer, appSlice } from "../app-slice";
import { themeMiddleware } from "./middleware/themeMiddleware";

export const store = configureStore({
  reducer: { [appSlice.name]: appReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(themeMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
