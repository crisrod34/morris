import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import randomStickers from '../../media/randomStickers.jpg';

export default function ProductNamerCard(props) {
  return (
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={props.enterProductName}>
          <CardMedia
            component="img"
            height="140"
            image={randomStickers}
            alt="a myriad of product names"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name Your Product
            </Typography>
            <Typography variant="body2" color="text.secondary">
              If you're looking for a creative name for your new product, look no further than our naming service. We'll help you come up with a name that's both unique and catchy, so your product will stand out from the rest.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
