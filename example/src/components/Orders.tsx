import * as React from 'react';
import {faker} from '@faker-js/faker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Link, Title} from '@shaes-farm/mui-mas';


interface Order {
  id: number;
  date: string;
  name: string;
  shipTo: string;
  paymentMethod: string;
  amount: number;
}

const fakeCardIssuer = () => faker.helpers.arrayElement([
  'AMEX',
  'VISA',
  'MC',
  'DISC',
]);

// Order Factory
const createOrder = (overrides: Partial<Order> = {}): Order => {
  return {
    id: faker.number.int({max: 100}),
    date: faker.date.recent().toLocaleDateString(),
    name: faker.person.fullName(),
    shipTo: `${faker.location.city()}, ${faker.location.state({abbreviated: true})}`,
    paymentMethod: `${fakeCardIssuer()} •••• ${faker.finance.accountNumber(4)}`,
    amount: faker.number.float({min: 100, max: 1000, precision: 0.01}),
    ...overrides,
  };
}

const rows: Order[] = [];

for (let id = 0; id < faker.number.int({max:10}); id++) {
  rows.push(createOrder({id}));
}

export default function Orders() {
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        href="#"
        color="primary"
        sx={{ mt: 3 }}
        onClick={(event: React.MouseEvent) => {event.preventDefault()}}
      >
        See more orders
      </Link>
    </>
  );
}
