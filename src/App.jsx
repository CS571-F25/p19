import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import HomePage from "./pages/HomePage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import SuggestionsPage from "./pages/SuggestionsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PageLayout from "./components/PageLayout.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a href="#main-content" className="visually-hidden-focusable">
        Skip to main content
      </a>

      <Navbar
        bg="light"
        expand="md"
        className="px-3 shadow-sm"
        role="navigation"
      >
        <Navbar.Brand as={Link} to="/">
          CollabCal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/calendar">
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} to="/suggestions">
              Suggestions
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/suggestions" element={<SuggestionsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </PageLayout>

      <Footer />
    </>
  );
}
