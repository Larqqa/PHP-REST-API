<?php
/*
{"names":[
  {
    "id": 0,
    "username": "teemu",
    "password": "123test"
  },
  {
    "id": 2,
    "username": "meemu",
    "password": "123test"
  },
  {
    "id": 3,
    "username": "peemu",
    "password": "123test"
  },
  {
    "id": 4,
    "username": "leemu",
    "password": "123test"
  }
]}
*/

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

// Check if value is in a set key of the array, return the index from data
function isInData($arr, $key, $val) {
    foreach($arr as $index=>$obj) {
        if($obj->{$key} == $val) {
            return $index;
        }
    }
    return NULL;
}

// If action
    // Get and decode data
    $jsonData = file_get_contents('test.json');
    $data = json_decode($jsonData);

    print_r($_SERVER['REQUEST_METHOD']);

    $req = file_get_contents('php://input');
    $res = json_decode($req); 

    var_dump($req);

    // Check which action was selected
    switch (isset($_GET['action']) ? $_GET['action'] : NULL) {
        case 'create':

            // Delete object with id
            if(isset($_GET['name']) && isset($_GET['password'])) {
                $name = $_GET['name'];
                $password = $_GET['password'];
                
                // Check if id exists in data, and get index
                $key = isInData($data->names, 'username', $name);

                if (!$key) {
                    echo $name . $password;
                    $obj = (object) [
                        'id' =>  end($data->names)->id + 1,
                        'username' => $name,
                        'password' => $password
                    ];

                    // Delete the data from the index
                    array_push($data->names, $obj);

                    // Update data by updating the array with updated copy of the array
                    $data->names = array_values($data->names);

                    // Update file
                    file_put_contents("test.json", json_encode($data, JSON_PRETTY_PRINT));

                    // Get the name of the deleted object and echo message
                    $objName = $obj->username;

                    echo "User ${objName} added!\n\n";
                } else { echo "Name already in use \n\n"; }
            } else { echo "Something's missing\n\n"; }
            
            // Print json data to screen
            print_r(json_encode($data, JSON_PRETTY_PRINT));
            break;
        case 'read':
            if(isset($_GET['id'])) {
                $id = $_GET['id'];
                $key = isInData($data->names, 'id', $id);
                print_r(json_encode($data->names[$key], JSON_PRETTY_PRINT));
            } else { echo 'Wrong id'; }
            break; 
        case 'update':
            if(isset($_GET['id'])) {
                $id = $_GET['id'];
                $key = isInData($data->names, 'id', $id);
                $userObj = $data->names[$key];

                if(isset($_GET['username'])){
                    $isName = isInData($data->names, 'username', $_GET['username']);
                    if (!$isName) {
                        $userObj->username = $_GET['username'];
                        $newName = $userObj->username;
                        echo "Username changed to ${newName} \n";
                    } else { echo "New username is in use\n"; }
                }
                if(isset($_GET['oldPassword'])){
                    if ($userObj->password === $_GET['oldPassword']) {
                        $userObj->password = $_GET['password'];
                        echo "Password changed!\n";
                    } else { echo "Passwords don't match"; }
                }

                // Update data by updating the array with updated copy of the array
                $data->names = array_values($data->names);

                // Update file
                file_put_contents("test.json", json_encode($data, JSON_PRETTY_PRINT));
            } else { echo 'Wrong id'; }
            break;
        case 'delete':

            // Delete object with id
            if(isset($_GET['id'])) {
                $id = $_GET['id'];

                // Check if id exists in data, and get index
                $key = isInData($data->names, 'id', $id);

                if (isset($obj)) {

                    // Delete the data from the index
                    unset($data->names[$key]);

                    // Update data by updating the array with updated copy of the array
                    $data->names = array_values($data->names);

                    // Update file
                    file_put_contents("test.json", json_encode($data, JSON_PRETTY_PRINT));

                    // Get the name of the deleted object and echo message
                    $objName = $data->names[$key]->username;
                    echo "User ${objName} deleted!\n\n";
                } else { echo "ID not in array!\n\n"; }
            }
            
            // Print json data to screen
            print_r(json_encode($data, JSON_PRETTY_PRINT));
            break;
        default:

            // Print json data to screen
            print_r($jsonData);
            break;
    }

?>