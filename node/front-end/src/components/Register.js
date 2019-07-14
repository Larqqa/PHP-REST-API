import React from 'react'
import httpReq from '../services/httpReq'

const Register = ({setUser, setMessage, setMessageStatus, setTimer}) => {
  const handleRegister = (e) => {
    e.preventDefault()
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    
    httpReq.create(user).then(res => {
      if(typeof res === 'object') {
        setUser(res)
        setMessage(`User ${res.username} created!`)
        setMessageStatus('success')
        setTimer(2000)
      } else {
        setMessage(res)
        setMessageStatus('alert')
        setTimer(2000)
      }
    }).catch(error => {
      setMessage(error)
      setMessageStatus('error')
      setTimer(2000)
    })
  
  }
  
  return (
    <>
      <form id="register" className="hide" onSubmit={handleRegister}>
        <div>
        <input placeholder="Username" required />
        <input placeholder="Password" type="password" required />
        </div>
        <button>Register</button>
      </form>
    </>
  )
}

export default Register