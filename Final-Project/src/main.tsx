import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FilmsRegistry from "./pages/FilmsRegistry";
import FilmDetails from "./pages/FilmDetails";

import App from "./App";
import MyTickets from "./pages/MyTickets";
import MyFavorite from "./pages/MyFavorite";
const queryClient = new QueryClient();

// Ndryshime në konfiguracionin e router-it
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "films",
        element: <FilmsRegistry />,
      },
      {
        path: "films/:filmId",
        element: <FilmDetails />,
      },
      {
        path: "myfavorite",
        element: <MyFavorite favoriteFilmsIds={[]} />,
      },
      {
        path: "films",
        element: <MyTickets />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
