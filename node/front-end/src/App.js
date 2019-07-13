import React from 'react'
import './App.css'
import axios from 'axios'

// API url
const baseUrl = "http://localhost/restful-api/index.php"

const getAll = () => {
  // Get all with get
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getUser = obj => {
  // Get all with get
  const request = axios.get(`${baseUrl}?username=${obj.username}&password=${obj.password}`)
  return request.then(response => response.data)
}

const create = newObject => {
  // Send new object with post
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Put requests reset the whole container object on back-end
// so they dont need to be separated with identifiers
const update = (oldObject, newObject) => {
  // send object, with target id, update requested fields with put request
  const request = axios.put(baseUrl, {
    old: oldObject,
    new: newObject
  })
  return request.then(response => response.data)
}

const del = (newObject) => {
  // Delete from server with id sent with delete request
  const request = axios.delete(baseUrl, {data: newObject})
  return request.then(response => response.data)
}


function App() {
  // Test object
  const obj = {
    username: 'muumi',
    password: 'kalle',
  }

  const objUpdate = {
    username: 'kille',
    password: 'kalle',
  }

  const objUpdateName = {
    username: 'kille'
  }
  
  const objUpdatePass = {
    password: 'kalle'
  }

  // Test all
  /*getAll().then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })*/
  
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

    getUser(user).then(res => {
      console.log(res)
    }).catch(error => {
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

  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  )
}

export default App;
