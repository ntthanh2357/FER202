// src/components/Movie/MovieCard.jsx
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.css";

export default function MovieCard({ img, title, text, genre, year, country, duration }) {
  return (
    <Card className="movie-card h-100 shadow-sm">
      <Card.Img variant="top" src={img} alt={title} style={{ height: 250, objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-truncate">{text}</Card.Text>
        <div className="mb-2">
          <Badge bg="info" className="me-1 text-dark">{genre}</Badge>
          <Badge bg="secondary">{year}</Badge>
        </div>
        <small className="text-muted">{country} · {duration} min</small>
        <div className="mt-auto d-flex justify-content-between pt-2">
          <Button variant="primary" size="sm">Details</Button>
          <Button variant="outline-warning" size="sm">Add to Favourites</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
