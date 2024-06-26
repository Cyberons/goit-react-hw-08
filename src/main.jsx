import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { PersistGate } from "redux-persist/integration/react";
import './index.css'
import { Provider } from 'react-redux'
import store, { persistor }  from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/modern-normalize/modern-normalize.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)