import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetSingleFilm from "../api/hooks/useGetSingleFilm";
import { Modal, Button } from "antd";
import Form, { ReservationFormData } from "../Components/Form/Form";
import FilmDescriptions from "../Components/FilmDescription/Presentational";

const FilmDetails: React.FC = () => {
  const { filmId } = useParams<{ filmId?: string }>();
  const { data: filmDetails } = useGetSingleFilm(filmId || "");

  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData: ReservationFormData) => {
    console.log("Form submitted!", formData);
    setShowForm(false);
  };

  const price = "700 All";

  return (
    <div style={{ textAlign: "center" }}>
      <FilmDescriptions
        title={filmDetails?.title}
        description={filmDetails?.description}
        original_title={filmDetails?.original_title}
        original_title_romanised={filmDetails?.original_title_romanised}
        image={filmDetails?.image}
        director={filmDetails?.director}
        producer={filmDetails?.producer}
        release_date={filmDetails?.release_date}
        running_time={filmDetails?.running_time?.toString()}
        rt_score={filmDetails?.rt_score}
        price={price}
        onBookNowClick={handleBookNowClick}
      />
      <Button
        onClick={handleBookNowClick}
        style={{
          marginTop: "10px",
          backgroundColor: "black",
          color: "white",
          borderColor: "black",
        }}
      >
        Book Now
      </Button>
      <Modal
        title="Book Now"
        visible={showForm}
        onCancel={() => setShowForm(false)}
        footer={null}
      >
        <Form onSubmit={handleFormSubmit} />
      </Modal>
    </div>
  );
};

export default FilmDetails;
