import { useState, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import EventForm from "../components/EventForm.jsx";
import EventCard from "../components/EventCard.jsx";
import EventList from "../components/EventList.jsx";
import EmptyState from "../components/EmptyState.jsx";
import FilterBar from "../components/FilterBar.jsx";

let nextEventId = 1;

export default function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [search, setSearch] = useState("");

  function handleAddEvent({ title, date, type }) {
    setEvents((prev) => [
      ...prev,
      { id: nextEventId++, title, date, type, isFavorite: false },
    ]);
  }

  function handleToggleFavorite(id) {
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === id ? { ...ev, isFavorite: !ev.isFavorite } : ev
      )
    );
  }

  const filtered = useMemo(() => {
    return events.filter((ev) => {
      const matchesType =
        selectedType === "all" ? true : ev.type === selectedType;
      const matchesSearch = ev.title.toLowerCase().includes(search.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [events, selectedType, search]);

  const favorites = filtered.filter((ev) => ev.isFavorite);
  const others = filtered.filter((ev) => !ev.isFavorite);

  const favoriteCards = favorites.map((ev) => (
    <EventCard key={ev.id} event={ev} onToggleFavorite={handleToggleFavorite} />
  ));

  const otherCards = others.map((ev) => (
    <EventCard key={ev.id} event={ev} onToggleFavorite={handleToggleFavorite} />
  ));

  return (
    <>
      <h1>Group Calendar</h1>
      <p className="text-muted">
        Add events, filter by type, and mark important items as favorites.
      </p>

      <FilterBar
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        search={search}
        onSearchChange={setSearch}
      />

      <Row>
        <Col md={5}>
          <EventForm onAdd={handleAddEvent} />
        </Col>
        <Col md={7}>
          {events.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <EventList title="Favorite Events">{favoriteCards}</EventList>
              <EventList title="All Events">{otherCards}</EventList>
            </>
          )}
        </Col>
      </Row>
    </>
  );
}
