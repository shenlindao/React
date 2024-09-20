import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<HomePage />}/>
                <Route path="/about"  element={<AboutPage />} />
            </Routes>
        </Router>
    );
}


export default App;
