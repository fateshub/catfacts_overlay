import React , {useState}from 'react';
import Catfact from './Catfact';
import Chat from './Chat';

import './App.css';

function App() {
  const [update ,setUpdate] = useState(false)

  return (
    <div className="App">
    <Catfact update={update}  setUpdate={setUpdate} />
    <Chat update={update}  setUpdate={setUpdate}/>
    </div>
  );
}

export default App;
