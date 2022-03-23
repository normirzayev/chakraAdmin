import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 10000,
    pv: 2000,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 3500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jul',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 4500,
    pv: 200,
    amt: 2181,
  },
  {
    name: 'Sep',
    uv: 3500,
    pv: 2500,
    amt: 2500,
  },
  {
    name: 'Oct',
    uv: 2500,
    pv: 9800,
    amt: 2290,
  },
  {
    name:'No',
    uv: 3500,
    pv: 3908,
    amt: 1000,
  },
  {
    name: 'De',
    uv: 8090,
    pv: 4000,
    amt: 2181,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <div style={{ width: '100%    ', height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 40,
                right: 0,
                left: 0,
                bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#4FD1C5" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#151928" />
            </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
