import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ListOfFilms from "./Components/ListOfFilms/Presentational";
import FilmDetails from "./pages/FilmDetails";
import MyFavorite from "./pages/MyFavorite";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<ListOfFilms searchQuery={searchQuery} />} />
        <Route path="/films/:filmId" element={<FilmDetails />} />
        <Route path="/myfavorite" element={<MyFavorite />} /> {}
        {}
        <Route path="*" element={<Navigate to="/" />} /> {}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
