import type { Middleware } from "@reduxjs/toolkit";
import { changeTheme, setTheme } from "../../app-slice";
import { store } from "../store";

export const themeMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);

  if (changeTheme.match(action) || setTheme.match(action)) {
    const theme = store.getState().app.themeMode;
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  return result;
};
