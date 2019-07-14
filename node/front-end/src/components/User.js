import React from 'react'
import UserData from './UserData'

const User = ({user, setUser, setMessage, setMessageStatus, setTimer}) => {
  if(user) {return(
    <UserData u={user} setUser={setUser} setMessage={setMessage} setMessageStatus={setMessageStatus} setTimer={setTimer} />
  )}
  return[<></>]
}

export default User