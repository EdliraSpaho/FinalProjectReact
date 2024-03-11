import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './Styles.module.css';

interface Props {
  id: string;
  title: string;
  director: string;
  imageUrl: string;
}

const FilmCard: React.FC<Props> = ({
  id,
  title,
  director,
  imageUrl
  
}) => {
  const { Meta } = Card;

  const navigate = useNavigate();
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
    </Card>
  )
};

export default FilmCard;
