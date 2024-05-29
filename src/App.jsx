import React from "react";
import './App.css'
import './pages/Home'
import About from "./pages/About";
import Book from './pages/Book'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
 
function App() {
    return (
        // <Router>
        //     <Routes>
        //         <Route exact path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //     </Routes>
        // </Router>
        <Home/>
    );
}


 
export default App;