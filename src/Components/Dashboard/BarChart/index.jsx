import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarLabel() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }]}
      series={[{ data: [4, 3, 5] ,label:'group1' }, { data: [1, 6, 3,4,6,7,8,],label:'group1'}, { data: [2, 5, 6,1, 6, 3,4,] ,label:'group1'},   ]}
      width={800}
      height={300}
      barLabel="value"
    />
  );
}