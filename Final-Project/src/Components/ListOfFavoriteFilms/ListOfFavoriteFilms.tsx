import React from "react";
import FilmCard from "../FilmCard/Presentational";
import { Film } from "../../api/hooks/requests/types";


interface ListOfFavoriteFilmsProps {
  films: Film[];
}

const ListOfFavoriteFilms: React.FC<ListOfFavoriteFilmsProps> = ({ films }) => {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <FilmCard
            id={film.id}
            title={film.title}
            imageUrl={film.imageUrl!}
            isFavorite={true}
            onFavoriteToggle={() => {}}
            favoriteFilms={[]}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListOfFavoriteFilms;
