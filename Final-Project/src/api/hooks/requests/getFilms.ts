import Axios, {
    AxiosError,
    AxiosResponse,
  } from 'axios';
  
  import {
    Film,
    GenericError,
  } from './types';
  
  const getFilms = async (): Promise<Film[]> => {
    const url = 'https://ghibliapi.vercel.app/films';
  
    try {
      const response: AxiosResponse<Film[]> = await Axios({
        method: 'get',
        url,
      });
  
      return response.data;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorData: AxiosError<GenericError> = error as any;
      const errorResponse: AxiosResponse<GenericError> | undefined = errorData.response;
  
      throw errorResponse;
    }
  };
  
  export default getFilms;
  