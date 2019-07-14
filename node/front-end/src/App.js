import React, {useState} from 'react'
import './App.css'
import User from './components/User'
import Register from './components/Register'
import httpReq from './services/httpReq'

function App() {
  const [user, setUser] = useState();
  const [toggle, setToggle] = useState(true);


  // Test search
  httpReq.search("muumipeikko").then(res => {
    //console.log(res)
  }).catch(error => {
    console.log(error)
  })

  const toggleForm = () => {
    toggle ? setToggle(false) : setToggle(true)
  }

  const ToggleForm = () => {
    return toggle ?
      <Register setToggle={setToggle} /> :
      <User user={user} setUser={setUser} />
  }

  return (
    <div className="App">
      <button onClick={toggleForm}>{toggle ? "register" : "login"}</button>
      <ToggleForm />
    </div>
  )
}

export default App;
