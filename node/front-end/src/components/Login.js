import React from 'react'
import httpReq from '../services/httpReq'

const Login = ({setUser}) => {
  
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
      } else {
        console.log(res)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
  <>
    <p>login</p>
    <form onSubmit={handleLogin}>
      <input />
      <input />
      <button>Submit</button>
    </form>
  </>
  )
}

export default Login