import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  return(
    
    !isAuthenticated && (
     
   <button aria-label="Login Button" aria-hidden="false" onClick={() => loginWithRedirect()}>
     
     Log In
   </button>
   
    )
    
  )
}

export default LoginPage;