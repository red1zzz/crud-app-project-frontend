import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import ItemDetail from './components/ItemDetail';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/items" 
            element={isLoggedIn ? <ItemList /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/items/new" 
            element={isLoggedIn ? <ItemForm /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/items/:id" 
            element={isLoggedIn ? <ItemDetail /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/items/:id/edit" 
            element={isLoggedIn ? <ItemForm /> : <Navigate to="/login" />} 
          />
          <Route path="/" element={<Navigate to="/items" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;