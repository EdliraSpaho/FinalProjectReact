import { useQuery } from '@tanstack/react-query';


import Keys from '../../requests/key';
import getSingleFilm from '../../requests/getSingleFilm';
const useGetSingleFilm = (filmId: string) =>
  useQuery({
    queryKey: [Keys.GET_SINGLE_FILM],
    queryFn: () => getSingleFilm(filmId),
  });

export default useGetSingleFilm ;
