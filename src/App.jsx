import React from "react";
import { HashRouter } from "react-router-dom";

import routes, { renderRoutes } from "./routes";
import Waves from "node-waves";
import "node-waves/dist/waves.css";

const App = () => {
  return (
    <HashRouter basename={import.meta.env.VITE_APP_BASE_NAME}>
      {renderRoutes(routes)}
    </HashRouter>
  );
};
Waves.init();
export default App;
