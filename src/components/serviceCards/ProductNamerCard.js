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
              This tool helps you find a fun, appealing, and relevant name for any product.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
