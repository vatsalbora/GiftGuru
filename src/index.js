import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-ui5za6ruy46vzp05.us.auth0.com"
    clientId="htU6gq9uUlSSvBUgjf1q4TRAe1a4MbjM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);