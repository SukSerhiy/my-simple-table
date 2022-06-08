import * as React from 'react';
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export default function Chart({ data }) {
  return (
    <ResponsiveContainer>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
        <Bar dataKey="done" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}