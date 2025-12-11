import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function EventForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("meeting");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ title, date, type });
    setTitle("");
    setDate("");
    setType("meeting");
  }

  return (
    <section>
      <h2 className="h4">Add a New Event</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="eventTitle">
          <Form.Label>Event Title</Form.Label>
          <Form.Control
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="eventDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="eventType">
          <Form.Label>Event Type</Form.Label>
          <Form.Select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="meeting">Meeting</option>
            <option value="social">Social</option>
            <option value="deadline">Deadline</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Add Event</Button>
      </Form>
    </section>
  );
}
