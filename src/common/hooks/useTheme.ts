import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "./useAppDispatch";
import { changeTheme, selectTheme } from "../../app/app-slice";

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectTheme);

  const toggleTheme = () => {
    dispatch(
      changeTheme({
        themeMode: themeMode === "light" ? "dark" : "light",
      }),
    );
  };

  return { themeMode, toggleTheme };
};
