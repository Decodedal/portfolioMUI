
import cover from "../imgs/shop/single.jpg"
import { Box, Button, IconButton, Stack } from '@mui/material'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import index from "../imgs/super/index.jpg"
import CloseIcon from '@mui/icons-material/Close';
import Grow from '@mui/material/Grow';
import expandedPic from "../imgs/shop/fullscreen.jpg"



const Shop = () => {

    const [size, setSize] = useState(false)
    
    return(
        <>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => setSize(true)}>
          <CardMedia
            component="img"
            height="140"
            image={cover}
            alt="green iguana"
            sx={{objectFit:"cover"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Digital Marketplace
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Featuring user authentication. Working shoping cart persistant across devices.  
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
            <Box width={{xs:"100%", md:"45%"}} Height="500px">
             {/* image display box */}
             <img style={{width:"100%", borderRadius:"10px", objectFit:"cover" , boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}
               src={expandedPic} 
               alt="single super hero page for kid flash"
               />
            </Box>
            <Box width={{xs:"100%", md:"40%"}} minHeight="70vh" boxShadow={4} borderRadius="20px" margin={2}>
                <Typography sx={{textDecoration:"underline"}} fontSize={"large"} component={"h1"} mb={3} mt={3}  textAlign={"center"}>
                  Style Central
                  </Typography>
                <Stack sx={{height:"60vh"}} justifyContent="space-around" gap={5} padding={3}>
                    <Typography>A stunning web marketplace featuring persistent shopping cart, and Secure user sign in. Passwords are hashed on the backend which sends a jwt to local storage to continuously persist the user. Local storage is also used to create the persistent shopping cart. A node.js backend stores user login as well as a record of likes and shopping cart so that a user can sign in on any device and have their shopping cart and likes follow them around. </Typography>
                    <Box margin={"0 auto"}>
                        <Typography sx={{textDecoration:"underline"}} fontSize={"large"}>
                            Technologies used
                        </Typography>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Postgrest / Sequelize</li>
                        <li>Material UI</li>
                        <li>bCrypt</li>
                    </ul>
                    </Box>
                    <a style={{textDecoration:"none",}} href='https://style-central.onrender.com/' target={"_blank"}><Button fullWidth variant="contained">Checkout the live project</Button></a>
                </Stack>
            </Box>
        </Stack>
    </Box >
    </Grow>
      </>
   
    )
}

export default Shop