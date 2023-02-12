import { Box, Stack } from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Hero = () => {
  return (
    <Stack id="aboutMe" minHeight="70vh" alignItems={"center"} justifyContent={"center"} >
      <Stack  width="100%" height={"100%"} direction={{xs:"colenm", md:"row"}} justifyContent="space-around" alignItems={"center"}>
    <Box width={{xs:"40%", md:"20%"}}>
    <img style={{width:"100%"}} className='dallas-img' src='http://placekitten.com/400/400' alt="quality picture of Dallas in his natural environment"/>
    </Box>
    <Box width={{xs:"100%", md:"70%"}}>
      <Typography textAlign={"center"} style={{textDecoration:"underline"}} pb={1}>About Me</Typography>
      <Typography textAlign={"center"} pr={3}>Hi there, welcome to my website My name is Dallas. I am a 29 year old full stack web developer. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas itaque tempore vero veniam libero doloribus magnam a quo earum in, iure eveniet dolore ullam neque nam! Maxime, mollitia dolores!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus fugiat nam repudiandae animi ipsa, iure dicta porro minus asperiores officiis dolorem vel voluptatem maiores adipisci atque officia autem optio!</Typography>
    </Box>
    </Stack> 
     </Stack>
  )
}

export default Hero