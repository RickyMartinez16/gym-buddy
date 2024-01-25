// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Chest from "./components/Chest"
import CustomAppBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Back from './components/Back';
import Legs from './components/Legs';
import Arms from './components/Arms';
import Shoulders from './components/Shoulders';
import CoreCardio from './components/CoreCardio';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <CustomAppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chest" element={<Chest />}/>
        <Route path="/back" element={<Back />}/>
        <Route path="/legs" element={<Legs />}/>
        <Route path="/arms" element={<Arms />}/>
        <Route path="/shoulders" element={<Shoulders />}/>
        <Route path="/core-cardio" element={<CoreCardio />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
