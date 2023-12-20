<!DOCTYPE html>
<html lang="en">
<head>
    <?php include("action.php"); ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    
    <form class="form" action="<?php registerForm() ?>" method="post">
        Username : <input type="text" name="user">
        Email : <input type="email" name="email">
        Password <input type="password" name="pass">
        <input type="submit" value="submit" name="submit">
    </form>
</body>
</html>