import useGetFilms from "../../api/hooks/useGetFilms";
import FilmCard from "../FilmCard/Presentational";
import styles from "./Styles.module.css";

const ListOfFilms = () => {
  const { data: listOfFilms } = useGetFilms();

  return (
    <div className={styles.listOfFilmsContainer}>
      <div className={styles.filmsGrid}>
        {listOfFilms?.map((film) => (
          <FilmCard
            key={film?.id}
            id={film?.id}
            title={film?.title}
            imageUrl={film?.image}
            onFavoriteToggle={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ListOfFilms;
