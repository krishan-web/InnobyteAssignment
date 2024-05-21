import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
         <Route exact path="/" element={<Login/>}/>
         <Route exact path="/Login" element={<Login/>}/>
         <Route exact path="/Signup" element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
