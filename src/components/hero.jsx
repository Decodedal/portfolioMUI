import { Box, Paper, Stack } from '@mui/material'
import Typography from '@mui/material/Typography';
import Dallas from "../imgs/Dallas.jpg"
import { useState } from 'react';
import cat from "../imgs/kitty.jpg"

const Hero = () => {


const [photo, setPhoto] = useState(Dallas)


  return (
    <Stack id="aboutMe" minHeight="70vh" alignItems={"center"} justifyContent={"center"} >
      <Stack  width="100%" height={"100%"} direction={{xs:"colenm", md:"row"}} justifyContent="space-around" alignItems={"center"}>
    <Box width={{xs:"40%", md:"20%"}} borderRadius="100%" onMouseEnter={() => setPhoto(cat)} onMouseLeave={()=>setPhoto(Dallas)} mb={1}>
    <img style={{width:"100%", aspectRatio:"1"}} className='dallas-img' src={photo} alt="Dallas in his natural environment"/>
    </Box>
    <Box width={{xs:"100%", md:"70%"}}>
      <Paper elevation={3} sx={{padding:"4rem", borderRadius:"10px", marginBottom:"30px" }}>
      <Typography textAlign={"center"} component="h1" fontSize={"2.5rem"} style={{textDecoration:"underline"}} pb={1}>About Me</Typography>
      <Typography textAlign={"center"} pr={3} fontSize="large">
      Hello, and welcome to my website! My name is Dallas. I am a 29-year-old full-stack web developer and recent graduate of the NYU Software Development Professional Certificate Course. I am a lifelong multi-instrumentalist and former audio professional. In coding I have found an endless frontier of new challenges and possibilities that really satisfy my need for a creative outlet and thirst for knowledge. Over the past year and a half, I have learned a great deal and found a new relationship with the internet as a contributor after a lifetime of being a user. I built this site to showcase the full-stack applications I have built so far. I hope you enjoy it!
      </Typography>
      </Paper> 
    </Box>
    </Stack> 
     </Stack>
  )
}

export default Hero