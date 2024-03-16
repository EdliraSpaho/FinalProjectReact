import { useParams } from 'react-router-dom';
import useGetSingleFilm from '../api/hooks/useGetSingleFilm';
import FilmDescriptions from '../Components/FilmDescription/Presentational';


const FilmDetails = () => {

  const { filmId } = useParams();

  const {data: filmDetails} = useGetSingleFilm(filmId as string);

  return (
    <FilmDescriptions
    title={filmDetails?.title}
    original_title={filmDetails?.original_title}
      original_title_romanised={filmDetails?.original_title_romanised}
      movie_banner={filmDetails?.movie_banner}
      description={filmDetails?.description}
      release_date={filmDetails?.release_date}
      running_time={filmDetails?.running_time.toString()} 
      rt_score={filmDetails?.rt_score}
    />
  )
};

export default FilmDetails;
