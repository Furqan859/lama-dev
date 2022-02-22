import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';




export default function Login() {
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
    <Card sx={{ backgroundColor:'offwhite',border:'2px solid gold' ,display:'flex',flexDirection:'column',justifyContent: 'center',alignContent: 'center',alignItems: 'center',height:'500px',width:'600px'}}>
      <CardContent sx={{ justify: 'center',alignContent: 'center',alignItems: 'center'}} >
        
        <Typography variant="h5" component="div">
          Sign In to Avallo 
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Enter Your Details Below
        </Typography>
        <Typography sx={{ mb: 1.5 }} >
        <Box sx={{ width: 500, ml: 'auto', mr: 'auto', maxWidth: '100%', alignSelf: 'center', fontSize: '20px' }}> <TextField fullWidth label="Email address" id="fullWidth" /></Box>
        </Typography>
        <Typography >
        <FormControl sx={{ width: '56ch' }} variant="outlined">
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
      </FormControl>
          <br />
          </Typography>
         <Grid container spacing={2} sx={{mt:'20px',justifyContent:'space-between'}}><Grid Item sx={6} ><Checkbox />Remember me </Grid> <Grid Item sx={6} ><Button>Forgot password?</Button></Grid></Grid>
        
      </CardContent>
      <CardActions>
        <Button size="large" sx={{backgroundColor:'green',color:'white',height:'50px',width:'500px'}}>Login</Button>
      </CardActions>
    </Card>
  );
}
