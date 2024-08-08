import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Welcome to the App</div>} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;