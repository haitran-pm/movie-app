import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import PeoplePage from "./pages/PeoplePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<CategoryPage type="movies" />} />
        <Route path="shows" element={<CategoryPage type="shows" />} />
        <Route path="peoples" element={<PeoplePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="movies/:itemId" element={<DetailPage type="movie" />} />
        <Route path="shows/:itemId" element={<DetailPage type="show" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
