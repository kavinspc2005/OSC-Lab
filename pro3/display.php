<?php
include ('dp.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>MESSAGE</th>
        </tr>
        <?php
        $sql = "SELECT * FROM feedbacktbl";
        $result = mysqli_query($conn,$sql);
         while($row=mysqli_fetch_assoc($result)){
                echo("<tr>");
                echo("<td>".$row['id']."</td>");
                echo("<td>".$row['name']."</td>");
                echo("<td>".$row['email']."</td>");
                echo("<td>".$row['message']."</td>");
                echo("</tr>");
            }
           ?>

        
    </table>
    <a href="index.php">Back</a>
</body>
</html>