import { useState } from "react";
import SuggestionForm from "../components/SuggestionForm.jsx";
import SuggestionCard from "../components/SuggestionCard.jsx";
import SuggestionList from "../components/SuggestionList.jsx";

let nextSuggestionId = 1;

export default function SuggestionsPage() {
  const [suggestions, setSuggestions] = useState([]);

  function handleAdd({ idea, owner }) {
    setSuggestions((prev) => [
      ...prev,
      { id: nextSuggestionId++, idea, owner, yesCount: 0, noCount: 0 },
    ]);
  }

  function handleRsvpYes(id) {
    setSuggestions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, yesCount: s.yesCount + 1 } : s
      )
    );
  }

  function handleRsvpNo(id) {
    setSuggestions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, noCount: s.noCount + 1 } : s
      )
    );
  }

  const renderedCards = suggestions.map((s) => (
    <SuggestionCard
      key={s.id}
      suggestion={s}
      onRsvpYes={handleRsvpYes}
      onRsvpNo={handleRsvpNo}
    />
  ));

  return (
    <>
      <h1>Suggestions</h1>
      <p className="text-muted">
        Propose ideas and let your group RSVP with ✓ or ✗.
      </p>

      <SuggestionForm onAdd={handleAdd} />

      <SuggestionList suggestions={suggestions} renderedCards={renderedCards} />
    </>
  );
}
