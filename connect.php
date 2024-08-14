<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portal3";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
If ($conn->connect_error) {
    Die("Connection failed: " . $conn->connect_error);
}
?>
