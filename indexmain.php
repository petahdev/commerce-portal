<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="styles1.css">
</head>
<body>

<header>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Help</a></li>
    </ul>
</header>

<div class="landing-image"></div>

<div class="form-container">
    <div class="buttons">
        <button onclick="toggleForm('signin')">Sign In</button>
        <button onclick="toggleForm('signup')">Sign Up</button>
    </div>
    
    <div id="signin-form">
        <p>Please sign in to continue</p>
        <form action="register.php" method="post">
            <input type="hidden" name="action" value="signin">
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="submit" value="Sign In">
        </form>
    </div>

    <div id="signup-form">
        <p>Please sign up to create an account</p>
        <form action="register.php" method="post">
            <input type="hidden" name="action" value="signup">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="submit" value="Sign Up">
        </form>
    </div>
</div>

<script>
    function toggleForm(formType) {
        var signinForm = document.getElementById('signin-form');
        var signupForm = document.getElementById('signup-form');
        
        if (formType === 'signin') {
            signinForm.querySelector('form').style.display = 'block';
            signupForm.querySelector('form').style.display = 'none';
        } 
        else if (formType === 'signup') {
            signupForm.querySelector('form').style.display = 'block';
            signinForm.querySelector('form').style.display = 'none';
        }
    }
</script>

</body>
</html>


