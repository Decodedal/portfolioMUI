import { ComputerSharp, ComputerTwoTone } from "@mui/icons-material"
import { AppBar, Stack, Toolbar, Typography } from "@mui/material"



const NavBar = () =>{
return(
    <AppBar position="sticky" sx={{marginBottom:"1rem"}}>
        <Toolbar>
            <Stack width="100%" direction={"row"} justifyContent="space-between" alignItems={"center"}>
            <Stack direction={"row"} gap={2}>
            <ComputerTwoTone/>
            Dallas Portfolio
            </Stack>
            <Stack gap={4} direction={"row"}>
                <a href="#aboutMe"><Typography>About</Typography></a>
                <a href="#projects"><Typography>Projects</Typography></a>
                <a href="#contact"><Typography>Contact</Typography></a>                
            </Stack>
            </Stack>

        </Toolbar>
    </AppBar>
)

}

export default NavBar