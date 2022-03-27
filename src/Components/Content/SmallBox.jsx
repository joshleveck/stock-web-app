import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

import "./SmallBox.css";

const SmallBox = ({ data, title, number }) => (
  <Container className="smallBox">
    <Row>
      <LineChart
        width={150}
        height={100}
        data={data}
        style={{ marginLeft: -50, marginRight: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[150, 155]} />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
        />
      </LineChart>
      <Col>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <p>{number}</p>
      </Col>
      <Col className="pt-3" style={{ paddingLeft: "20px" }}>
        <AiOutlineArrowRight />
      </Col>
    </Row>
  </Container>
);
export default SmallBox;
