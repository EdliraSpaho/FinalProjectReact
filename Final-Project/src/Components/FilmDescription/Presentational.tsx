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
          <div>
            <p className={styles.detailLabel}>Title:</p>
            <p className={styles.detailValue}>{title}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Description:</p>
            <p className={styles.detailValue}>{description}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Original Title:</p>
            <p className={styles.detailValue}>{original_title}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Original Title Romanised:</p>
            <p className={styles.detailValue}>{original_title_romanised}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Director:</p>
            <p className={styles.detailValue}>{director}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Producer:</p>
            <p className={styles.detailValue}>{producer}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Release Date:</p>
            <p className={styles.detailValue}>{release_date}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Running Time:</p>
            <p className={styles.detailValue}>{running_time}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Rt Score:</p>
            <p className={styles.detailValue}>{rt_score}</p>
          </div>
          <div>
            <p className={styles.detailLabel}>Price:</p>
            <p className={styles.detailValue}>{price}</p>
          </div>
          <Button
            className={styles.bookNowButton}
            onClick={onBookNowClick}

          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilmDescriptions;
