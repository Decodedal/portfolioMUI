
import { createTheme, CssBaseline,ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import {useState } from 'react';


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
