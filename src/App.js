
import { createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import Shop from './sites/Shop';
import SuperHero from './sites/superHero';
import WhatTheChef from './sites/whatTheChef';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import { useEffect, useState } from 'react';
import { grey } from '@mui/material/colors';

function App() {

  const [mode,setMode] = useState("dark")
  
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    },
    typography:{
      fontFamily:"calibri"
    }
  })

  // useEffect(()=>{

  //   let darkOrLight = localStorage.getItem('mode');
  //   if(darkOrLight != null){
  //    setMode(JSON.parse(darkOrLight))
  //    console.log("set mode from loccal")
  //   }
    
  //   },[])
    
  //   useEffect(()=>{
    
  //   localStorage.setItem('mode', JSON.stringify(mode));
    
  //   },[mode])
    

  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
    <CssBaseline/>
    <NavBar mode={mode} setMode={setMode}/>
    <Hero/>
    <Skills mode={mode}/>
    <Projects/>
    <Contact/>
    </div>
    </ThemeProvider>
  );
}

export default App;
