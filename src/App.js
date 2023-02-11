
import { CssBaseline, Stack } from '@mui/material';
import Shop from './sites/Shop';
import SuperHero from './sites/superHero';
import WhatTheChef from './sites/whatTheChef';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
    <CssBaseline/>
    <NavBar/>
    <Hero/>
    <Skills/>
    <Projects/>
    </div>
  );
}

export default App;
