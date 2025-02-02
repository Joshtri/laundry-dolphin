// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components here
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path='*' element={<NotFound/>} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes> 
    </Router>
  );
}

export default App;
