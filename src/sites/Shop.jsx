import { Box } from "@mui/material"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import cover from "../imgs/shop/single.jpg"
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
 
    <Box position={"absolute"} width={100} height="100px" bgcolor={"red"}>
    
    </Box>

);

const Shop = () => {
    
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    }
    return(
    //     <Card sx={{ maxWidth: 345 }}>
    //     <CardActionArea>
    //       <CardMedia
    //         component="img"
    //         height="140"
    //         image={cover}
    //         alt="green iguana"
    //         sx={{objectFit:"cover"}}
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           Digital Marketplace
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           Featuring user authentication. Working shoping cart persistant across devices.  
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    <Box sx={{ height: 180 }}>
    <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Show"
    />
    <Box sx={{ display: 'flex' }}>
    
      {/* Conditionally applies the timeout prop to change the entry speed. */}
      <Grow
        in={checked}
 
        {...(checked ? { timeout: 1000 } : {})}
      >
        {icon}
      </Grow>
    </Box>
  </Box>
    )
}

export default Shop