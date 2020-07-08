import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { Home, Login, Protected } from "../../components";

const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push("/login");
  };

  return (
    <Security
      issuer={`${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`}
      clientId={process.env.REACT_APP_OKTA_KEY}
      redirectUri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <Route path="/" exact={true} component={Home} />
      <SecureRoute path="/protected" component={Protected} />
      <Route
        path="/login"
        render={() => (
          <Login
            issuer={`${process.env.REACT_APP_OKTA_DOMAIN}/oauth2/default`}
          />
        )}
      />
      <Route path="/implicit/callback" component={LoginCallback} />
    </Security>
  );
};
export default AppWithRouterAccess;
