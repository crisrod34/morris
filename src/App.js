import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Link, Grid } from '@mui/material';
import ProTip from './ProTip';

import Header from './components/text/Header';

import ProductNamerCard from './components/serviceCards/ProductNamerCard';
import ProductNamerService from './components/services/ProductNamerService';

import ImageGeneratorCard from './components/serviceCards/ImageGeneratorCard';
import ImageGeneratorService from './components/services/ImageGeneratorService';

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
        <Grid container spacing={{ xs:2, md:3 }} >
            <ProductNamerCard enterProductName={() => setState('enter-product-name') }/>
            <ImageGeneratorCard enterImagePrompt={() => setState('enter-image-prompt') }/>  
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

      {state == 'enter-image-prompt' &&
      <Grid container spacing={2}>
        <ImageGeneratorService />
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