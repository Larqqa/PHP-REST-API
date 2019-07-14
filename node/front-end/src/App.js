import React, {useState} from 'react'
import './App.css'
import User from './components/User'
import Register from './components/Register'
import httpReq from './services/httpReq'

function App() {
  const [user, setUser] = useState();

  // Test search
  httpReq.search("muumipeikko").then(res => {
    //console.log(res)
  }).catch(error => {
    console.log(error)
  })

  return (
    <div className="App">
      <Register />
      <User user={user} setUser={setUser} />
    </div>
  )
}

export default App;
