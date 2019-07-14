import React, {useState} from 'react'
import httpReq from '../services/httpReq'

const Login = ({setUser, setMessage, setMessageStatus, setTimer}) => {
  const handleLogin = (e) => {
    e.preventDefault()
  
    // CHANGE TO A POST FORMAT
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    }
  
    httpReq.login(user).then(res => {
      if(typeof res === 'object') {
        setUser(res)
        setMessage(`Logged in as ${res.username}`)
        setMessageStatus('success')
        setTimer(2000)
      } else {
        setMessage(res)
        setMessageStatus('error')
        setTimer(2000)
      }
    }).catch((error) => {
      setMessage(error)
      setMessageStatus('error')
      setTimer(2000)
    })
  }

  return (
  <>
    <form id="login" onSubmit={handleLogin}>
      <div>
        <input placeholder="Username" required />
        <input placeholder="Password" type="password" required />
      </div>
      <button>Login</button>
    </form>
  </>
  )
}

export default Login