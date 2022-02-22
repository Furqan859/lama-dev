import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

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
    <Container>
      <Box component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',

          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 12,
            width: 548,
            height: 528,
          },

        }}
      >
        <Paper variant="outlined" sx={{ justifyContent: 'center', alignSelf: 'center', borderRadius: '1px solid #FF0000' }}>
          <Typography variant="h3" sx={{ margin: '20px', fontSize: '30px' }}>Sign In to Availo</Typography>
          <Typography variant="subtitle1" sx={{ margin: '20px', color: 'GrayText', fontStyles: 'serif' }}>Enter Your Details Below</Typography>
          <Box sx={{ width: 500, ml: 'auto', mr: 'auto', maxWidth: '100%', alignSelf: 'center' }}> <TextField fullWidth label="Email address" id="fullWidth" /></Box>




          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
