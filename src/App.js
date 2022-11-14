import * as React from 'react';
import { 
  Box,
  Button,
  Link,
  Grid,
  IconButton,
  AppBar,
  Container,
  CssBaseline,
  Typography,
  createTheme,
  ThemeProvider,
  Toolbar,
  Stack,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import Header from './components/text/Header';
import Footer from './components/Footer';

import ProductNamerCard from './components/serviceCards/ProductNamerCard';
import ProductNamerService from './components/services/ProductNamerService';

import ImageGeneratorCard from './components/serviceCards/ImageGeneratorCard';
import ImageGeneratorService from './components/services/ImageGeneratorService';

const theme = createTheme();

export default function App() {
  const [state, setState] = React.useState('start')

  const ref = React.useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" nowrap>
            Morris Content Platform
          </Typography>
        </Toolbar>
      </AppBar>

      {state == 'start' && (
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 4,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                From ideas to content
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" parahraph>
                If you need help generating engaging content, try our dynamic content creation tools! Just enter
                a few keywords or descriptions for your use case, and our tools will provide you with fresh, creative
                content ideas for you to use.
              </Typography>
              <Stack
                sx={{ pt:4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button 
                  variant="contained" 
                  onClick={() => {
                    ref.current?.scrollIntoView({ behavior: 'smooth' })
                  }}>
                    Get Started
                </Button>
              </Stack>
            </Container>
          </Box>
          <Container maxWidth="md" sx={{ pb:4 }}>
            <Grid container spacing={2}>
              <Stack
                  sx={{ pt:4, px: 1 }}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                  ref={ref}
                >
                <ImageGeneratorCard enterImagePrompt={() => setState('enter-image-prompt') }/>  
                <ProductNamerCard enterProductName={() => setState('enter-product-name') }/>
              </Stack>
            </Grid>
          </Container>
        </main>
      )}

      {state == 'enter-image-prompt' &&
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 4,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Grid container spacing={2}>
                <Stack 
                  sx={{ pt:2 }}
                  direction="column"
                  spacing={2}
                  justifyContent="center">
                  <ImageGeneratorService />
                  <Button 
                        variant="contained"
                        justifyContent="flex-end"
                        onClick={() => {
                          setState('start');
                        }}
                        >
                        Back</Button>
                </Stack>
              </Grid>
            </Container>
          </Box>
        </main>
      }

      {state == 'enter-product-name' &&
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 4,
              pb: 6,
            }}
          >
            <Container maxWidth="sm" >
              <Grid container>
                <Stack 
                  sx={{ pt:2 }}
                  direction="column"
                  spacing={2}
                  justifyContent="center">
                <ProductNamerService />
                <Button 
                      variant="contained"
                      justifyContent="flex-end"
                      onClick={() => {
                        setState('start');
                      }}
                      >
                      Back</Button>
                </Stack>
              </Grid>
            </Container>
          </Box>
        </main>
      }
      
      <Footer />
    </ThemeProvider>
  );
}