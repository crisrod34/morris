import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import book_review from '../../media/book_review.jpg';

export default function BookReviewGeneratorCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea onClick={props.enterBookTitle}>
          <CardMedia
            component="img"
            height="140"
            image={book_review}
            alt="an underwater astronaut watching a football game"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Book Review Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a service that can generate a book review for almost any book written before 2021. 
              All you need to do is input the title of the book and let GPT-3 do the rest!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
