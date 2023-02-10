import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect({             
    appState: {
      returnTo: '/home'
    }
  })}>Log In</button>;
};

export default LoginButton;

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();

//   return loginWithRedirect();
// };

// export default Login;