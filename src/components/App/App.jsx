import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppWithRouterAccess } from "../../components";

const App = () => {
  return (
    <Router>
      <AppWithRouterAccess />
    </Router>
  );
};

export default App;
