import React from 'react';
import useGetFilms from "../../api/hooks/useGetFilms";
import FilmCard from "../FilmCard/Presentational";
import styles from "./Styles.module.css";

interface ListOfFilmsProps {
  searchQuery: string;
}

const ListOfFilms: React.FC<ListOfFilmsProps> = ({ searchQuery }) => {
  const { data: listOfFilms } = useGetFilms();

  if (!listOfFilms) {
    return <div>Loading...</div>;
  }

  const filteredFilms = listOfFilms.filter(film => 
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.listOfFilmsContainer}>
      <div className={styles.filmsGrid}>
        {filteredFilms.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            title={film.title}
            imageUrl={film.image}
            onFavoriteToggle={() => { } } isFavorite={false}  />
        ))}
      </div>
    </div>
  );
};

export default ListOfFilms;
