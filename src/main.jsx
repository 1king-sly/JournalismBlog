import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signin from './Signin.jsx'
import LoginForm from './Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <App />  */}
    <LoginForm/>
    {/* <Signin/> */}
  </React.StrictMode>,
)
