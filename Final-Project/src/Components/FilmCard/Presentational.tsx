import React, { useState } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import LikeButton from "../LikeButton/LikeButton";

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  isFavorite: boolean;
  onFavoriteToggle: (id: string) => void;
}

const FilmCard: React.FC<Props> = ({ id, title, imageUrl, isFavorite, onFavoriteToggle }) => {
  const { Meta } = Card;
  const [liked, setLiked] = useState<boolean>(isFavorite);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation(); 
  };

  const handleLikeToggle = () => {
    setLiked(!liked);
    onFavoriteToggle(id);
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <Link to={`/films/${id}`} className={styles.cardLink}>
        <Card hoverable className={styles.filmCard} cover={<img src={imageUrl} alt={title} />}>
          <Meta title={title} />
        </Card>
      </Link>
      <div className={styles.likeButtonContainer}>
        <LikeButton isLiked={liked} onClick={handleLikeToggle} />
      </div>
    </div>
  );
};

export default FilmCard;
