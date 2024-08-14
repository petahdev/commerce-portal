<?php
Include 'connect.php';
Session_start();

If ($_SERVER["REQUEST_METHOD"] == 
"POST") {
    If (isset($_POST['action']) && $_POST['action'] == 'signup') {
        // Handle user registration
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $name, $email, $password);

        If ($stmt->execute()) {
            header("Location: index.php");
            echo "Registration successful!";
           
        } else {
            Echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } elseif (isset($_POST['action']) && $_POST['action'] == 'signin') {
        // Handle user login
        $email = $_POST['email'];
        $password = $_POST['password'];

        $sql = "SELECT id, name, password FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        If ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $name, $hashed_password);
            $stmt->fetch();

            If (password_verify($password, $hashed_password)) {
                $_SESSION['user_id'] = $id;
                $_SESSION['user_name'] = $name;
                header("Location: dashboard1.php");
                exit();
            } else {
                echo "Invalid password.";
            }
        } else {
            echo "No user found with that email address.";
        }

        $stmt->close();
    }
}

$conn->close();
?>

