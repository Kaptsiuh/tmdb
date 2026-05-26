import { Header } from "../common/components/Header/Header";
import { Routing } from "../common/routing/Routing";
import s from "./App.module.css";

export function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Routing />
    </div>
  );
}
