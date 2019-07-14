import React from 'react'
import httpReq from '../services/httpReq'

const handleRegister = (e) => {
  e.preventDefault()
  const user = {
    username: e.target[0].value,
    password: e.target[1].value
  }
  
  httpReq.create(user).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })

}

const Register = () => {
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