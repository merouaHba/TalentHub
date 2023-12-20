<?php
$hostname = "localhost";
$username = "root";
$password = "root";

$dsn = "mysql:host=localhost;charset=utf8mb4";

try {
	$pdo = new PDO($dsn, $username, $password);

	if ($pdo) {
        // creation of DataBase talent
        $pdo->exec("");
        $DDL = [
            "CREATE DATABASE IF NOT EXISTS talent;",
        "CREATE TABLE IF NOT EXISTS User(id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(10) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(60) NOT NULL,name VARCHAR(50) NOT NULL, resume BLOB);",
        // Offer  (id, name, Company(FK), )
        ];
	}
} catch (PDOException $e) {
	echo $e->getMessage();
}




?>