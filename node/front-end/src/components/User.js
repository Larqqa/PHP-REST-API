import React from 'react'
import Login from './Login'
import UserData from './UserData'

const User = ({user, setUser}) => {
  if(user) {
    return(
      <UserData u={user} setUser={setUser}  />
    )
  }
  return(
    <Login setUser={setUser} />
  )
}

export default User