import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="py-4">
      <h1 className="mb-3">Collaborative Calendar</h1>
      <p className="lead">
        Find shared availability, track events, and propose ideas — all in one place.
      </p>
      <Button as={Link} to="/calendar" variant="primary">
        Explore the Calendar
      </Button>
    </section>
  );
}
