import React from "react";
import { Descriptions } from "antd";
import styles from "./Styles.module.css";
import { Button } from "antd/es/radio";
interface Props {
  title?: string;
  original_title?: string;
  original_title_romanised?: string;
  movie_banner?: string;
  description?: string;
  release_date?: string;
  running_time?: string;
  rt_score?: string;
  image?: string;
}

const FilmDescriptions: React.FC<Props> = ({
  title,
  original_title,
  original_title_romanised,
  movie_banner,
  description,
  release_date,
  running_time,
  rt_score,
}) => {
  const handleBookNow = () => {
  
    console.log("Booking now...");
  };

  return (
    <Descriptions
      className={styles.filmDetails}
      title="Film Details"
      bordered
      column={1}
    >
<Descriptions.Item label="Movie Banner">
  <img src={movie_banner} className={`${styles.smallImage} ${styles.image}`} alt="Film" />
</Descriptions.Item>
      <Descriptions.Item label="Title">{title}</Descriptions.Item>
      <Descriptions.Item label="Original Title">
        {original_title}
      </Descriptions.Item>
      <Descriptions.Item label="Original Title Romanised">
        {original_title_romanised}
      </Descriptions.Item>
      <Descriptions.Item label="Description">{description}</Descriptions.Item>
      <Descriptions.Item label="Release Date">{release_date}</Descriptions.Item>
      <Descriptions.Item label="Running Time">{running_time}</Descriptions.Item>
      <Descriptions.Item label="Rt Score">{rt_score}</Descriptions.Item>
      <Descriptions.Item label="Book Now">
        <Button type="primary" onClick={handleBookNow}>
          Book Now
        </Button>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default FilmDescriptions;
