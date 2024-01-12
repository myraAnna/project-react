import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import credentials from '../credentials.json';
import './Form.css';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
      const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
  
      if (password === credentials.password && email === credentials.email) {
        // The credentials are correct
        alert('Login successful');
      } else {
        // The credentials are incorrect
        alert('Incorrect credentials');
      }
    };
  
    return (
      <form onSubmit={handleLogin} className="formComponents">
        <TextField
          required
          id="email"
          label="Email"
          defaultValue=""
          variant="outlined"
          margin="normal"
          fullWidth
        />
      <TextField
        required
        id="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        defaultValue=""
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
        <Button type="submit" variant="contained" fullWidth  style={{ backgroundColor: 'rgb(92, 84, 112)', color: 'white', marginTop: '10px' }}>
          Login
        </Button>
      </form>
    );
  };
  
  export default LoginForm;