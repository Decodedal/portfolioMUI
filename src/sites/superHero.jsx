
import { Box, IconButton } from '@mui/material'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import index from "../imgs/super/index.jpg"
import { ExitToAppRounded } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Grow from '@mui/material/Grow';

const SuperHero = () =>{

    const [size, setSize] = useState(false)

    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => setSize(true)}>
          <CardMedia
            component="img"
            height="140"
            image={index}
            alt="green iguana"
            sx={{objectFit:"Cover"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Superhero Showcase
            </Typography>
            <Typography variant="body2" color="text.secondary">
             integrates data from superhero api and chart js to build a index of superheros and villains.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Grow
        in={size}
        {...(size ? { timeout: 1000 } : {})}
      >
    <Box position={"fixed"} width={"100%"} zIndex={10} minHeight="100vh" bgcolor={"red"} top={62} border={"10px solid yellow"}>
        <Box zIndex={11}>Hello</Box>
        <IconButton onClick={() => setSize(false)}>
        <CloseIcon/>
        </IconButton>
    </Box>
    </Grow>
  
    </>
    );
}

export default SuperHero