// src/pages/MoviePage.jsx
import MovieCard from "../components/Movie/MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { movies } from "../data/movies";

export default function MoviePage() {
  return (
    <div>
      <h2 className="mb-3">My Movies</h2>
      <Row xs={1} md={3} className="g-4">
        {movies.map((m) => (
          <Col key={m.id}>
            <MovieCard {...m} img={m.poster} text={m.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
