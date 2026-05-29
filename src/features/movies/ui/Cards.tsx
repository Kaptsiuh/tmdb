import type { Movie } from "@/common/types/types";
import s from "./Cards.module.css";
import { Card } from "./Card/Card";
import { useEffect, useState } from "react";
import { instance } from "@/common/instance/instance";

type Props = {
  category: string;
};

export const Cards = ({ category }: Props) => {
  const [movies, setMovies] = useState<null | Movie[]>(null);

  useEffect(() => {
    instance.get(`/movie/${category}`).then((res) => {
      const result = res.data.results;
      setMovies(result.slice(0, 6));
    });
  }, [category]);

  return (
    <div className={s.cards}>
      {movies?.map((movie) => {
        return (
          <Card
            key={movie.id}
            rating={movie.vote_average}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        );
      })}
    </div>
  );
};
