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

const create = newObject => {
  // Send new object with post
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// Put requests reset the whole container object on back-end
// so they dont need to be separated with identifiers
const update = (newObject) => {
  // send object, with target id, update requested fields with put request
  const request = axios.put(baseUrl, newObject)
  return request.then(response => response.data)
}

const del = (id, newObject) => {
  // Delete from server with id sent with delete request
  const request = axios.delete(baseUrl, newObject)
  return request.then(response => response.data)
}


function App() {
  // Test object
  const obj = {
    target: 1,
    username: 'muumi',
    password: 'meemu',
  }

  // Test request
  del(obj).then(res => {
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
