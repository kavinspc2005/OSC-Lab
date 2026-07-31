<?php
include ("dp.php"); 
?>
<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO feedbacktbl(name,email,message) VALUES('$name','$email','$message')";

    if(mysqli_query($conn,$sql)){
        echo('<script>alert("feedback successfully submited")</script>');
    }else{
        echo("feedback not submited");
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method = "post">
    NAME 
    <input type="text" name="name" required><br>
    EMAIL 
    <input type="text" name="email" required><br>
    feedback
    <textarea name="message" row = "5" cols = "5"></textarea><br>

    <input type="submit" name = "submit">
    </form>
    <a href="dispaly.php">view data</a>

</body>
</html>