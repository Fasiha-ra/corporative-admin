import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 5, label: 'series A' },
            { id: 1, value: 20, label: 'series B' },
            
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}