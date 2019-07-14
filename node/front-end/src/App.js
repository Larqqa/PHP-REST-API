import React, {useState} from 'react'
import './App.scss'
import User from './components/User'
import Register from './components/Register'
import Login from './components/Login'
import httpReq from './services/httpReq'

// Set timer variable for success/alert/error messages as global for resetting 
let timeoutHandle

function App() {
  const [user, setUser] = useState();
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState();
  const [messageStatus, setMessageStatus] = useState("success");
  const [timeoutStart, setTimeoutStart] = useState(false);
  const [show, setShow] = useState()


  // Test search
  httpReq.search("muumipeikko").then(res => {
    //console.log(res)
  }).catch(error => {
    console.log(error)
  })

  const loginRegister = (e) => {
    if(toggle){
      document.getElementById('register').classList.add('hide')
      document.getElementById('login').classList.remove('hide')
    } else {
      document.getElementById('register').classList.remove('hide')
      document.getElementById('login').classList.add('hide')
    }
      e.target.value === "true" ? setToggle(false) : setToggle(true)
  }

  // Set timer
  const setTimer = (timer) => {      

    // If timer checker is set, clear it first
    if(timeoutStart) {
      clearTimeout(timeoutHandle)
    }  

    // Set timer checker as true
    setTimeoutStart(true)
    setShow("show")
      
    // Remove message and reset timer checker
    timeoutHandle = setTimeout(() => {
      setShow()
      setTimeout(() =>{
        setMessage(null)
      }, 51)

      setTimeoutStart(false)
    }, timer)
  }

  return (
    <div className="App">
      <span id="messages" className={`${messageStatus} ${show}`} ><p>{message}</p></span>
      <div className={!user ? "userActions" : "userPage"}>
        {!user ?
          <div className="selectors">
            <button onClick={loginRegister} value="true" className={!toggle ? "btnAction active" : "btnAction"} >Login</button>
            <button onClick={loginRegister} value="false" className={toggle ? "btnAction active" : "btnAction"} >Register</button>
          </div>
          :
          false
        }
        {user ?
          <User user={user} setUser={setUser} setMessage={setMessage} setMessageStatus={setMessageStatus} setTimer={setTimer} />
          :
          <>
            <Register setUser={setUser} setMessage={setMessage} setMessageStatus={setMessageStatus}  setTimer={setTimer} />
            <Login setUser={setUser} setMessage={setMessage} setMessageStatus={setMessageStatus} setTimer={setTimer} />
          </>
        }
      </div>
    </div>
  )
}

export default App;
