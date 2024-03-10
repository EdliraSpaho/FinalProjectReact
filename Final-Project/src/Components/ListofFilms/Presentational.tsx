import useGetFilms from '../../api/hooks/useGetFilms';
import FilmCard from '../FilmCard/Presentational';
import styles from './Styles.module.css';

const ListOfFilms = () => {
  const { data:listOfFilms} = useGetFilms();

  return (
    <div className={styles.listOfFilmsContainer}>
      <h1 className={styles.title}>Ghilbi films list</h1>
      <div className={styles.filmsGrid}>
      {
        listOfFilms?.map((film) => (
          <FilmCard
            key={film?.id}
            id={film?.id}
            title={film?.title}
            director={film?.director}
            imageUrl={film?.image}
          />
        ))
      }
      </div>
    </div>
  )
};

export default ListOfFilms;
