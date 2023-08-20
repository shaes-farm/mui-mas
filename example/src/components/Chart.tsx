import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import {faker} from '@faker-js/faker';
import {LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer} from 'recharts';
import {Title} from '@shaes-farm/mui-mas';

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

let amount = 0;

const data = [
  createData('00:00', amount),
  createData('03:00', amount += faker.number.int(1000)),
  createData('06:00', amount += faker.number.int(1000)),
  createData('09:00', amount += faker.number.int(1000)),
  createData('12:00', amount += faker.number.int(1000)),
  createData('15:00', amount += faker.number.int(1000)),
  createData('18:00', amount += faker.number.int(1000)),
  createData('21:00', amount += faker.number.int(1000)),
  createData('24:00', amount += faker.number.int(1000)),
];

export const Chart = () => {
  const theme = useTheme();

  return (
    <>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
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
