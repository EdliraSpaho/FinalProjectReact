import React, { useEffect, useState } from "react";
import { Film } from "../api/hooks/requests/types";
import getSingleFilm from "../api/hooks/requests/getSingleFilm";
import { getFavoriteFilmsFromLocalStorage } from "./utils/localStorageUtils";
import ListOfFavoriteFilms from "../Components/ListOfFavoriteFilms/ListOfFavoriteFilms";

const MyFavorite: React.FC = () => {
  const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFavoriteFilmsInfo = async () => {
      try {
        const favoriteFilmIds = getFavoriteFilmsFromLocalStorage();
        const filmInfoPromises = favoriteFilmIds.map((filmId) =>
          getSingleFilm(filmId)
        );
        const filmsInfo = await Promise.all(filmInfoPromises);
        setFavoriteFilms(filmsInfo.filter(Boolean) as Film[]);
      } catch (error) {
        console.error("Error while fetching favorite films:", error);
      }
    };

    fetchFavoriteFilmsInfo();
  }, []);

  return (
    <div>
      <h1>My Favorite Films</h1>
      <ListOfFavoriteFilms films={favoriteFilms} />
    </div>
  );
};

export default MyFavorite;
