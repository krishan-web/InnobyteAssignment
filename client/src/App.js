import './App.css';
import { Routes,Route } from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Otp from './Components/Otp'
import Email from './Components/Email/Email';
import EmailVerify from './Components/Email/EmailVerify'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/Profile" element={<Profile/>}/>
         <Route exact path="/Login" element={<Login/>}/>
         <Route exact path="/Otp" element={<Otp/>}/>
         <Route exact path="/Email" element={<Email/>}/>
         <Route exact path="/EmailVerify" element={<EmailVerify/>}/>
         <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
