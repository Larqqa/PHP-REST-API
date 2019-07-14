import React, {useState} from 'react'
import './App.css'
import axios from 'axios'

// API url
const baseUrl = "http://localhost/restful-api/index.php"

const search = (username) => {
  // Get all with get
  const request = axios.get(`${baseUrl}?username=${username}`)
  return request.then(response => response.data)
}

const login = obj => {
  // Get all with get
  const request = axios.post(baseUrl, {action: 'login', obj: obj})
  return request.then(response => response.data)
}

const create = obj => {
  // Send new object with post
  const request = axios.post(baseUrl, {action: 'create', obj: obj})
  return request.then(response => response.data)
}

// Put requests reset the whole container object on back-end
// so they dont need to be separated with identifiers
const update = (obj) => {
  // send object, with target id, update requested fields with put request
  const request = axios.put(baseUrl, obj)
  return request.then(response => response.data)
}

const del = (obj) => {
  // Delete from server with id sent with delete request
  const request = axios.post(baseUrl, {action: 'delete', obj: obj})
  return request.then(response => response.data)
}


function App() {
const [user, setUser] = useState();

  // Test search
  search("muumipeikko").then(res => {
    //console.log(res)
  }).catch(error => {
    console.log(error)
  })
  
  
  const handleLogout = () => {
    setUser()
  }
  
  const handleLogin = (e) => {
    e.preventDefault()

    // CHANGE TO A POST FORMAT
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    }

    login(user).then(res => {
      if(typeof res === 'object') {
        setUser(res)
      } else {
        console.log(res)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    }
    
    create(user).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })

  }

  const Login = () => {
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

  const UserData = ({u}) => {
    const handleNameChange = (e) => {
      e.preventDefault()
      const user = {
        id: u.id,
        username: e.target[0].value,
      }
  
      update(user).then(res => {
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
  
      update(user).then(res => {
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
  
      del(user).then(res => {
        console.log(res)
        setUser()
      })
    }

    return (
      <>
      <p>Logged in as user {user.username}</p>
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

  const User = () => {
    if(user) {
      return(
        <UserData u={user} />
      )
    }
    return(
      <Login />
    )
  }

  return (
    <div className="App">
      <Register />
      <User />
    </div>
  )
}

export default App;
