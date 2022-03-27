import { Col, Row } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

import { aaplData } from "../../constants";

const TickerInfo = ({ ticker }) => {
  return (
    <Row style={{ paddingTop: "20px" }}>
      <LineChart
        width={300}
        height={150}
        data={aaplData}
        style={{ marginLeft: -35, marginRight: 30 }}
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
        <h2 style={{ margin: 0 }}>{ticker}</h2>
        <p>${aaplData[0].price}</p>
      </Col>
    </Row>
  );
};
export default TickerInfo;
