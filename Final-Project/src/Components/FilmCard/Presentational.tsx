import React, { useState } from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Styles.module.css";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { saveFavoriteFilmsToLocalStorage } from "../../pages/utils/localStorageUtils";

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  isFavorite: boolean;
  onFavoriteToggle: (id: string) => void;
}

const FilmCard: React.FC<Props & { favoriteFilms: string[] }> = ({
  id,
  title,
  imageUrl,
  isFavorite,
  onFavoriteToggle,
  favoriteFilms = [],
}) => {
  const [liked, setLiked] = useState<boolean>(isFavorite);
  const navigate = useNavigate();

  const handleLikeToggle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setLiked(!liked);
    onFavoriteToggle(id);
    const updatedFavoriteFilms = liked
      ? favoriteFilms.filter((filmId) => filmId !== id)
      : [...favoriteFilms, id];
    saveFavoriteFilmsToLocalStorage(updatedFavoriteFilms);
  };

  const handleCardClick = () => {
    navigate(`/films/${id}`);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardLink} onClick={handleCardClick}>
        <Card
          hoverable
          className={styles.filmCard}
          cover={<img src={imageUrl} alt={title} />}
        >
          <div className={styles.cardContent}>
            <div className={styles.title}>{title}</div>
            <button
              className={`${styles.likeButton} ${liked ? styles.active : ""}`}
              onClick={(e) => handleLikeToggle(e)}
            >
              {liked ? <HeartFilled /> : <HeartOutlined />}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FilmCard;
