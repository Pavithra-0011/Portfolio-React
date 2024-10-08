import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Store from './Redux/Store/Store.jsx'
import { Provider} from 'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {Store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
