import { useParams } from 'react-router-dom';
import useGetSingleFilm from '../../api/hooks/useGetSingleFilm';
import FilmDescriptions from '../FilmDescription/Presentational';


const FilmDetails = () => {

  const { filmId } = useParams();

  const {data: filmDetails} = useGetSingleFilm(filmId as string);

  return (
    <FilmDescriptions
    title={filmDetails?.[0]?.title}
    original_title={filmDetails?.[0]?.original_title}
      original_title_romanised={filmDetails?.[0]?.original_title_romanised}
      movie_banner={filmDetails?.[0]?.movie_banner}
      description={filmDetails?.[0]?.description}
      release_date={filmDetails?.[0]?.release_date}
      running_time={filmDetails?.[0]?.running_time.toString()} 
      actor={filmDetails?.[0]?.actor}
      rt_score={filmDetails?.[0]?.rt_score}
    />
  )
};

export default FilmDetails;
