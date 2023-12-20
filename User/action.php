<?php

function registerForm()
{
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		
		$username = htmlspecialchars($_POST["user"]);
		$email = htmlspecialchars($_POST["email"]);
		$password = htmlspecialchars($_POST["pass"]);
		$confirmedPassword = htmlspecialchars($_POST["passc"]);

		if(empty(trim($username)) || strlen($username) == 0 || empty(trim($password)) || strlen($password) == 0){
			header("Location: ./index.php");
			exit();
		}

		else
		{
			header("Location: ./login.php");
		}

	}
}

function loginForm()
{
	if($_SERVER["REQUEST_METHOD"] == "POST"){
		$email = htmlspecialchars($_POST["email"]);
		$password = htmlspecialchars($_POST["pass"]);
		if(empty(trim($email)) || strlen($email) == 0 || empty(trim($password)) || strlen($password) == 0 || $password == null || $email == null){
			header("Location: ./login.php");
			exit();
		}
		else {
			header("Location: ./dashboard.php");

		}
	}
}
?>
