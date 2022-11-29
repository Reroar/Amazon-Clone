import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<><Header/><Home/></>}/>
      <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>    
      <Route exact path="/login" element={<><Login/></>}/>    
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
