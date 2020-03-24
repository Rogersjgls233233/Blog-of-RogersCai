import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import SelftLayout from './components/SelftLayout';
function App() {
  return (
    <Router>
      <Route path='/' component={SelftLayout} />
    </Router>
  );
}

export default App;
