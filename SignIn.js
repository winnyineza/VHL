// src/pages/SignIn.js

import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/signin', { email, password });
      // Save the token in localStorage or context for later use
      localStorage.setItem('token', response.data.token);
      console.log('Sign in successful', response.data);
      // Redirect to dashboard or other page
    } catch (error) {
      console.error('Sign in error', error);
      // Handle error (show message to user, etc.)
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
