import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5], label:"data"
        },
         {
          data: [3, 6.5, 3, 9.5, 2.5, 6], label:"data 1"
        },
         {
          data: [4, 7.5, 2, 4.5, 3.5, 8], label:"data 2"
        },
      ]}
      width={500}
      height={300}
    />
  );
}