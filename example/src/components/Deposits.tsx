import React from 'react';
import Typography from '@mui/material/Typography';
import {faker} from '@faker-js/faker';
import {Link, Title} from '@shaes-farm/mui-mas';

interface DepositsData {
  amount: string;
  date: Date;
}

const data = {
  amount: faker.finance.amount(1000, 10000, 2, '$'),
  date: new Date(),
};

export const Deposits = () => {
  const [deposits] = React.useState<DepositsData>(data);

  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {deposits.amount}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {deposits.date.toLocaleDateString()}
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          onClick={(event: React.MouseEvent) => event.preventDefault()}
        >
          View balance
        </Link>
      </div>
    </>
  );
}

export default Deposits;
