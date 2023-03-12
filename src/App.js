import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.scss';


function App() {

  return (
     <div className="App d-flex">
        <Sidebar />
        <Main />
     </div>
  );
}

export default App;
