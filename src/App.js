import React from 'react';
import logo from './logo.svg';
import './App.css';
import GroupCounter from './component/groupCounter/GroupCounter.js'


function App() {
  return (
    <div className="App">
        <GroupCounter defaultCount = {3}/>
    </div>
  );
}

export default App;
