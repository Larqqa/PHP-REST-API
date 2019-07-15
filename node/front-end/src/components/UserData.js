import React from 'react'
import httpReq from '../services/httpReq'


const UserData = ({u, setUser, setMessage, setMessageStatus, setTimer}) => {
  const handleNameChange = (e) => {
    e.preventDefault()

    const user = {
      id: u.id,
      loginKey: u.loginKey,
      username: e.target[0].value,
    }

    httpReq.update(user).then(res => {
      if(typeof res === 'object') {
        setUser({...u, username: res.username})
        setMessage(`Username changed to ${res.username}!`)
        setMessageStatus('success')
        setTimer(2000)
      } else {
        setMessage(res)
        setMessageStatus('alert')
        setTimer(2000)
      }
    })
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    
    const user = {
      id: u.id,
      loginKey: u.loginKey,
      password: e.target[0].value,
      newPassword: e.target[1].value,
    }

    httpReq.update(user).then(res => {
      if(typeof res === 'object') {
        setMessage(res.mes)
        setMessageStatus('success')
        setTimer(2000)
      } else {
        setMessage(res)
        setMessageStatus('error')
        setTimer(2000)
      }
    })
  }

  const handleDelete = (e) => {
    e.preventDefault()

    if(!window.confirm("Are you sure you want to delete your account? This is permanent!")) return

    const user = {
      id: u.id,
      loginKey: u.loginKey
    }

    httpReq.del(user).then(res => {
      setUser()
      setMessage(res)
      setMessageStatus('alert')
      setTimer(2000)
    })
  }

  const handleLogout = () => {
    const user = {
      id: u.id
    }
  
    httpReq.logout(user).then(() => {
      setUser()
      setMessageStatus('success')
      setMessage(`Logged out!`)
      setTimer(2000)
    }).catch((error) => {
      setMessage(error)
      setMessageStatus('error')
      setTimer(2000)
    })
  }
  
  return (
    <>
      <div className="logged">
        <h3>Logged in as user {u.username}</h3>
        <button className="btnAction" onClick={handleLogout}>log out</button>
      </div>
      <form id="editName" value={u.id} onSubmit={handleNameChange} >
        <p>Change name</p>
        <input placeholder="Username" placeholder={u.username} required />
        <button>Send</button>
      </form>
      <form id="editPassword" onSubmit={handlePasswordChange} >
        <p>Change password</p>
        <input placeholder="Old Password" type="password" required />
        <input placeholder="New Password" type="password" required />
        <button>Send</button>
      </form>
      <div className="delete">
        <p>Delete user</p>
        <button onClick={handleDelete}>Delete User</button>
      </div>
    </>
  )
}

export default UserData