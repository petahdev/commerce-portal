<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mould tech agency</title>
    <link rel="stylesheet" href="registration-login.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></head>
<body>
    <main>
        <header class="headerr">
       
   
<header class="header2">
<ul>
<a href="index.php"><li>Home</li></a>
    <a href="login.php"><li>Login</li></a>
    <a href="signup.php"><li>Register</li></a>
    <a href="#contact"><li>Contact</li></a>
    

</ul>
    </header>
</header>
    <div id="home" class="landing-page">
        <div class="landing-content">
            <h1>Welcome to Weblabs Tech Agency</h1>
            <h6>Lorem ipsum dolor sit </h6>
            <div class="landing-buttons">
                <a id="register-btn" class="landing-btn">Login</a>
                <a href="signup.php" class="landing-btn">Sign up</a>


            </div>
            <div class="registration-form" id="registration-form">
            <form action="register.php" method="post">
               
<span style="color:rgb(250, 40, 3); margin-bottom:50px; font-size:20px;">Please sign in to continue </span>
                    <h2>Sign In</h2>
                    <input type="hidden" name="action" value="signin">
                    <label for="email">Email:</label>
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
    <script src="scripts.js"></script>
</body>
</html>
