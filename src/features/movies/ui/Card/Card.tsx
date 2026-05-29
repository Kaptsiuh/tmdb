import s from "./Card.module.css";

type Props = {
  rating: number;
  title: string;
  posterPath: string;
};

export const Card = ({ title, rating, posterPath }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.posterWrapper}>
        <img
          className={s.poster}
          src={`https://image.tmdb.org/t/p/w185/${posterPath}`}
          alt={title}
        />
        <span
          className={
            s.rating +
            ` ${rating <= 5.0 ? s.red : rating <= 7 ? s.yellow : s.green}`
          }
        >
          {rating.toFixed(1)}
        </span>
      </div>
      <p className={s.title}>{title}</p>
    </div>
  );
};
