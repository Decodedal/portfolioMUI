import { Box } from "@mui/material"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from "../imgs/what the chef/logo.jpg"

const whatTheChef = () =>{
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {logo}
            alt="green iguana"
            sx={{objectFit:"contain"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Recipe App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              S.E.R.N stack CRUD app for shairing recipes with your friends 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default whatTheChef