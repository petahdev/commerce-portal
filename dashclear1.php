



<?php
Session_start();
if (!isset($_SESSION['user_name'])) {
    header("Location: index.php");
    exit();
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mould tech agency</title>
    <link rel="stylesheet" href="stylesdash1.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></head>
<body>
    <main>
        <header class="headerr">
        <header class="header1">
            <ul>
               
                <a href="#associate"><li>Sign In</li></a>
                <a href="#terms"><li>Register</li></a>
                <a href="#"><li><?php echo htmlspecialchars($_SESSION['user_name']); ?></li></a>
                
                
            
            </ul>
                </header>
   
<header class="header2">
<ul>
    <a href="index.php"><li>Home</li></a>
    <a href="https://google.com"><li>About us</li></a>
    <a href="#terms"><li>Terms</li></a>
    <a href="#contact"><li>Contact</li></a>
    <a href="logout.php"><li>Logout</li></a>


    

</ul>
    </header>
</header>
    <div id="home" class="landing-page">
        <div class="landing-content">
        <h1> <?php echo htmlspecialchars($_SESSION['user_name']); ?>, Explore Weblabs tech</h1>
            <h6>Lorem ipsum dolor sit </h6>
            <div class="landing-buttons">
                <a href="signup.php" class="landing-btn">Sign Up</a>
                <a id="register-btn" class="landing-btn">Login</a>
            </div>
            <div class="registration-form" id="registration-form">
                <form action="register.php" method="post">
                    <h2>Register</h2>
                    <label for="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" required>
                    <label for="email">Valid Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <br>
                    <br>
                    <button style="background-color:rgb(255, 38, 0); color: white;" type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
    <script src="scripts1.js"></script>
</body>
</html>
