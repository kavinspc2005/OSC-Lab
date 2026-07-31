<?php
$servername = 'localhost';
$username   = 'root';     // default username
$password   = 'KAVIN9965';         // default password is empty
$database   = 'demo';
$port       = 3306;

$conn = mysqli_connect($servername, $username, $password, $database, $port);

if ($conn) {
    echo ("DB connected");
} else {
        echo("database not connected");
}
?>
