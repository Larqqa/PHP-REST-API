import React from 'react'
import httpReq from '../services/httpReq'


const UserData = ({u, setUser}) => {
  const handleNameChange = (e) => {
    e.preventDefault()
    const user = {
      id: u.id,
      username: e.target[0].value,
    }

    httpReq.update(user).then(res => {
      if(typeof res === 'object') {
        setUser(res)
      } else {
        console.log(res)
      }
    })
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    const user = {
      id: u.id,
      password: e.target[0].value,
      newPassword: e.target[1].value,
    }

    httpReq.update(user).then(res => {
      if(typeof res === 'object') {
        setUser(res)
      } else {
        console.log(res)
      }
    })
  }

  const handleDelete = (e) => {
    e.preventDefault()

    const user = {
      id: u.id,
    }

    httpReq.del(user).then(res => {
      console.log(res)
      setUser()
    })
  }

  const handleLogout = () => {
    setUser()
  }
  
  return (
    <>
    <p>Logged in as user {u.username}</p>
    <button onClick={handleLogout}>log out</button>

    <form value={u.id} onSubmit={handleNameChange} >
      <p>Change name</p>
      <input />
      <button>Submit</button>
    </form>
    <form onSubmit={handlePasswordChange} >
      <p>Change password</p>
      <input />
      <input />
      <button>Submit</button>
    </form>
    <button onClick={handleDelete}>Delete User</button>
    </>
  )
}

export default UserData