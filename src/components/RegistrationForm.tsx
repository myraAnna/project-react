import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';

const RegistrationForm = () => {
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

    // Here you would typically send the user data to your server
    console.log(`Registered with name: ${name}, email: ${email}, password: ${password}`);
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
        required
        id="password"
        label="Password"
        type="password"
        defaultValue=""
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        required
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        defaultValue=""
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" fullWidth style={{ backgroundColor: 'rgb(92, 84, 112)', color: 'white', marginTop: '10px' }}>
        Register
      </Button>
    </form>
  );
};

export default RegistrationForm;