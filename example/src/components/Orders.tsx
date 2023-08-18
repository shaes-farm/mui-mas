import * as React from 'react';
import {faker} from '@faker-js/faker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Link, Title} from '@shaes-farm/mui-mas';

const getCardIssuer = () => faker.helpers.arrayElement([
  'AMEX',
  'VISA',
  'MC',
  'DISC',
]);

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    faker.date.recent().toLocaleDateString(),
    faker.person.fullName(),
    `${faker.location.city()}, ${faker.location.state({abbreviated: true})}`,
    `${getCardIssuer()} •••• ${faker.finance.accountNumber(4)}`,
    faker.number.float({min: 100, max: 1000, precision: 0.01}),
  ),
  createData(
    1,
    faker.date.recent().toLocaleDateString(),
    faker.person.fullName(),
    `${faker.location.city()}, ${faker.location.state({abbreviated: true})}`,
    `${getCardIssuer()} •••• ${faker.finance.accountNumber(4)}`,
    faker.number.float({min: 100, max: 1000, precision: 0.01}),
  ),
  createData(
    2,
    faker.date.recent().toLocaleDateString(),
    faker.person.fullName(),
    `${faker.location.city()}, ${faker.location.state({abbreviated: true})}`,
    `${getCardIssuer()} •••• ${faker.finance.accountNumber(4)}`,
    faker.number.float({min: 100, max: 1000, precision: 0.01}),
  ),
  createData(
    3,
    faker.date.recent().toLocaleDateString(),
    faker.person.fullName(),
    `${faker.location.city()}, ${faker.location.state({abbreviated: true})}`,
    `${getCardIssuer()} •••• ${faker.finance.accountNumber(4)}`,
    faker.number.float({min: 100, max: 1000, precision: 0.01}),
  ),
  createData(
    4,
    faker.date.recent().toLocaleDateString(),
    faker.person.fullName(),
    `${faker.location.city()}, ${faker.location.state({abbreviated: true})}`,
    `${getCardIssuer()} •••• ${faker.finance.accountNumber(4)}`,
    faker.number.float({min: 100, max: 1000, precision: 0.01}),
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
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
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
