import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  // Line,
  // Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    pv: 800,
  },
  {
    name: 'Page B',
    pv: 967,
  },
  {
    name: 'Page C',
    pv: 1098,
  },
  {
    name: 'Page D',
    pv: 1200,
  },
  {
    name: 'Page E',
    pv: 1108,
  },
  {
    name: 'Page F',
    pv: 680,
  },
];

export default class  Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

  render() {
    return (
      <div style={{ width: '100%',
      height: 230,
      backgroundColor:"#313860",
      borderRadius:"15px",
      padding:"15px",
       }} >
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />          
            <Legend />
            {/* <Area type="monotone"  fill="#8884d8" stroke="#8884d8" /> */}
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            {/* <Line type="monotone"  stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
