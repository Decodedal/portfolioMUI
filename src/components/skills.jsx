import { Box } from '@mui/material'
import React from 'react'
import "../skills.css"
import html from  "../imgs/skills/html.png"
import javascript from "../imgs/skills/JavaScript-logo.png"
import mongo from  "../imgs/skills/mongo_logo.jpg"
import mui from "../imgs/skills/MUI.png"
import next from "../imgs/skills/next.png"
import psql from "../imgs/skills/Postgresql.png"
import python from "../imgs/skills/Python.png"
import react from "../imgs/skills/React.png"


const placeSkills = Array(6).fill("http://placekitten.com/200/300")

console.log(placeSkills)



const Skills = () => {
  return (
    // <Box mb={2} width={"100%"} border="3px solid green"
    // minHeight={"20vh"}>

    // </Box>
    <div className='skills-container'>
      
      <img className='skills-img' src={html} alt="html and css"/>
      <img className='skills-img' src={javascript} alt="javascript"/>
      <img className='skills-img' src={react} alt="react"/>
      <img className='skills-img' src={mui} alt="Material ui"/>
      <img className='skills-img' src={next} alt="next.js"/>
      <img className='skills-img' src={python} alt="python"/>
      <img className='skills-img' src={psql} alt="PostgresSQL"/>
      <img className='skills-img' src={mongo} alt="MongoDB"/>
    </div>
  )
}

export default Skills