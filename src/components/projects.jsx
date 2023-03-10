import { Stack, Typography } from '@mui/material'
import React from 'react'
import Shop from '../sites/Shop'
import SuperHero from '../sites/superHero'
import WhatTheChef from '../sites/whatTheChef'

const Projects = () => {
  return (
    < div id="projects">
    <Typography variant='h3'textAlign={"center"} m={5}>Full Stack Projects</Typography>
    <Stack direction={{xs:"colunm", md:"row"}} minHeight={"40vh"} justifyContent="space-evenly" alignItems={"center"} mt={3} gap={5}>
      <SuperHero/>
      <WhatTheChef/>
      <Shop/>
      </Stack>
      </div>
  )
}

export default Projects