
export type Film = {
  imageUrl: string;
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  movie_banner: string;
  description: string;
  director: string;
  producer:string;
  release_date: string;
  running_time: string;
  actor: string;
  image: string;
  rt_score: string;
  price:string;
};

export type GenericError = {
  errors: {
    source: string;
    title: string;
  }[];
} & string;

