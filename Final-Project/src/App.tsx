import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ListOfFilms from "./Components/ListOfFilms/Presentational";
import FilmDetails from "./pages/FilmDetails";
import MyFavorite from "./pages/MyFavorite"; 
import MyTickets from "./pages/MyTickets";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<ListOfFilms searchQuery={searchQuery} favoriteFilms={[]} />} />
        <Route path="/films/:filmId" element={<FilmDetails />} />
        <Route path="/myfavorite" element={<MyFavorite />} /> 
        <Route path="/mytickets" element={<MyTickets />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;