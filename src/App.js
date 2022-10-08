import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; // Grid version 1
import ProTip from './ProTip';

import Welcome from './components/text/Welcome';

import ProductNamerCard from './components/serviceCards/ProductNamerCard';
import ProductNamer from './components/services/ProductNamer';

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
        <Grid item xs={6}>
          {state == 'start' && (
            <ProductNamerCard enterProductName={() => setState('enter-product-name') }/>
          )}

          {state == 'enter-product-name' &&
            <ProductNamer />
          }
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }}>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}