import React, { useState } from 'react';

const SignUp = ({onSignUpSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Signing up with:', { email, password });
  };

  return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <div className="signup-login">
        <p>Have an account? </p>
        <button id='login-btn'onClick={onSignUpSuccess}>Log in</button>
      </div>
    </div>
  );
}

export default SignUp;
