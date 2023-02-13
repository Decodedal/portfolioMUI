import { Box, Button, Grow, IconButton, Paper, Stack } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from "../imgs/what the chef/logo.jpg"
import CloseIcon from '@mui/icons-material/Close';
import db from "../imgs/what the chef/db.png"
import { useState } from "react";

const WhatTheChef = () =>{

    const [size, setSize] = useState(false)

    return(
        <>
       <a href="#aboutMe"><Card sx={{minWidth:{xs:"90%", md:"30%"}, minHeight:{xs:"30%", md:"100%"}}}>
        <CardActionArea onClick={() => setSize(true)}>
          <CardMedia
            component="img"
            height="300"
            image= {logo}
            alt="what the chef banner"
            sx={{objectFit:"contain"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Recipe App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              S.E.R.N stack CRUD app for shairing recipes with your friends. 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </a>
      {/* expanded section  */}
      <Grow
        in={size}
        {...(size ? { timeout: 1000 } : {})}
      >
    <Box onClick={()=>setSize(false)} position={"absolute"} width={"100%"} zIndex={10} minHeight={{xs:"235vh", md:"150vh"}} bgcolor="background.default" top={55}>
        <IconButton sx={{position:"fixed", right:"0", margin:"15px"}} onClick={() => setSize(false)}>
        <CloseIcon size="large" />
        </IconButton>
        <Stack  height="100vh" direction={{xs:"column", md:"row"}} justifyContent="space-evenly" marginTop={{xs:"5rem", md:0}} alignItems={"center"} gap='1rem'>
            <Box width={{xs:"100%", md:"50%"}} minHeight="50vh" mt={{xs:"23rem", md:"0"}} mb={{xs:"5rem", md:"0"}}>
             {/* image display box */}
             <img style={{width:"100%", borderRadius:"10px", objectFit:"cover" , boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}  src={db} alt="single super hero page for kid flash"/>
            </Box>
            <Paper sx={{width:{xs:"100%", md:"40%"} ,}} boxShadow={4}   margin={2}>
            <Stack height="100%" alignItems={"center"} justifyContent="center">
                <Stack justifyContent="space-around" gap={5} padding={3}>
                  <Box>
                <Typography sx={{textDecoration:"underline"}} fontSize={"large"} component={"h1"} mb={3} mt={3}  textAlign={"center"}>What The Chef</Typography>
                    <Typography component={"p"}>SERN stack app to store your favorite recipes. I made this app with a group of my classmates. We collaborated using github. I was incharge of developing the backend  REST API, and designing the postgres database.  The biggest challenge we faced with this project was that users are allowed to enter any number of steps and ingredients for a recipe. So the code that was incharge of adding and updating recipes had to be flexible. </Typography>
                    </Box>
                    <Box margin={"0 auto"}>
                        <Typography sx={{textDecoration:"underline"}} fontSize={"large"}>
                            Technologies used
                        </Typography>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Postgrest / Sequelize</li>
                        <li> React Boot Strap</li>
                    </ul>
                    </Box>
                    <a style={{textDecoration:"none",}} href='https://react-superheros.onrender.com/' rel="noreferrer" target={"_blank"}><Button fullWidth variant="contained">Checkout the live project</Button></a>
                </Stack>
                </Stack>
            </Paper>
        </Stack>
    </Box >
    </Grow>
      </>
      
    )
}

export default WhatTheChef