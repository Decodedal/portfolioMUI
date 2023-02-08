
import { Box, Button, IconButton, ImageList, ImageListItem, Stack } from '@mui/material'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import index from "../imgs/super/index.jpg"
import CloseIcon from '@mui/icons-material/Close';
import Grow from '@mui/material/Grow';


const SuperHero = () =>{
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
      ];

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
    <Box position={"absolute"} width={"100%"} zIndex={10} minHeight={{xs:"180vh", md:"100vh"}} bgcolor={"white"} top={55}>
        <IconButton sx={{position:"fixed", right:"0", margin:"15px"}} onClick={() => setSize(false)}>
        <CloseIcon size="large" />
        </IconButton>
        <Stack  height="100vh" direction={{xs:"column", md:"row"}} justifyContent="center" marginTop={{xs:"5rem", md:0}} alignItems={"center"} gap={{xs:"3rem", md:"1rem"}}>
            <Box width={{xs:"100%", md:"40%"}} minHeight="50vh"  border="3px solid black" >
             {/* image display box */}
             <ImageList sx={{ width: "100%", height:"100%" }} cols={3} rowHeight={164}>
                 {itemData.map((item) => (
                   <ImageListItem key={item.img}>
                     <img
                       src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                       srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                       alt={item.title}
                       loading="lazy"
                     />
             </ImageListItem>
                 ))}
    </ImageList>
            </Box>
            <Box width={{xs:"100%", md:"40%"}} minHeight="50vh" border="3px solid black" >
                <Typography sx={{textDecoration:"underline"}} fontSize={"large"} component={"h1"} textAlign={"center"}>React superheros</Typography>
                <Stack sx={{height:"50vh"}} justifyContent="space-around" padding={3}>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore id, aliquam libero error illum laboriosam odit mollitia ipsa! Architecto explicabo culpa qui veritatis excepturi? Doloremque eligendi a fugit iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore id, aliquam libero error illum laboriosam odit mollitia ipsa! Architecto explicabo culpa qui veritatis excepturi? Doloremque eligendi a fugit iure.</Typography>
                    <Box margin={"0 auto"}>
                        <Typography sx={{textDecoration:"underline"}} fontSize={"large"}>
                            Technologies used
                        </Typography>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Chart-js-2</li>
                    </ul>
                    </Box>
                    <Button fullWidth variant="contained">Checkout the live project</Button>
                </Stack>
            </Box>
        </Stack>
    </Box >
    </Grow>
  
    </>
    );
}

export default SuperHero