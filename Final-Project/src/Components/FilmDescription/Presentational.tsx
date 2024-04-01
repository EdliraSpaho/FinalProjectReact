import React from "react";
import styles from "./Styles.module.css";
import { Button } from "antd";

interface Props {
  title?: string;
  original_title?: string;
  original_title_romanised?: string;
  image?: string;
  director?: string;
  producer?: string;
  description?: string;
  release_date?: string;
  running_time?: string;
  rt_score?: string;
  price?: string;
  onBookNowClick: () => void;
}

const FilmDescriptions: React.FC<Props> = ({
  title,
  description,
  original_title,
  original_title_romanised,
  image,
  producer,
  director,
  release_date,
  running_time,
  rt_score,
  price,
  onBookNowClick,
}) => {
  return (
    <div className={styles.filmDescriptionContainer}>
      <div className={styles.filmImageContainer}>
        <img src={image} className={styles.filmImage} alt="Film" />
      </div>
      <div className={styles.filmTextContainer}>
        <div className={styles.filmDetailsContainer}>
          <h2 className={styles.filmDetailsTitle}>Film Details</h2>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Title:</span>
            <span className={styles.detailValue}>{title}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Description:</span>
            <span className={styles.detailValue}>{description}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Original Title:</span>
            <span className={styles.detailValue}>{original_title}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Original Title Romanised:</span>
            <span className={styles.detailValue}>{original_title_romanised}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Director:</span>
            <span className={styles.detailValue}>{director}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Producer:</span>
            <span className={styles.detailValue}>{producer}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Release Date:</span>
            <span className={styles.detailValue}>{release_date}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Running Time:</span>
            <span className={styles.detailValue}>{running_time}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Rt Score:</span>
            <span className={styles.detailValue}>{rt_score}</span>
          </div>
          <div className={styles.detailContainer}>
            <span className={styles.detailLabel}>Price:</span>
            <span className={styles.detailValue}>{price}</span>
          </div>
          <Button className={styles.bookNowButton} onClick={onBookNowClick}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilmDescriptions;
