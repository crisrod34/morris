import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import randomStickers from '../../media/randomStickers.jpg';

export default function SloganGeneratorCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea onClick={props.enterSlogan}>
          <CardMedia
            component="img"
            height="140"
            image={randomStickers}
            alt="a myriad of product names"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              Slogan Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Generate a creative slogan for you service that will provoke emotion and intrigue into whomever reads it. We'll help you stand out from the competition with a slogan that is sure to catch everyone's attention.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
