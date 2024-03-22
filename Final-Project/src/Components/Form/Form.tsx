import React, { useState } from "react";
import { ButtonHTMLAttributes } from "react";
import styles from "./Styles.module.css";

export interface ReservationFormData {
  firstName: string;
  lastName: string;
  email: string;
  numberOfTickets: number;
  seatSelection: string;
}

interface FormProps {
  onSubmit: (formData: ReservationFormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    numberOfTickets: 1,
    seatSelection: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            min={1}
            max={5}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="seatSelection">Seat Selection:</label>
          <input
            type="text"
            id="seatSelection"
            name="seatSelection"
            value={formData.seatSelection}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>  
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
