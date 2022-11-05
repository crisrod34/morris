import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import underwater from '../../media/underwater.png';

export default function ImageGeneratorCard(props) {
  return (
    <Grid item xs={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={props.enterImagePrompt}>
          <CardMedia
            component="img"
            height="140"
            image={underwater}
            alt="an underwater astronaut watching a football game"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Create Your Art
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This service turns your wildest dreams into beautiful images. Just enter your ideas and we'll turn it into a 
            stunning image that you can share with your friends and family.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
