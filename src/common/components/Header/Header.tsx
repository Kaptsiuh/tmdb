import LogoIcon from "@/assets/logo.svg";
import s from "./Header.module.css";
import { useTheme } from "../../hooks/useTheme";

export const Header = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <a href="/" className={s.logo}>
          <img src={LogoIcon} width={140} height={40} />
        </a>
        <nav className={s.navigation}>
          <a className={s.navigationLink}>Main</a>
          <a className={s.navigationLink}>Category Movies</a>
          <a className={s.navigationLink}>Filtered Movies</a>
          <a className={s.navigationLink}>Search</a>
          <a className={s.navigationLink}>Favorites</a>
        </nav>
        <button className={s.themeButton} onClick={toggleTheme}>
          {themeMode === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};
