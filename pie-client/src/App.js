import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from '../src/components/Auth/Auth';

function App() {

  const [sessionToken, setSessionToken] = useState(undefined)
  console.log(sessionToken);

  return (
    <div className="App">

      <Navbar props={sessionToken} />
      {sessionToken}
      <Auth />
    </div>
  );
}

export default App;

// rel="noopener noreferrer"