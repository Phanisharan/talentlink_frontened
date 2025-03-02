import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobPage from './pages/JobPage';
import './App.css';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:id" element={<JobPage />} />
            </Routes>
        </Router>
    );
}

export default App;
