import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { portfolioData } from "../../constants";
import "./Hero.css";

const Hero = () => (
  <div className="hero">
    <h2 style={{ fontSize: "2em" }}>Portfolio</h2>
    <LineChart
      width={1200}
      height={300}
      data={portfolioData}
      style={{ marginLeft: -35, marginRight: 30 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={[1000, 1005]} />
      <Tooltip />
      <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  </div>
);

export default Hero;
