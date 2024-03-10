
import Axios, { AxiosError, AxiosResponse } from 'axios';
import { Film, GenericError } from './types';

const getSingleFilm = async (filmId: string): Promise<Film[]> => {
  const url = `https://ghibliapi.vercel.app/films/${filmId}`;

  try {
    const response: AxiosResponse<Film[]> = await Axios({
      method: 'get',
      url,
    });

    return response.data;
  } catch (error) {
    const errorData: AxiosError<GenericError> = error as any;
    const errorResponse: AxiosResponse<GenericError> | undefined = errorData.response;

    throw errorResponse;
  }
};

export default getSingleFilm;

  