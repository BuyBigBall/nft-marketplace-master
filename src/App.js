import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import React from 'react';
// Components
import Home from './Home';
import NFTLending from './Lending';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route key="home" exact path="/" element={<Home />} />
                <Route key="lending" exact path="/lending" element={<NFTLending />} />
            </Routes>
        </Router>
    );
}