import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';




export default function Login() {
   
  return (
   <Container sx={{display: 'flex',justifyContent: 'center',alignSelf:'center',alignItems:'center'}}>
   
   <Card sx={{ backgroundColor:'offwhite',border:'2px solid gold' ,display:'flex',flexDirection:'column',justifyContent: 'center',alignContent: 'center',alignItems: 'center',height:'500px',width:'550px'}}>
   <CardContent sx={{ justify: 'center',alignContent: 'center',alignItems: 'center'}} >
     
    
     
     <Typography sx={{ mb: 1.5 }} >
     <Box sx={{ width: '100%'}}> </Box>
     </Typography>
     <Typography >
     
       <br />
       </Typography>
      <Grid container spacing={2} sx={{mt:'20px',justifyContent:'space-between'}}><Grid Item sx={6} ><Checkbox />Remember me </Grid> <Grid Item sx={6} ><Button>Forgot password?</Button></Grid></Grid>
     
   </CardContent>
   <CardActions>
     
   </CardActions>
 </Card>

   </Container>
  );
}
