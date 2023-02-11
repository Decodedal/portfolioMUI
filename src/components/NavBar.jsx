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
                <Typography>About</Typography>
                <Typography>Projects</Typography>
                <Typography>Contact</Typography>
                
            </Stack>
            </Stack>

        </Toolbar>
    </AppBar>
)

}

export default NavBar