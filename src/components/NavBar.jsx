import { Close, ComputerTwoTone, LightMode, ModeNight,  Menu } from "@mui/icons-material"
import { AppBar, Box, Button, Divider, Drawer, IconButton, Stack, Switch, Toolbar, Typography } from "@mui/material"
import { useState } from "react"




const NavBar = ({mode, setMode}) =>{

    const [navOpen, setNavOpen] = useState(false)

return(
    <AppBar position="sticky" sx={{marginBottom:"1rem"}}>
        <Toolbar>
            <Stack width="100%" direction={"row"} justifyContent="space-between" alignItems={"center"}>
            <Stack direction={"row"} gap={2}>
            <ComputerTwoTone/>
            Dallas Portfolio
            </Stack>
            <Stack  direction={"row"} alignItems="center"> 
            <Stack direction={"row"} alignItems="center">
            {mode === "light" ?    
                <ModeNight/>
                :
                <LightMode/>
            } 
            <Switch defaultChecked onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
            </Stack>
              <Stack direction={"row"} justifyContent={"space-around"} width={"15vw"} sx={{display:{xs:"none", lg:"flex"}}} >
                <a href="#aboutMe"><Typography>About</Typography></a>
                <a href="#projects"><Typography>Projects</Typography></a>
                <a href="#contact"><Typography>Contact</Typography></a>      
                </Stack>          
          
                <IconButton onClick={e=> setNavOpen(true)} color='inherit' sx={{display:{xs:"block", lg:"none"}}}> 
                    <Menu/>
                </IconButton>
                  </Stack>
            </Stack>
                <Drawer
          
          anchor="right" //from which side the drawer slides in

          variant="temporary" //if and how easily the drawer can be closed

          open={navOpen} //if open is true, drawer is shown
          
          onClose={e => setNavOpen(false)} //function that is called when the drawer should close
        
          onOpen={e =>  setNavOpen(true)} //function that is called when the drawer should open
        >
            
            <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "paper",
                }}>
              {/* The inside of the drawer */}
              <IconButton onClick={e => setNavOpen(false)}  sx={{mb: 2}}>
                    <Close />
                  </IconButton>
                  <Divider sx={{mb: 2}}/>
                  <Stack sx={{height:"30vh"}} justifyContent="space-evenly">
                  <Button href="/shop/all" variant="contained">Shop All</Button>
                  <Button href="/shop/men%27s%20clothing"  variant="contained">Mens</Button>
                  <Button href="/shop/women%27s%20clothing" variant="contained">Womens</Button>
                  <Button href="/shop/jewelery"  variant="contained">Jewelry</Button>
                  <Button href="/shop/electronics" variant="contained">Electronics</Button>
                  </Stack>
            </Box>
        </Drawer>

        </Toolbar>
    </AppBar>
)

}

export default NavBar