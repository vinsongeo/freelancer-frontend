import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import SignIn from './pages/signin';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //       <Button variant="contained" >Text</Button>
    //     </p>
   
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <SignIn></SignIn>
  );
}

export default App;
