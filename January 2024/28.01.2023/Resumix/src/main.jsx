import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import userDataProvider from './context/UserData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <userDataProvider>
    <App/>
  </userDataProvider>
)
