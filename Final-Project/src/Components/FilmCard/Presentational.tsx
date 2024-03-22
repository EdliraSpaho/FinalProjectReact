import React, { useState } from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styles from "./Styles.module.css";

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  onFavoriteToggle: (id: string) => void;
}

const FilmCard: React.FC<Props> = ({
  id,
  title,
  imageUrl,
  onFavoriteToggle,
}) => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!isFavorite);
    onFavoriteToggle(id);
  };

  const handleCardClick = () => {
    navigate(`/films/${id}`, { state: { imageUrl } });
  };

  return (
    <div className={styles.cardContainer}>
      <Card
        hoverable
        onClick={handleCardClick}
        className={styles.filmCard}
        cover={<img src={imageUrl} alt={title} />}
      >
        <Meta title={title} />
        <div className={styles.likeButtonContainer}>
          <Button
            className={styles.likeButton}
            icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
            onClick={toggleFavorite}
          />
        </div>
      </Card>
    </div>
  );
};

export default FilmCard;
