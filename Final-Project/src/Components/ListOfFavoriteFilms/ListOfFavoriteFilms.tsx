import React from "react";
import FilmCard from "../FilmCard/Presentational";
import { Film } from "../../api/hooks/requests/types";
import styles from "./Styles.module.css";

interface ListOfFavoriteFilmsProps {
  films: Film[];
}

const ListOfFavoriteFilms: React.FC<ListOfFavoriteFilmsProps> = ({ films }) => {
  console.log(films);

  return (
    <ul className={styles.list}>
      {films.map((film) => (
        <li key={film.id} className={styles.listItem}>
          <FilmCard
            id={film.id}
            title={film.title}
            imageUrl={film.image}
            isFavorite={true}
            onFavoriteToggle={() => {}}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListOfFavoriteFilms;
