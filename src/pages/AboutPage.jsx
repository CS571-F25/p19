export default function AboutPage() {
  return (
    <article>
      <h1>About CollabCal</h1>

      <section className="mt-4">
        <h2>Project Overview</h2>
        <p>
          CollabCal is a collaborative scheduling tool built for CS571 at 
          UW–Madison. It helps small student groups coordinate events, share 
          availability, and log suggestions.
        </p>
      </section>

      <section className="mt-4">
        <h2>Design Decisions</h2>
        <p>
          I used React, React Router, and React Bootstrap to keep the 
          layout clean and responsive. Cards, forms, and filters help 
          users quickly understand and interact with upcoming events.
        </p>
      </section>

      <section className="mt-4">
        <h2>Accessibility</h2>
        <p>
          All form inputs include labels, headings follow a logical 
          hierarchy, and a skip-to-content link improves keyboard navigation. 
          Buttons and colors follow WCAG-friendly defaults via Bootstrap.
        </p>
      </section>

      <section className="mt-4">
        <h2>Credits</h2>
        <p>
          Built by <strong>Batool Nafid</strong> for CS571: Building User 
          Interfaces.
        </p>
      </section>
    </article>
  );
}
