import { useEffect, useState } from "react";
import s from "./Main.module.css";
import { instance } from "@/common/instance/instance";
import type { Movie } from "@/common/types/types";

export const Main = () => {
  const [randomMovie, setRandomMovie] = useState<null | Movie>(null);

  useEffect(() => {
    instance.get(`/movie/popular`).then((res) => {
      const movies = res.data.results;
      const randomId = Math.floor(Math.random() * movies.length);
      const selectedMovie = movies[randomId];
      setRandomMovie(selectedMovie);
    });
  }, []);

  return (
    <>
      <div className={s.container}>
        {randomMovie && (
          <img
            src={`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`}
            className={s.background}
            alt=""
          />
        )}
        <div className={s.overlay}>
          <h1 className={s.title}>Welcome</h1>
          <p className={s.description}>Browse highlighted titles from TMDB</p>
          <div className={s.searchBox}>
            <input
              className={s.searchInput}
              type="text"
              placeholder={"Search for a movie"}
            />
            <button className={s.searchButton}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};
