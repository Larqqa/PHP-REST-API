# PHP REST API

This is a full login system with registration, username change, and password change built with PHP. Authentication is checked on login, and users are given a secret 30 character md5 hash key.
The server side works as a RESTful Web service and can be operated through HTML Requests
  * GET can be used to find users based on username (?username=foobar)
  * POST is used to create, delete, and login 
    * create = {action: 'create', obj: {username: foo, password: bar}}
    * delete = {action: 'delete', obj: {id: foo, loginKey: bar}}
    * login = {action: 'login', obj: {username: foo, password: bar}} rerurns username, id, and loginKey
  * PUT is used to edit username and password
   * username = {username: foo, id: bar, loginKey: baz}
   * password = {id: foo, password: bar, newPassword: baz, loginKey: bat}
* Access to server files is blocked using a .htaccess file in actions folder. User data is stored in actions test.json, which mocks a noSQL database. A Batabase would be simple to add and update, as the actions are made using file read write actions. Replacing these with db read write would have the same funtionality.

Front end is built using React and Axios is used to send HTML Requests.
