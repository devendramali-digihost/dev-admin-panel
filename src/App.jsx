import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes, { renderRoutes } from './routes';
import Waves from 'node-waves';
import 'node-waves/dist/waves.css';

const App = () => {
  return <BrowserRouter basename={import.meta.env.VITE_APP_BASE_NAME}>{renderRoutes(routes)}</BrowserRouter>;
};
Waves.init();
export default App;
