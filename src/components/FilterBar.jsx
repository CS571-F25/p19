import { Row, Col, Form } from "react-bootstrap";

export default function FilterBar({
  selectedType,
  onTypeChange,
  search,
  onSearchChange,
}) {
  return (
    <section className="mb-4">
      <Row className="g-3">
        <Col md={4}>
          <Form.Group controlId="filterType">
            <Form.Label>Filter by Type</Form.Label>
            <Form.Select
              value={selectedType}
              onChange={(e) => onTypeChange(e.target.value)}
            >
              <option value="all">All</option>
              <option value="meeting">Meeting</option>
              <option value="social">Social</option>
              <option value="deadline">Deadline</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={8}>
          <Form.Group controlId="filterSearch">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </section>
  );
}
