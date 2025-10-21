// src/pages/HomePage.jsx
import React, { useState } from "react";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import Filter from "../components/Filter/Filter";
import MovieCard from "../components/Movie/MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { movies } from "../data/movies";

export default function HomePage() {
  const [filtered, setFiltered] = useState(movies);

  const handleSearch = (term) => {
    setFiltered(
      movies.filter((m) =>
        [m.title, m.description].some((f) =>
          f.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  };

  const handleFilter = (val) => {
    if (val === "all") return setFiltered(movies);
    if (val === "<=2000") setFiltered(movies.filter((m) => m.year <= 2000));
    else if (val === "2001-2015") setFiltered(movies.filter((m) => m.year >= 2001 && m.year <= 2015));
    else setFiltered(movies.filter((m) => m.year > 2015));
  };

  const handleSort = (type) => {
    const arr = [...filtered];
    switch (type) {
      case "year-asc": arr.sort((a, b) => a.year - b.year); break;
      case "year-desc": arr.sort((a, b) => b.year - a.year); break;
      case "title-asc": arr.sort((a, b) => a.title.localeCompare(b.title)); break;
      case "title-desc": arr.sort((a, b) => b.title.localeCompare(a.title)); break;
      case "duration-asc": arr.sort((a, b) => a.duration - b.duration); break;
      case "duration-desc": arr.sort((a, b) => b.duration - a.duration); break;
      default: break;
    }
    setFiltered(arr);
  };

  return (
    <div>
      <HomeCarousel />
      <Filter onSearch={handleSearch} onFilter={handleFilter} onSort={handleSort} />
      <Row xs={1} md={3} className="g-4">
        {filtered.map((movie) => (
          <Col key={movie.id}>
            <MovieCard {...movie} img={movie.poster} text={movie.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
