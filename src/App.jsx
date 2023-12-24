
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './Navbar';
import Home from '../src/views/Home';
import Contacto from '../src/views/Contacto';
import { Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <div>
<Navbar/>
<Routes>
  <Route
  path="/"
  element={<Home/>}/>
  <Route
  path="/contact"
  element={<Contacto/>}/>
</Routes>


    </div>
  )
}

export default App
