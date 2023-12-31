import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { Provider } from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'

import store, {persistor} from "./store";
import Routes from './routes'
import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;
