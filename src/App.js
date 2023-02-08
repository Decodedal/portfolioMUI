
import { CssBaseline, Stack } from '@mui/material';
import Shop from './sites/Shop';
import SuperHero from './sites/superHero';
import WhatTheChef from './sites/whatTheChef';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
    <CssBaseline/>
    <NavBar/>
    <Hero/>
    <Stack direction={"row"} justifyContent="space-evenly">
      <SuperHero/>
      <WhatTheChef/>
      <Shop/>
    </Stack>
    </div>
  );
}

export default App;
