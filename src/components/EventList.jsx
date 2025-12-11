export default function EventList({ title, children }) {
  if (!children || children.length === 0) return null;

  return (
    <section className="mt-4">
      <h2 className="h5">{title}</h2>
      {children}
    </section>
  );
}
