
import { Box, Button, IconButton, Paper, Stack } from '@mui/material'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import index from "../imgs/super/index.jpg"
import CloseIcon from '@mui/icons-material/Close';
import Grow from '@mui/material/Grow';
import kidFlash from "../imgs/super/show.jpg"

const SuperHero = () =>{
    

    const [size, setSize] = useState(false)

    return(
        <>
      <a href="#aboutMe"><Card sx={{minWidth:{xs:"90%", md:"30%"}, minHeight:{xs:"30%", md:"100%"}}}>
        <CardActionArea onClick={() => setSize(true)}>
          <CardMedia
            component="img"
            height="300"
            image={index}
            alt="green iguana"
            sx={{objectFit:"cover"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Superhero Showcase
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A flashy website for users to learn about their favorite super-powered characters.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </a> 
      <Grow
        in={size}
        {...(size ? { timeout: 1000 } : {})}
      >
    <Box onClick={()=>setSize(false)} position={"absolute"} width={"100%"} zIndex={10} minHeight={{xs:"235vh", md:"150vh"}} bgcolor="background.default" top={55}>
        <IconButton sx={{position:"fixed", right:"0", margin:"15px"}} onClick={() => setSize(false)}>
        <CloseIcon size="large" />
        </IconButton>
        <Stack  height="100vh" direction={{xs:"column", md:"row"}} justifyContent="center" marginTop={{xs:"5rem", md:0}} alignItems={"center"} gap='1rem'>
            <Box width={{xs:"100%", md:"50%"}} minHeight="50vh">
             {/* image display box */}
             <img style={{width:"100%", borderRadius:"10px", objectFit:"cover" , boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}  src={kidFlash} alt="single super hero page for kid flash"/>
            </Box>
            <Paper sx={{width:{xs:"100%", md:"40%"}}} minHeight="70vh" boxShadow={4}  margin={2}>
                <Typography sx={{textDecoration:"underline"}} fontSize={"large"} component={"h1"} mb={3} mt={3}  textAlign={"center"}>React SuperHeros</Typography>
                <Stack sx={{height:"60vh"}} justifyContent="space-around" gap={5} padding={3}>
                    <Typography>A flashy website for users to learn about their favorite super-powered characters from many different publishers This was a solo project I completed over the course of two weeks. It Displays Info and stats in the form of a graph for  hundreds of superheroes and villains. I obtained this data from the superHero API. I made my own node.js backend to organize the data In custom ways before being sent for display on the front end. </Typography>
                    <Box margin={"0 auto"}>
                        <Typography sx={{textDecoration:"underline"}} fontSize={"large"}>
                            Technologies used
                        </Typography>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Postgrest / Sequelize</li>
                        <li>chart.js</li>
                    </ul>
                    </Box>
                    <a style={{textDecoration:"none",}} href='https://react-superheros.onrender.com/' rel="noreferrer" target={"_blank"}><Button fullWidth variant="contained">Checkout the live project</Button></a>
                </Stack>
            </Paper>
        </Stack>
    </Box >
    </Grow>
  
    </>
    );
}

export default SuperHero

