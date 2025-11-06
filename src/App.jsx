import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Home() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Collaborative Calendar</h1>
      <p>
        Share weekly schedules, find common free time, and RSVP to suggestions — all in one place.
      </p>
    </Container>
  );
}

function Calendar() {
  return (
    <Container className="py-4">
      <h2>Group Calendar</h2>
      <p>📅 Placeholder for your shared calendar view.</p>
    </Container>
  );
}

function Suggestions() {
  return (
    <Container className="py-4">
      <h2>Suggestions Box</h2>
      <p>
        Add event ideas here and let others RSVP ✓ or decline ✗.
      </p>
    </Container>
  );
}

function About() {
  return (
    <Container className="py-4">
      <h2>About</h2>
      <p>
        Built for CS571: Building User Interfaces at UW–Madison. Created by <strong>Batool Nafid</strong>.
      </p>
    </Container>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Navbar bg="light" expand="md" className="px-3 shadow-sm">
        <Navbar.Brand as={Link} to="/">CollabCal</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
            <Nav.Link as={Link} to="/suggestions">Suggestions</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
