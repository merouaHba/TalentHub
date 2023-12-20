<?php
$hostname = "localhost";
$username = "root";
$password = "root";

$dsn = "mysql:host=localhost;charset=utf8mb4";

try {
	$pdo = new PDO($dsn, $username, $password);

	if ($pdo) {
        $DDL = [
        "CREATE DATABASE IF NOT EXISTS talent;",
        "CREATE TABLE IF NOT EXISTS User(id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(10) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(60) NOT NULL,name VARCHAR(50) NOT NULL, resume BLOB);",
        "CREATE TABLE IF NOT EXISTS Company(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) NOT NULL, location VARCHAR(20) NOT NULL);",
        "CREATE TABLE IF NOT EXISTS Offer(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) NOT NULL, location VARCHAR(20) NOT NULL,available BOOLEAN NOT NULL ,FOREIGN KEY (CompanyID) REFERENCES Company(id));",
        "CREATE TABLE IF NOT EXISTS Application(id INT PRIMARY KEY AUTO_INCREMENT,FOREIGN KEY (StudentID) REFERENCES Student(id) ,FOREIGN KEY (OfferID) REFERENCES Offer(id) ,FOREIGN KEY (CompanyID) REFERENCES Company(id));"
    ];
    foreach($DDL as $command)
    {
        $pdo->exec($command);
    }
      
	}
} catch (PDOException $e) {
	echo $e->getMessage();
}




?>