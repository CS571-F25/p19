import { Card, Button, Badge } from "react-bootstrap";

export default function SuggestionCard({ suggestion, onRsvpYes, onRsvpNo }) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {suggestion.idea}
          <Badge bg="secondary">{suggestion.owner}</Badge>
        </Card.Title>

        <Card.Text>
          <strong>RSVPs:</strong> ✓ {suggestion.yesCount} — ✗ {suggestion.noCount}
        </Card.Text>

        <div className="d-flex gap-2">
          <Button size="sm" variant="outline-success" onClick={() => onRsvpYes(suggestion.id)}>
            RSVP ✓
          </Button>
          <Button size="sm" variant="outline-danger" onClick={() => onRsvpNo(suggestion.id)}>
            RSVP ✗
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
