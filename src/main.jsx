import React from 'react';
import ReactDOM from 'react-dom/client'; // import from react-dom/client
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';

// Create a root for React to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with necessary providers
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// Measure performance
reportWebVitals();
