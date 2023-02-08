import { Box, Button, Grow, IconButton, Stack } from "@mui/material"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from "../imgs/what the chef/logo.jpg"
import CloseIcon from '@mui/icons-material/Close';

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
        <Stack  height="100vh" direction={{xs:"column", md:"row"}} justifyContent="center" alignItems={"center"} gap={{xs:"3rem", md:"1rem"}}>
            <Box width={{xs:"100%", md:"40%"}} minHeight="50vh"  border="3px solid black" >1</Box>
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
      
    )
}

export default WhatTheChef