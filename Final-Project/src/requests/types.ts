
export type Film = {
    id: string;
    title: string;
    original_title: string;
    original_title_romanised: string;
    movie_banner: string;
    description: string;
    director: string;
    release_date: string;
    running_time: boolean;
    actor: string;
    image: string;
    rt_score:string;
  };
  
  export type GenericError = {
    errors: {
      source: string;
      title: string;
    }[];
  } & string;
  
  