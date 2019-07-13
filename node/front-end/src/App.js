import React, {useState} from 'react'
import './App.css'
import axios from 'axios'

// API url
const baseUrl = "http://localhost/restful-api/index.php"

const getAll = (username) => {
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
const update = (oldObj, newObj) => {
  // send object, with target id, update requested fields with put request
  const request = axios.put(baseUrl, {
    old: oldObj,
    new: newObj
  })
  return request.then(response => response.data)
}

const del = (obj) => {
  // Delete from server with id sent with delete request
  const request = axios.delete(baseUrl, {data: obj})
  return request.then(response => response.data)
}


function App() {
const [user, setUser] = useState();

  // Test all
  /*
  getAll("muumipeikko").then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
  */
  /*
  // Test single user
  getUser(obj).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
  */

  /*
  // Test create user
  create(obj).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
  
  // Test update user
  update(obj, objUpdateName).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
  update(obj, objUpdatePass).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
    
  // Test delete user
  del(objUpdate).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
  */

  const handleLogin = (e) => {
    e.preventDefault();

    // CHANGE TO A POST FORMAT
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    }

    login(user).then(res => {
      if(res.id) {
        setUser(res)
      } else {
        console.log(res)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
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

  const handleLogout = () => {
    setUser()
  }

  const User = () => {
    if(user) {
      return (
        <>
        <p>Logged in as user {user.username}</p>
        <button onClick={handleLogout}>log out</button>
        </>
      )
    }
    return(
      <Login />
    )
  }

  return (
    <div className="App">
      <User />
      <Register />
    </div>
  )
}

export default App;
