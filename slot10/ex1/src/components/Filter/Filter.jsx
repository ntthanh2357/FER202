// src/components/Filter/Filter.jsx
import { Card, Form, Row, Col } from "react-bootstrap";

export default function Filter({ onSearch, onFilter, onSort }) {
  return (
    <Card className="mb-4 p-3">
      <h5>🎬 Movie Filter</h5>
      <Row className="g-3">
        <Col md={4}>
          <Form.Control type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
        </Col>
        <Col md={4}>
          <Form.Select onChange={(e) => onFilter(e.target.value)}>
            <option value="all">All Years</option>
            <option value="<=2000">≤ 2000</option>
            <option value="2001-2015">2001–2015</option>
            <option value=">2015"> 2015</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select onChange={(e) => onSort(e.target.value)}>
            <option value="none">No Sorting</option>
            <option value="year-asc">Year ↑</option>
            <option value="year-desc">Year ↓</option>
            <option value="title-asc">Title A→Z</option>
            <option value="title-desc">Title Z→A</option>
            <option value="duration-asc">Duration ↑</option>
            <option value="duration-desc">Duration ↓</option>
          </Form.Select>
        </Col>
      </Row>
    </Card>
  );
}
