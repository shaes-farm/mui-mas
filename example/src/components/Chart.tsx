import React from 'react';
import {useTheme} from '@mui/material/styles';
import {faker} from '@faker-js/faker';
import {LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer} from 'recharts';
import {Title} from '@shaes-farm/mui-mas';

interface Sale {
  time: string;
  amount?: number;
}

// Sale Factory
const createSale = (time: string, amount?: number): Sale => {
  return { time, amount };
};

const hours = [
  '00:00',
  '03:00',
  '06:00',
  '09:00',
  '12:00',
  '15:00',
  '18:00',
  '21:00',
  '24:00',
];

let amount = 0;
const rows = hours.map((hour) => {
  const sale = createSale(hour, amount);
  amount += faker.number.int(1000);
  return sale;
});

export const Chart = () => {
  const theme = useTheme();
  const [sales] = React.useState<Sale[]>(rows);
  
  return (
    <>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={sales}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
