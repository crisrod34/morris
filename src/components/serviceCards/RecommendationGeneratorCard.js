import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import slogan from '../../media/slogan.jpg';

export default function RecommendationGeneratorCard(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea onClick={props.enterRecommendation}>
          <CardMedia
            component="img"
            height="140"
            image={slogan}
            alt="a myriad of product names"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              Recommendation Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Generate a thoughtful recommendation for anything.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
