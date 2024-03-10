import { useQuery } from '@tanstack/react-query';
import Keys from '../../requests/key';
import getFilms from '../../requests/getFilms';
const useGetFilms = () =>
  useQuery({
    queryKey: [Keys.GET_FILMS],
    queryFn: getFilms,
    refetchOnMount: false,
  });

export default useGetFilms;
