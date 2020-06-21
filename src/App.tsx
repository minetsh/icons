import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './views/home';
import './App.scss';

function App() {
  return (
    <Router basename="/icons">
      <Route path="/*" component={home} />
    </Router>
  );
}

export default App;
