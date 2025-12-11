import { Container } from "react-bootstrap";

export default function PageLayout({ children }) {
  return (
    <main id="main-content" className="py-4 mt-3">
      <Container>{children}</Container>
    </main>
  );
}
