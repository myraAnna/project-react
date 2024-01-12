import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Form.css';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    const confirmPassword = (event.currentTarget.elements.namedItem('confirmPassword') as HTMLInputElement).value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const credentials = {
        name: name,
        email: email,
        password: password
    };

    fetch('http://localhost:3333/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleRegistration} className="formComponents">
      <TextField
        required
        id="name"
        label="Name"
        defaultValue=""
        variant="outlined"
        margin="normal"
        fullWidth
      />
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
        id="password"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleTogglePassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <TextField
        required
        id="confirmPassword"
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        defaultValue=""
        variant="outlined"
        margin="normal"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleToggleConfirmPassword}>
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />
      <Button type="submit" variant="contained" fullWidth style={{ backgroundColor: 'rgb(92, 84, 112)', color: 'white', marginTop: '10px' }}>
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;