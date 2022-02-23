import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {  Container, Grid, Typography,Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox, Button, Stack, ListItem, CssBaseline } from '@mui/material';

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
    
    <Container maxWidth={'md'}>
<Box>

  <Grid   spacing={2} maxWidth={'sm'}  sx={{display: 'flex',flexDirection:'column' ,border:'2px solid gold'}}>
 
  <CssBaseline/>
  
   <Grid item xs> <Typography gutterBottom variant="h5" component="div">
  Sign In to Avallo 
</Typography></Grid>

  <Grid item xs><Typography sx={{ fontSize: 14 }} gutterBottom color="text.secondary" gutterBottom>
  Enter Your Details Below
  </Typography></Grid>
  <Grid item  xs><TextField fullWidth label="Email address" id="fullWidth" /></Grid>
  <Grid item xs> <FormControl sx={{ width: '100%' }} variant="outlined">
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



  <Grid item xs sx={{display: 'flex',justifyContent:"space-between"}}>
  <div><Checkbox/>Remember me </div>
   <Button>Forgot password?</Button>
   </Grid>

   <Grid item xs>
   <Button  fullWidth sx={{backgroundColor:'green',color:'white',height:'50px'}}>Login</Button>
   </Grid>
   
   
   
  </Grid>
  
  </Box>
  </Container>

 
  
  
  );
}

export default App;
     