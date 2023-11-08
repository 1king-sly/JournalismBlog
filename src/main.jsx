import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signin from './Pages/Signin.jsx'
import LoginForm from './Pages/Login.jsx'
import Homepage from './Pages/Homepage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <App />  */}
     <Homepage/>
    {/* <LoginForm/> */}
    {/* <Signin/> */}
  </React.StrictMode>,
)
