<?php
// Get PUT data
$put = file_get_contents('php://input');
$putData = json_decode($put);

$dbUrl = './actions/test.json';

// If changing username
if(isset($putData->username)) {

    // Get new username and id
    $newUsername = $putData->username;
    $id = $putData->id;

    // Get index of id in db
    $id = isInData($data->names, 'id', $id);

    // Check if new username is already in use
    $checkNewName = isInData($data->names, 'username', $newUsername);
    if(isset($checkNewName)) {
        echo "Username ${newUsername} is already in use!\n";
        return false;
    } else {

        // Set new username
        $data->names[$id]->username = $newUsername;
    
        // Update data with updated copy of the array to avoid duplicates
        $data->names = array_values($data->names);

        // Update file
        file_put_contents($dbUrl, json_encode($data, JSON_PRETTY_PRINT));

        // Prepare response object
        $res = (object) [
            'id' => $data->names[$id]->id,
            'username' => $data->names[$id]->username
        ];

        // Send new user as response
        print_r(json_encode($res));
        return false;
    }
}

// If changing password
if(isset($putData->password)) {

    // Get id
    $id = $putData->id;

    // Get index of id in db
    $id = isInData($data->names, 'id', $id);

    // Verify user
    if(password_verify($putData->password, $data->names[$id]->password)) {

        // Hash new password
        $newPassword = password_hash($putData->newPassword, PASSWORD_BCRYPT);

        $data->names[$id]->password = $newPassword;

        // Update file
        file_put_contents($dbUrl, json_encode($data, JSON_PRETTY_PRINT));

        echo "Password was changed!";
        return false;
    } else { echo "Wrong password!"; }
    return false;
}
?>