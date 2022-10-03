import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import "./index.css"
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
 
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
);

