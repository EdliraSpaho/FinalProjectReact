import React, { useState } from "react";
import styles from "./Styles.module.css";

export interface ReservationFormData {
  fullName: string;
  email: string;
  numberOfTickets: number;
  seatSelection: number;
  paymentType: "reservation" | "purchase";
  cardNumber?: string;
  cvv?: string;
  expirationDate?: string;
}

interface FormProps {
  onSubmit: (formData: ReservationFormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: "",
    email: "",
    numberOfTickets: 1,
    seatSelection: 1,
    paymentType: "reservation",
    cardNumber: "",
    cvv: "",
    expirationDate: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { numberOfTickets, fullName, email } = formData;
    if (
      numberOfTickets < 1 ||
      numberOfTickets > 5 ||
      !fullName.trim() ||
      !email.trim()
    ) {
      alert(
        "The number of tickets is between 1 and 5."
      );
      return;
    }
    onSubmit(formData);
    setFormData({
      fullName: "",
      email: "",
      numberOfTickets: 1,
      seatSelection: 1,
      paymentType: "reservation",
      cardNumber: "",
      cvv: "",
      expirationDate: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
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
          <select
            id="seatSelection"
            name="seatSelection"
            value={formData.seatSelection}
            onChange={handleChange}
            className={styles.input}
            required
          >
            {[...Array(300)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="paymentType">Payment Type:</label>
          <select
            id="paymentType"
            name="paymentType"
            value={formData.paymentType}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="reservation">Payment at Cinema</option>
            <option value="purchase">Online Purchase</option>
          </select>
        </div>
        {formData.paymentType === "purchase" && (
          <>
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </>
        )}
        <div className={styles.formGroup}>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
