import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/api';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password)
      .then(data => {
        if (data.message === 'Login successful') {
          localStorage.setItem('user', JSON.stringify(data.user));
          setIsLoggedIn(true);
          navigate('/items');
        } else {
          alert('Login failed. Please check your username and password.');
        }
      })
      .catch(error => {
        console.log('Error logging in:', error);
        alert(error.error || 'An error occurred while logging in. Please try again.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;