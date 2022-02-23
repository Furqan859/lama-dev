import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {  Container, Grid, Typography,Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox, Button } from '@mui/material';

function App() {
 
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  })



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
  <div>
   
  <Container maxWidth="sm"
  
  sx={{border:'2px solid gold'}}
   >
 <Box>
  <Grid  sx={{display: 'flex',flexDirection:'column' }}>
  <Grid Item > <Typography gutterBottom variant="h5" component="div">
  Sign In to Avallo 
</Typography></Grid>
  <Grid Item><Typography sx={{ fontSize: 14 }} gutterBottom color="text.secondary" gutterBottom>
  Enter Your Details Below
  </Typography></Grid>
  <Grid Item  ><TextField fullWidth label="Email address" id="fullWidth" /></Grid>
  <Grid item> <FormControl sx={{ width: '100%' }} variant="outlined">
  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
  <OutlinedInput
    id="outlined-adornment-password"
    type={values.showPassword ? 'text' : 'password'}
    value={values.password}
    onChange={handleChange('password')}
    endAdornment={
      <InputAdornment position="end" >
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    label="Password"
  />
</FormControl></Grid>



  <Grid Item sx={{display: 'flex',justifyContent:"space-between"}}>
  <div><Checkbox/>Remember me </div>
   <Button>Forgot password?</Button>
   </Grid>

   <Grid Item>
   <Button  fullWidth sx={{backgroundColor:'green',color:'white',height:'50px'}}>Login</Button>
   </Grid>
   
  

  </Grid>
  
 </Box>
  </Container>
  </div>
  );
}

export default App;
     