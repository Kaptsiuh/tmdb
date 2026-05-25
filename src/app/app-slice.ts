import { createSlice } from "@reduxjs/toolkit";

type ThemeMode = "light" | "dark";

const getInitTheme = (): ThemeMode => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const initialTheme = getInitTheme();
document.documentElement.setAttribute("data-theme", initialTheme);

export const appSlice = createSlice({
  name: "app",
  initialState: {
    themeMode: initialTheme,
  },
  selectors: { selectTheme: (state) => state.themeMode },
  reducers: (create) => ({
    setTheme: (state, action: { payload: ThemeMode }) => {
      state.themeMode = action.payload;
    },
    changeTheme: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode;
    }),
  }),
});

export const { selectTheme } = appSlice.selectors;
export const { changeTheme, setTheme } = appSlice.actions;
export const appReducer = appSlice.reducer;
