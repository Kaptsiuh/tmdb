import LogoIcon from "@/assets/logo.svg";
import s from "./Header.module.css";
import { useTheme } from "../../hooks/useTheme";
import { NavLink } from "react-router";
import { PATH } from "../../routing/paths";

export const Header = () => {
  const { themeMode, toggleTheme } = useTheme();

  const isActive = ({ isActive }) => (isActive ? s.active : "");

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <NavLink to={PATH.MAIN} className={s.logo}>
          <img src={LogoIcon} />
        </NavLink>
        <nav className={s.navigation}>
          <NavLink to={PATH.MAIN} className={isActive}>
            Main
          </NavLink>
          <NavLink to={PATH.CATEGORY} className={isActive}>
            Category Movies
          </NavLink>
          <NavLink to={PATH.FILTERED} className={isActive}>
            Filtered Movies
          </NavLink>
          <NavLink to={PATH.SEARCH} className={isActive}>
            Search
          </NavLink>
          <NavLink to={PATH.FAVORITES} className={isActive}>
            Favorites
          </NavLink>
        </nav>
        <button className={s.themeButton} onClick={toggleTheme}>
          {themeMode === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};
