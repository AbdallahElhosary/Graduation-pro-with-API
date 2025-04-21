import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>

  </Provider>
);

