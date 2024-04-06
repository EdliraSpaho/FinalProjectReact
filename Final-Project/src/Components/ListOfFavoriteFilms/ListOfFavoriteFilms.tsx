import React from "react";
import FilmCard from "../FilmCard/Presentational";
import { Film } from "../../api/hooks/requests/types";

interface ListOfFavoriteFilmsProps {
  films: Film[];
}

const ListOfFavoriteFilms: React.FC<ListOfFavoriteFilmsProps> = ({ films }) => {
  console.log(films);

  return (
    <ul>
      {films.map((film) => (
        <FilmCard
          key={film.id}
          id={film.id}
          title={film.title}
          imageUrl={film.image}
          isFavorite={true}
          onFavoriteToggle={() => {}}
          favoriteFilms={[]}
        />
      ))}
    </ul>
  );
};

export default ListOfFavoriteFilms;
