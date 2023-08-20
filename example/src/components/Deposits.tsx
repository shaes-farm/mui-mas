import React from 'react';
import Typography from '@mui/material/Typography';
import {faker} from '@faker-js/faker';
import {Link, Title} from '@shaes-farm/mui-mas';

const amount = faker.finance.amount(1000, 10000, 2, '$');
const date = faker.date.recent({days: 30});

export const Deposits = () => (
  <>
    <Title>Recent Deposits</Title>
    <Typography component="p" variant="h4">
      {amount}
    </Typography>
    <Typography color="text.secondary" sx={{ flex: 1 }}>
      on {date.toLocaleDateString()}
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

export default Deposits;
