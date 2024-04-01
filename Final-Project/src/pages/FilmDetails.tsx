import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import useGetSingleFilm from "../api/hooks/useGetSingleFilm";
import { Modal } from "antd";
import Form, { ReservationFormData } from "../Components/Form/Form";
import FilmDescriptions from "../Components/FilmDescription/Presentational";
import { saveBookedFilmsToLocalStorage } from "./utils/localStorageUtils";


const FilmDetails: React.FC = () => {
  const { filmId } = useParams<{ filmId?: string }>();
  const safeFilmId = filmId || ""; 

  const { data: filmDetails } = useGetSingleFilm(safeFilmId);
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (formData: ReservationFormData) => {
    console.log("Form submitted!", formData);
    
    try {
      const response = await fetch("API_ENDPOINT/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filmId: safeFilmId,
          ...formData,
        }),
      });
      if (response.ok) {
        console.log("Ticket successfully booked!");
        saveBookedFilmsToLocalStorage([safeFilmId]); 
      } else {
        console.error("Failed to book ticket:", response.statusText);
      }
    } catch (error) {
      console.error("Error booking ticket:", error);
    }
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
