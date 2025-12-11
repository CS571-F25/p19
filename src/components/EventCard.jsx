import { Card, Button, Badge } from "react-bootstrap";

export default function EventCard({ event, onToggleFavorite }) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {event.title}
          {event.isFavorite && (
            <Badge bg="warning" text="dark">★ Favorite</Badge>
          )}
        </Card.Title>

        <Card.Text>
          <strong>Date:</strong> {event.date}<br />
          <strong>Type:</strong> {event.type}
        </Card.Text>

        <Button
          variant={event.isFavorite ? "outline-secondary" : "outline-primary"}
          onClick={() => onToggleFavorite(event.id)}
        >
          {event.isFavorite ? "Unfavorite" : "Mark Favorite"}
        </Button>
      </Card.Body>
    </Card>
  );
}
