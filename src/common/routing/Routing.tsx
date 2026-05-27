import { Route, Routes } from "react-router";
import { Main } from "@/app/pages/Main/Main";
import { PATH } from "./paths";
import { Category } from "@app/pages/Category";
import { Filtered } from "@app/pages/Filtered";
import { Search } from "@app/pages/Search";
import { Favorites } from "@app/pages/Favorites";
import { PageNotFound } from "../components/PageNotFound/PageNotFound";

export const Routing = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Main />} />
      <Route path={PATH.CATEGORY} element={<Category />} />
      <Route path={PATH.FILTERED} element={<Filtered />} />
      <Route path={PATH.SEARCH} element={<Search />} />
      <Route path={PATH.FAVORITES} element={<Favorites />} />
      <Route path={PATH.NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};
