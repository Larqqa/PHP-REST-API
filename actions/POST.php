<?php
// Get POST data
$post = file_get_contents('php://input');
$postData = json_decode($post);

$dbUrl = './actions/test.json';

// Using a set action variable, select which operation to do

// If login action
if($postData->action === 'login') {

    // Check if username is found in database
    $key = isInData($data->names, 'username', $postData->obj->username);
    
    // if key was found
    if(isset($key)) {

        // Verify that password is correct
        if(password_verify($postData->obj->password, $data->names[$key]->password)) {

            // Make response object
            $postData = (object) [
                'id' =>  $data->names[$key]->id,
                'username' => $data->names[$key]->username
            ];

            // Encode and send response
            print_r(json_encode($postData, JSON_PRETTY_PRINT));

        } else { echo "Incorrect username & password combination!"; }
    } else { echo "No user by that name!"; }
    return false;
}

// If creating a new user
if($postData->action === 'create') {

    // Get user data to be added
    $postData = $postData->obj;

    if($postData->username  !== NULL && $postData->password  !== NULL) {

        // Hash password
        $postData->password = password_hash($postData->password, PASSWORD_BCRYPT);
        

        // If name and password are set
        $username = $postData->username;
        $password = $postData->password;
        
        // Check if username exists in database, and get index
        $key = isInData($data->names, 'username', $username);

        // If not, create new user
        if(!isset($key)) {
            $id = isset(end($data->names)->id) ? end($data->names)->id + 1 : 0;

            // Make new user object, id is last user added + 1
            $obj = (object) [
                'id' =>  $id,
                'username' => $username,
                'password' => $password
            ];

            // Add the user to db
            array_push($data->names, $obj);

            // Update data with updated copy of the array to avoid duplicates
            $data->names = array_values($data->names);

            // Update file
            file_put_contents("$dbUrl", json_encode($data, JSON_PRETTY_PRINT));

            // Send user object as response
            $res = (object) [
                'id' =>  $id,
                'username' => $username
            ];
            
            print_r(json_encode($res, JSON_PRETTY_PRINT));
            return false;
        } else {
            echo "The name ${username} is already in use! \n";
            return false;
        }
    } else { echo "No username or password given!\n"; }
    return false;
}

// If deleting a user
if($postData->action === 'delete') {

    // Get id to be removed
    $id = $postData->obj->id;

    // Get index in database
    $id = isInData($data->names, 'id', $id);
    
    // Get username
    $username = $data->names[$id]->username;

    // Remove from index
    unset($data->names[$id]);

    // Update data with updated copy of the array to avoid duplicates
    $data->names = array_values($data->names);

    // Update file
    file_put_contents("$dbUrl", json_encode($data, JSON_PRETTY_PRINT));

    echo "User ${username} deleted! Bye :(";
}
?>