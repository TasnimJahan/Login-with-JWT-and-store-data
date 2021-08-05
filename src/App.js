import React from 'react';
import Login from './components/Login/Login'
import ValidationAndAddUser from './components/ValidationAndAddUser/ValidationAndAddUser'
import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login/> */}
        <ValidationAndAddUser/>
      </header>
    </div>
  );
}

export default App;
