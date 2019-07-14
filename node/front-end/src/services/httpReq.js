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

export default { search, login, create, update, del }