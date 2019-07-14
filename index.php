<?php

// Allow from any origin

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");   // Set access from incoming source
    header('Access-Control-Allow-Credentials: true');                   // Allow responses to fronend ie. cookies etc.
    header('Access-Control-Max-Age: 86400');                            // Cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    // Id control request methods, allow GET POST PUT OPTIONS
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");         

    // if access request headers, allow access request headers 
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

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

$dbUrl = './actions/test.json';

// Get and decode data
$jsonData = file_get_contents($dbUrl);
$data = json_decode($jsonData);

// Init names if not found
if(!isset($data->names)) {
    $data = ['names' => []];

    // Update file
    file_put_contents($dbUrl, json_encode($data, JSON_PRETTY_PRINT));
}

// Select action
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        require_once './actions/POST.php';
        break;

    case 'GET':
        require_once './actions/GET.php';
        break;

    case 'PUT':
        require_once './actions/PUT.php';
        break;
    default:
        // Default should return nothing, as GET exists
        echo "Something went wrong, try some http requests and try again!";
        break;
}
?>