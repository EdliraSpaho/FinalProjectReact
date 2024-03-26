import React, { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  favoriteFilmsIds: string[]; 
}

interface Film {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const MyFavorite: React.FC<Props> = ({ favoriteFilmsIds }) => {
  const [favoriteFilms, setFavoriteFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFavoriteFilms = async () => {
      try {
        const promises = favoriteFilmsIds.map(async (filmId) => {
          const response = await axios.get<Film>(`https://ghibliapi.vercel.app/films/${filmId}`);
          return response.data;
        });
        const favoriteFilmsData = await Promise.all(promises);
        setFavoriteFilms(favoriteFilmsData.map((filmData) => ({
          id: filmData.id,
          title: filmData.title,
          imageUrl: "", 
          description: filmData.description,
        })));
      } catch (error) {
        console.error("Gabim gjatë marrjes së të dhënave të filmave të pëlqyer:", error);
      }
    };
  
    fetchFavoriteFilms();
  }, [favoriteFilmsIds]);
  

  return (
    <div>
      <h2>My Favorite Films</h2>
      <ul>
        {favoriteFilms.map((film) => (
          <li key={film.id}>
            <div>
              <h3>{film.title}</h3>
              <img src={film.imageUrl} alt={film.title} />
              <p>{film.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFavorite;

