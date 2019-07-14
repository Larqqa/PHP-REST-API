<?php
// Get user by username
if(isset($_GET['username'])) {
  $username = $_GET['username'];

  // Check if username is in database
  $key = isInData($data->names, 'username', $username);
  if(isset($key)) {

      // Prepare response object
      $res = (object) [
          'id' => $data->names[$key]->id,
          'username' => $data->names[$key]->username
      ];

      // Send data as response
      print_r(json_encode($res, JSON_PRETTY_PRINT));
  }
} else {
  // Default message
  echo "try using a HTML request to get data. You can also do a username search using ?username=name";
}
?>