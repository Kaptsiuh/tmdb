import s from "./SectionCategory.module.css";
import { Cards } from "@/features/movies/ui/Cards";

type Props = {
  title: string;
  category: string;
};

export const SectionCategory = ({ title, category }: Props) => {
  return (
    <section className={s.category}>
      <div className={s.categoryHeader}>
        <h2 className={s.categoryTitle}>{title}</h2>
        <a className={s.categoryLink} href={`/category/${category}`}>
          View more
        </a>
      </div>
      <Cards category={category} />
    </section>
  );
};
