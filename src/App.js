import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; // Grid version 1
import ProTip from './ProTip';

import Header from './components/text/Header';

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
      <Header />

      {state == 'start' && (
        <Grid container spacing={2}>
          <ProductNamerCard enterProductName={() => setState('enter-product-name') }/>
          <ProductNamerCard enterProductName={() => setState('enter-product-name') }/>
        </Grid>
      )}

      {state == 'enter-product-name' &&
      <Grid container spacing={2}>
        <ProductNamerService />
        <Button 
              variant="contained"
              justifyContent="flex-end"
              onClick={() => {
                  setState('start');
              }}
          >
              Back</Button>
      </Grid>
      }
      
      <ProTip />
      <Copyright />
    </Container>
  );
}