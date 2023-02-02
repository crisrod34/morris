import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import text_summary from '../../media/text_summary.jpg';

export default function SimpleSummarizationCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea onClick={props.enterLongText}>
          <CardMedia
            component="img"
            height="140"
            image={text_summary}
            alt="an underwater astronaut watching a football game"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Simple Summarization
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Take long form text and summarizes it into short, easy to understand bits.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
