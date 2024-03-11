import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Styles.module.css';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
interface Props {
  id: string;
  title: string;
  director: string;
  imageUrl: string;
  onFavoriteToggle: (id: string) => void; 
}

const FilmCard: React.FC<Props> = ({
  id,
  title,
  director,
  imageUrl,
  onFavoriteToggle,
  
}) => {
  const { Meta } = Card;
  const navigate = useNavigate();
  const [isFavorite, setFavorite] = useState(false);
  const [heartIcon, setHeartIcon] = useState(<HeartOutlined />);
  
  const toggleFavorite = () => {
    setFavorite(!isFavorite);
    onFavoriteToggle(id);
    setHeartIcon(isFavorite ? <HeartOutlined /> : <HeartFilled />); 
  };

    
    
    return (
    <Card 
      hoverable
      onClick={() => navigate(id)}
      className={styles.filmCard}
      cover={<img src={imageUrl} alt="film image" />}
    >
      <Meta
        title={title}
        description={director}
      />
      <Button 
        className={styles.likeButton}
        icon={heartIcon} 
        onClick={toggleFavorite} 
      />

    </Card>
  )
};

export default FilmCard;
