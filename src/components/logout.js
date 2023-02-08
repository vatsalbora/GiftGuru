import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;

// const Logout = () => {
//     const { logout } = useAuth0();
  
//     return (
//       logout({ logoutParams: { returnTo: window.location.origin } })
//     );
//   };
  
// export default Logout;