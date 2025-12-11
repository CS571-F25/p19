import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SuggestionForm({ onAdd }) {
  const [idea, setIdea] = useState("");
  const [owner, setOwner] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ idea, owner: owner || "Anonymous" });
    setIdea("");
    setOwner("");
  }

  return (
    <section className="mb-4">
      <h2 className="h4">Add a Suggestion</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="suggestionIdea">
          <Form.Label>Suggestion</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            required
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="suggestionName">
          <Form.Label>Your Name (Optional)</Form.Label>
          <Form.Control
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Submit Suggestion</Button>
      </Form>
    </section>
  );
}
