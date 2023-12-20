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
			var_dump($_POST);
		}

	}
}
?>
