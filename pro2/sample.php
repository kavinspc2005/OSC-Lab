<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill</title>
</head>
<body>

<form method="post">

<?php
if (isset($_POST['units'])) {

    $units = $_POST['units'];

    if ($units <= 100) {
        $bill = $units * 5;
    }
    elseif ($units <= 200) {
        $bill = (100 * 5) + (($units - 100) * 10);
    }
    elseif($units >200) {
        $bill = (100 * 5) + (100 * 10) + (($units - 200) * 15);
    }

    echo( "AMOUNT" . $bill . "<br>");
}
?>

ENTER UNITS CONSUMED

<input type="number" name="units" required>

<input type="submit" value="Calculate">

</form>

</body>
</html>