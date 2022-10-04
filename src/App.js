import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; // Grid version 1
import ProTip from './ProTip';

import ProductNamer from './components/serviceCards/ProductNamer';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Morris.
        </Typography>
        <Typography variant="h4" component="h2">
          Create with just a few words.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ProductNamer />
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }}>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}