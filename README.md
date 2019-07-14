# PHP REST API

This is a full login system with registration, username change, and password change built with PHP.
* The server side works as a RESTful Web service and can be operated through HTML Requests
  * GET can be used to find users based on username (?username=foobar)
  * POST is used to create, delete, and login 
    * create = {action: 'create', obj: {username: foo, password: bar}}
    * delete = {action: 'delete', obj: {id: foo}}
    * login = {action: 'login', obj: {id: foo}})
  * PUT is used to edit username and password
   * username = {username: foo, id: bar}
   * password = {id: foo, password: bar, newPassword: baz}
* Access to server files is blocked using a .htaccess file in actions folder
* User data is stored in actions test.json, which mocks a noSQL database
* Front end is built using React and Axios is used to send HTML Requests
