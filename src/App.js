import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from"./pages/Home";
import DrinkList from "./pages/DrinkList";
import About from"./pages/About";
import Contact from"./pages/Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App () {
  return ( 
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/DrinkList' exact element={<DrinkList />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;