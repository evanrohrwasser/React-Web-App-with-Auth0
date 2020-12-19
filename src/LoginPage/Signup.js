import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Signup = () => {
  
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  return(
    
    !isAuthenticated && (
     
   <button aria-label="Sign Up button" onClick={() => loginWithRedirect()}>
     
     Sign up
   </button>
   
    )
    
  )
}

export default Signup;