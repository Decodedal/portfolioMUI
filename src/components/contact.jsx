import { GitHub, LinkedIn, MailOutline, PhoneAndroidOutlined } from '@mui/icons-material'
import { IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'


const Contact = () => {
  return (
    <Paper elevation={4}>
    <Stack id='contact' width={"100%"} minHeight="30vh" direction={{xs:"column", md:"row"}} justifyContent="space-evenly" alignItems={"center"} sx={{ marginTop:"4rem"}}>
    <Stack>
        {/* phone */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton color="inherit" href='tel:7182903752'  >
            <PhoneAndroidOutlined fontSize='large' />
        </IconButton>
        <a href='tel:7182903752' ><Typography fontWeight={500} color="text.primary"  >Call or Text</Typography></a>
        </Stack>
        {/*email  */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton href='mailto:PalumboDallas@gmail.com' color="inherit">
            <MailOutline fontSize='large'/>
        </IconButton>
        <a href='mailto:PalumboDallas@gmail.com'><Typography fontWeight={500}  color="text.primary" >Shoot me an email</Typography></a>
        </Stack>
        {/* linked in */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton href='https://www.linkedin.com/in/dallas-palumbo/'  color="inherit" rel="noreferrer" target="_blank">
            <LinkedIn fontSize='large'/>
        </IconButton>
        <a href='https://www.linkedin.com/in/dallas-palumbo/' rel="noreferrer" target="_blank"><Typography fontWeight={500} color="text.primary" >Linkedin</Typography></a>
        </Stack>
        {/* gitHub */}
        <Stack direction={"row"} alignItems="center" gap={1}>
        <IconButton href='https://github.com/Decodedal'   color="inherit" rel="noreferrer" target="_blank">
            <GitHub fontSize='large'/>
        </IconButton>
        <a href='https://github.com/Decodedal' rel="noreferrer" target="_blank"><Typography fontWeight={500} color="text.primary" >Github</Typography></a>
        </Stack>
    </Stack>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48346.213272725916!2d-73.80534828408778!3d40.769978785085236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261e225f2f7bd%3A0x7efd0c79b487a99e!2sBayside%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1676177219280!5m2!1sen!2sus" width="400" height="300" style={{border:"1px solid black", borderRadius:"10px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
    </Stack>
    </Paper>
  )
}

export default Contact