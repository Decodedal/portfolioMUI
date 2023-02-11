import { Box, Button, Grow, IconButton, Stack } from "@mui/material"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from "../imgs/what the chef/logo.jpg"
import CloseIcon from '@mui/icons-material/Close';
import franks from "../imgs/what the chef/franks.jpg"

const WhatTheChef = () =>{

    const [size, setSize] = React.useState(false)

    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => setSize(true)}>
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
      {/* expanded section  */}
      <Grow
        in={size}
        {...(size ? { timeout: 1000 } : {})}
      >
    <Box position={"absolute"} width={"100%"} zIndex={10} minHeight={{xs:"180vh", md:"100vh"}} bgcolor={"white"} top={55}>
        <IconButton sx={{position:"fixed", right:"0", margin:"15px"}} onClick={() => setSize(false)}>
        <CloseIcon size="large" />
        </IconButton>
        <Stack  height="100vh" direction={{xs:"column-reverse", md:"row"}} justifyContent="center" marginTop={{xs:"5rem", md:0}} alignItems={"center"} gap='1rem'>
            <Box width={{xs:"100%", md:"40%"}} minHeight="50vh">
             {/* image display box */}
             <img style={{width:"100%", borderRadius:"10px", objectFit:"cover" , boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}  
             src={franks} alt="single recipe page for hotdogs"
             />
            </Box>
            <Box width={{xs:"100%", md:"40%"}} minHeight="70vh" boxShadow={4} borderRadius="20px" margin={2}>
                <Typography sx={{textDecoration:"underline"}} fontSize={"large"} component={"h1"} mb={3} mt={3}  textAlign={"center"}>What The Chef</Typography>
                <Stack sx={{height:"60vh"}} justifyContent="space-around" gap={5} padding={3}>
                    <Typography>SERN Stack App to store your favorite recipes. I made this app with a group. We collaborated using github. I Was in Charge of developing the backend  REST API, and designing the postgres database.  The biggest challenge we faced with this project was that users are allowed to enter any number of steps and ingredients for a recipe. So the code that was incharge of adding and updating recipes had to be flexible. </Typography>
                    <Box margin={"0 auto"}>
                        <Typography sx={{textDecoration:"underline"}} fontSize={"large"}>
                            Technologies used
                        </Typography>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Postgrest / Sequelize</li>
                        <li>Bootstrap</li>
                    </ul>
                    </Box>
                    <a style={{textDecoration:"none",}} href='https://what-the-chef-frontend.onrender.com/' target={"_blank"}><Button fullWidth variant="contained">Checkout the live project</Button></a>
                </Stack>
            </Box>
        </Stack>
    </Box >
    </Grow>
      </>
      
    )
}

export default WhatTheChef