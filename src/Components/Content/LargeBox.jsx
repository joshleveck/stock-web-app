import { Container, Row } from "react-bootstrap";
import "./LargeBox.css";

const LargeBox = ({ title, number, content }) => (
  <Container className="largeBox">
    <Row>
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p>{number}</p>
    </Row>
    {content}
  </Container>
);
export default LargeBox;
