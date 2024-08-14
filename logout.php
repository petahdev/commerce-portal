<?php
Session_start();
Session_destroy();
Header("Location: index.php");
Exit();
?>

