export default function SuggestionList({ suggestions, renderedCards }) {
  if (suggestions.length === 0) {
    return <p>No suggestions yet. Add one above!</p>;
  }

  return (
    <section>
      <h2 className="h5">Current Suggestions</h2>
      {renderedCards}
    </section>
  );
}
