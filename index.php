<?php
// password_hash("text123", PASSWORD_DEFAULT);
// password_verify(input, user password in storage)

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");         

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
function authenticate($name, $pass) {
    if(isset($name) && isset($name)) {
        $username = $_GET['username'];

        $key = isInData($data->names, 'username', $username);
        if(isset($key)) {
            $password = password_verify($_GET['password'], $data->names[$key]->password);
        
            if($password) {
                echo "Auth ok\n";
            } else {
                echo "Auth not ok";
            }
        } else {
            echo "No user by name ${username}";
        }
    }
}

// If action
    // Get and decode data
    $jsonData = file_get_contents('test.json');
    $data = json_decode($jsonData);

    $req = file_get_contents('php://input');
    $res = json_decode($req); 

    //var_dump($req);

    // Check which action was selected
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'POST':
            echo "POST\n";
            $req = file_get_contents('php://input');
            $res = json_decode($req);
            $res->password = password_hash($res->password, PASSWORD_BCRYPT);
            
            // Add new user
            if(isset($res->username) && isset($res->password)) {
                $username = $res->username;
                $password = $res->password;
                
                // Check if id exists in data, and get index
                $key = isInData($data->names, 'username', $username);

                if(!isset($key)) {
                    echo "Username ${username} is valid \n";
                    $obj = (object) [
                        'id' =>  end($data->names)->id + 1,
                        'username' => $username,
                        'password' => $password
                    ];

                    // Delete the data from the index
                    array_push($data->names, $obj);

                    // Update data by updating the array with updated copy of the array
                    $data->names = array_values($data->names);

                    // Update file
                    file_put_contents("test.json", json_encode($data, JSON_PRETTY_PRINT));

                    echo "User ${username} added!\n\n";
                    break;
                } else {
                    echo "${username} is already in use! \n";
                    break;
                }
            } else { echo "Something's missing\n\n"; }
            
            break;
        case 'GET':
            echo "GET\n";
            
            // Update user with credentials
            if(isset($_GET['username']) && isset($_GET['password'])) {
                $username = $_GET['username'];

                $key = isInData($data->names, 'username', $username);
                if(isset($key)) {
                    $password = password_verify($_GET['password'], $data->names[$key]->password);
                
                    if($password) {
                        echo "Auth ok\n";
                    } else {
                        echo "Auth not ok";
                    }
                } else {
                    echo "No user by name ${username}";
                }
            }

            if(isset($_GET['id'])) {
                $id = $_GET['id'];
                $key = isInData($data->names, 'id', $id);
                if($key) {
                    print_r(json_encode($data->names[$key], JSON_PRETTY_PRINT));
                } else {
                    echo "No user by id: ${id}";
                }
            } else {
                //print_r(json_encode($data->names, JSON_PRETTY_PRINT));
            }
            break;
        case 'PUT':
            echo "PUT\n";
            $req = file_get_contents('php://input');
            $res = json_decode($req);
            
            // Update user with credentials
            if(isset($res->old->username) && isset($res->old->password)) {
                $username = $res->old->username;
                $password = $res->old->password;
                
                $key = isInData($data->names, 'username', $username);
                if($data->names[$key]->password === $password) {
                    echo "Auth ok\n";

                    if(isset($res->new->username)) {
                        $newUsername = $res->new->username;
                        $checkNewName = isInData($data->names, 'username', $newUsername);

                        if(isset($checkNewName)) {
                            echo "Username ${newUsername} in use\n";
                            break;
                        } else {
                            $data->names[$key]->username = $newUsername;
                        
                            // Update data by updating the array with updated copy of the array
                            $data->names = array_values($data->names);
        
                            // Update file
                            file_put_contents("test.json", json_encode($data, JSON_PRETTY_PRINT));
        
                            echo "Username changed to ${newUsername}!\n\n";
                            break;
                        }
                    }
                    if(isset($res->new->password)) {
                        $newPassword = $res->new->password;
                        $data->names[$key]->password = $newPassword;

                        // Update data by updating the array with updated copy of the array
                        $data->names = array_values($data->names);
        
                        // Update file
                        file_put_contents("test.json", json_encode($data, JSON_PRETTY_PRINT));

                        echo "Password updated";
                        break;
                    }
                } else { echo "Wrong credentials!"; }

            } else { echo "Something's missing\n\n"; }

            break;
        case 'DELETE':
            echo "DELETE\n";
            $req = file_get_contents('php://input');
            $res = json_decode($req);
            
            // Update user with credentials
            if(isset($res->username) && isset($res->password)) {
                $username = $res->username;
                $password = $res->password;
                
                $key = isInData($data->names, 'username', $username);
                if($data->names[$key]->password === $password) {
                    echo "Auth ok\n";

                    unset($data->names[$key]);

                    // Update data by updating the array with updated copy of the array
                    $data->names = array_values($data->names);
        
                    // Update file
                    file_put_contents("test.json", json_encode($data, JSON_PRETTY_PRINT));

                    echo "User ${username} deleted!";
                    break;
                }
            } else { echo "Wrong credentials!"; }
            
            break;
        default:

            // Print json data to screen
            print_r($jsonData);
            break;
    }
?>