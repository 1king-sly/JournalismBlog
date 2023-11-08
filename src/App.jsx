import { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Homepage from './Pages/Homepage.jsx'
import LoginForm from './Pages/Login.jsx'
import Admin from './Pages/Admin.jsx'
import RegistrationForm from './Pages/Signin.jsx';


class App extends Component{
  render(){
  return (
    <>
      {/* <Homepage/> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
            <Route exact path='/Admin' element={<Admin/>}></Route>
            {/* <Route exact path='/News' element={<News/>}></Route> */}
            {/* <Route exact path='/Sports' element={<Sports/>}></Route> */}
            {/* <Route exact path='/Business' element={<Business/>}></Route> */}
            {/* <Route exact path='/Entertainment' element={<Entertainment/>}></Route> */}
            <Route exact path='/SignIn' element={<LoginForm/>}></Route>
            <Route exact path='/SignUp' element={<RegistrationForm/>}></Route>
        </Routes>
      </Router>
    </>

  );
}
}
export default App
