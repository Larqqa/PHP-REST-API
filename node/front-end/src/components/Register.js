import React from 'react'
import httpReq from '../services/httpReq'

const Register = ({setToggle}) => {
  const handleRegister = (e) => {
    e.preventDefault()
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    
    httpReq.create(user).then(res => {
      console.log(res)
      setToggle(false)
    }).catch(error => {
      console.log(error)
    })
  
  }
  
  return (
    <>
      <p>register</p>
      <form onSubmit={handleRegister}>
        <input />
        <input />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Register