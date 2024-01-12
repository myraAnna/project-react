import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import credentials from '../credentials.json';
import './Form.css';

const LoginForm = () => {
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
          type="password"
          defaultValue=""
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" className="customButton" fullWidth>
          Login
        </Button>
      </form>
    );
  };
  
  export default LoginForm;