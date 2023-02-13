import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

const CustomizeCard = ({ image, title, description, price }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className={'grid-item'}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="222"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{height: '40px', position: 'absolute', width: '100%', justifyContent: 'center'}}>
        <div className='price'>
          {price}
        </div>
      </CardActions>
    </Card>
  )
}

export default CustomizeCard