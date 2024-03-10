import { Avatar, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './Styles.module.css';

interface Props {
  id: string;
  title: string;
  director: string
  imageUrl: string
}

const FilmCard: React.FC<Props> = ({
  id,
  title,
  director,
  imageUrl
}) => {
  const { Meta } = Card;

  const navigate = useNavigate();

  const filmInitials = title?.split(" ").map((n)=>n[0]).join(".");

  return (
    <Card 
      hoverable
      onClick={() => navigate(id)}
      className={styles.filmCard}
    >
      <Meta
        avatar={
          imageUrl
          ? <Avatar src={imageUrl} />
          : <Avatar>{filmInitials}</Avatar>
        }
        title={title}
        description={director}
      />
    </Card>
  )
};

export default FilmCard;
