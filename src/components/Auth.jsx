import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  function handleSignUpSuccess() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <SignUp onSignUpSuccess={handleSignUpSuccess} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default Auth;