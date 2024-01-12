// LoginPage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import LoginForm from '../components/LoginForm';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import framerMotionTransition from '../framerMotionTransition';
import './Pages.css';

const LoginPage = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://lottie.host/cd55518c-149c-49d0-afad-bbee2a9af930/eBCzpqzdAo.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  if (!animationData) return <div>Loading...</div>;

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="root">
      <div className="stackedContainer">
          <Lottie options={defaultOptions} style={{ width: '100%', height: '100%' }}  />
      </div>

      <div className="formContainer">
        <div className="nf">
              <h2 className="nf-r1">Registration & Login  with</h2>
              <h1 className="nf-r2">REACT JS</h1>
        </div>
        <Paper className="form">
          <Typography className="welcomeText" variant="h4" >
            Login
          </Typography>
          <Typography className="welcomeText" variant="body1" gutterBottom>
            Welcome Back! Please login to your account.
          </Typography>

          <LoginForm />

          <div className="w-full flex items-center justify-center">
            <Typography variant="body2" className="customTypography">
              Don't have an account?{' '}
              <Link to="/register" className='link'> 
                Register Now for free
              </Link>
            </Typography>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default framerMotionTransition(LoginPage);