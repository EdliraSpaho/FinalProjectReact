import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBookedFilmsFromLocalStorage } from "./utils/localStorageUtils";

interface Ticket {
  id: string;
  filmId: string;
}

const MyTickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const fetchUserTickets = async () => {
    try {
      const response = await fetch("API_ENDPOINT/tickets/user");
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error("Error fetching user tickets:", error);
    }
  };

  useEffect(() => {
    fetchUserTickets();
  }, []);

  const bookedFilms = getBookedFilmsFromLocalStorage();

  return (
    <div className="my-tickets-page">
      <h2>My Tickets</h2>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <p>Ticket ID: {ticket.id}</p>
          <Link to={`/films/${ticket.filmId}`}>View Film Details</Link>
        </div>
      ))}

      {bookedFilms.map((filmId, index) => (
        <div key={index}>
          <p>Film ID: {filmId}</p>
          <Link to={`/films/${filmId}`}>View Film Details</Link>
        </div>
      ))}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MyTickets;
