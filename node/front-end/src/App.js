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

const getUser = id => {
  // Get all with get
  const request = axios.get(`${baseUrl}?id=${id}`)
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
    password: 'meemu',
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
  getAll().then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
  
  // Test single user
  getUser(20).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })

  getUser(2).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })

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

  return (
    <div className="App">
    </div>
  )
}

export default App;
