import * as React from 'react';
import { 
  Box,
  Button,
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
import Mail from '@mui/icons-material/Mail';

import Footer from './components/Footer';

import ProductNamerCard from './components/serviceCards/ProductNamerCard';
import ProductNamerService from './components/services/ProductNamerService';

import ImageGeneratorCard from './components/serviceCards/ImageGeneratorCard';
import ImageGeneratorService from './components/services/ImageGeneratorService';

import SimpleSummarizationCard from './components/serviceCards/SimpleSummarizationCard';
import SimpleSummarizationService from './components/services/SimpleSummarizationService';

import SloganGeneratorCard from './components/serviceCards/SloganGeneratorCard';
import SloganGeneratorService from './components/services/SloganGeneratorService';

import BookReviewGeneratorCard from './components/serviceCards/BookReviewGeneratorCard';
import BookReviewGeneratorService from './components/services/BookReviewGeneratorService';

const theme = createTheme();

export default function App() {
  const [state, setState] = React.useState('start')

  const showServices = React.useRef(null);
  const bringBackUp = React.useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setState('start');
            }}
          >
            <HomeIcon />
          </IconButton>
          <Typography color="inherit" nowrap="true"
            sx={{ fontSize: "20px"}}>
            AI Content Generator
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="mail"
            sx={{ marginLeft: "auto" }}
            href="mailto:chrodriguez34@gmail.com">
              <Mail />
          </IconButton>
        </Toolbar>
      </AppBar>

      {state == 'start' && (
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 10,
            }}
            ref={bringBackUp}
          >
            <Container maxWidth="md" sx={{ pb:4 }}>
              <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
              >
                <Typography
                  fontSize="2.5rem"
                  align="center"
                  color="text.primary"
                  lineHeight={1}
                >
                  Use A.I. to easily create content
                </Typography>
                <Typography 
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph>
                  A.I. Content Generator is a free online platform that enables users to create content by 
                  submitting ideas so that GPT-3 can turn them into dynamic content.
                </Typography>
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => {
                    showServices.current?.scrollIntoView({ behavior: 'smooth' })
                  }}>
                    Get Started
                </Button>
              </Stack>
            </Container>
          </Box>
          <Container maxWidth="md" sx={{ pb:4 }} ref={showServices}>
            <Grid container spacing={2}>
              <Stack
                  sx={{ pt:4, px: 1 }}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                >
                <ImageGeneratorCard 
                  enterImagePrompt={() => {
                    setState('ai-image-generator');
                    bringBackUp.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  />
                <ProductNamerCard 
                  enterProductName={() => {
                    setState('product-namer');
                    bringBackUp.current?.scrollIntoView({ behavior: 'smooth' });
                  }} />
                <SimpleSummarizationCard 
                  enterLongText={() => 
                    {setState('simple-summarization');
                    bringBackUp.current?.scrollIntoView({ behavior: 'smooth' });
                  }} />
              </Stack>
              <Stack
                  sx={{ pt:4, px: 1 }}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                >
                <SloganGeneratorCard 
                  enterSlogan={() => 
                    {setState('enter-slogan-description');
                    bringBackUp.current?.scrollIntoView({ behavior: 'smooth' });
                  }} />
                <BookReviewGeneratorCard 
                  enterBookTitle={() => 
                    {setState('enter-book-title');
                    bringBackUp.current?.scrollIntoView({ behavior: 'smooth' });
                  }} />
              </Stack>
            </Grid>
          </Container>
        </main>
      )}

      {state == 'ai-image-generator' &&
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 12,
              pb: 6,
            }}
          >
            <Container maxWidth="md" sx={{ pb:4 }} >
              <Grid container spacing={2}>
                <Stack
                  direction="column"
                  spacing={2}
                  justifyContent="center"
                  maxWidth={'100%'}>
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

      {state == 'product-namer' &&
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 12,
              pb: 6,
            }}
          >
            <Container maxWidth="md" sx={{ pb:4 }}>
              <Grid container spacing={2}>
                <Stack 
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

      {state == 'simple-summarization' &&
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 12,
              pb: 6,
            }}
          >
            <Container maxWidth="md" sx={{ pb:4 }}>
              <Grid container spacing={2}>
                <Stack 
                  direction="column"
                  spacing={2}
                  justifyContent="center">
                <SimpleSummarizationService />
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

      {state == 'enter-slogan-description' &&
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 12,
              pb: 6,
            }}
          >
            <Container maxWidth="md" sx={{ pb:4 }}>
              <Grid container spacing={2}>
                <Stack 
                  direction="column"
                  spacing={2}
                  justifyContent="center">
                <SloganGeneratorService />
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

      {state == 'enter-book-title' &&
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 12,
              pb: 6,
            }}
          >
            <Container maxWidth="md" sx={{ pb:4 }}>
              <Grid container spacing={2}>
                <Stack 
                  direction="column"
                  spacing={2}
                  justifyContent="center">
                <BookReviewGeneratorService />
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
