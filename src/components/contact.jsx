import { GitHub, LinkedIn, MailOutline, PhoneAndroidOutlined } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const IconStack = styled(Stack)({
    direction:"row",
    gap:1,
    alignItems:"center"
})

const Contact = () => {
  return (
    <Stack id='contact' width={"100%"} minHeight="30vh" direction={{xs:"column", md:"row"}} justifyContent="space-evenly" alignItems={"center"} sx={{backgroundColor:"primary.main", marginTop:"4rem"}}>
    <Stack>
        {/* phone */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton href='tel:7182903752'  >
            <PhoneAndroidOutlined fontSize='large' sx={{color:"white"}} />
        </IconButton>
        <a href='tel:7182903752' ><Typography fontWeight={500}  color="white">Call or Text</Typography></a>
        </Stack>
        {/*email  */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton>
            <MailOutline href='mailto:PalumboDallas@gmail.com' fontSize='large' sx={{color:"white"}}/>
        </IconButton>
        <a href='mailto:PalumboDallas@gmail.com'><Typography fontWeight={500}  color="white">Shoot me an email</Typography></a>
        </Stack>
        {/* linked in */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton href='https://www.linkedin.com/in/dallas-palumbo/' target="_blank">
            <LinkedIn fontSize='large' sx={{color:"white"}}/>
        </IconButton>
        <a href='https://www.linkedin.com/in/dallas-palumbo/' target="_blank"><Typography fontWeight={500}  color="white">Linkedin</Typography></a>
        </Stack>
        {/* gitHub */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton href='https://github.com/Decodedal' target="_blank">
            <GitHub fontSize='large' sx={{color:"white"}}/>
        </IconButton>
        <a href='https://github.com/Decodedal' target="_blank"><Typography fontWeight={500}  color="white">Github</Typography></a>
        </Stack>
    </Stack>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48346.213272725916!2d-73.80534828408778!3d40.769978785085236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261e225f2f7bd%3A0x7efd0c79b487a99e!2sBayside%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1676177219280!5m2!1sen!2sus" width="400" height="300" style={{border:"1px solid black", borderRadius:"10px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Stack>
  )
}

export default Contact