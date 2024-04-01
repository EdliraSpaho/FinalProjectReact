import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import FilmsRegistry from "./pages/FilmsRegistry";
import FilmDetails from "./pages/FilmDetails";
import MyTickets from "./pages/MyTickets";
import MyFavorite from "./pages/MyFavorite";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<FilmsRegistry />} />
            <Route path="films" element={<FilmsRegistry />} />
            <Route path="films/:filmId" element={<FilmDetails />} />
            <Route path="/myfavorite" element={<MyFavorite />} />
            <Route path="mytickets" element={<MyTickets />} />
          </Route>
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
