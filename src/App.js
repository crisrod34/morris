import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; // Grid version 1
import ProTip from './ProTip';

import Welcome from './components/text/Welcome';

import ProductNamerCard from './components/serviceCards/ProductNamerCard';
import ProductNamerService from './components/services/ProductNamerService';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Morris
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [state, setState] = React.useState('start')

  return (
    <Container maxWidth="sm">
      <Welcome />
      <Grid container spacing={2}>
        {state == 'start' && (
          <ProductNamerCard enterProductName={() => setState('enter-product-name') }/>
        )}

        {state == 'enter-product-name' &&
          <ProductNamerService />
        }
      </Grid>
      <ProTip />
      <Copyright />
    </Container>
  );
}