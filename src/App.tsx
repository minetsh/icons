import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import icons from './resource/icons.json';
import './App.scss';

function App() {
  return (
    <div>
      {icons.icons.map((icon) => {
        return <span className="material-icons">{icon.name}</span>;
      })}
    </div>
  );
  // return (
  //   <Router>
  //     <Route path="/*" />
  //   </Router>
  // );
}

export default App;
