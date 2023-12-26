<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $firstName = $lastName = $email = $message = "";

        // sanitize input to prevent header injections
        if (isset($_POST['firstName'])) {
            $firstName = stripslashes(strip_tags(trim($_POST['firstName'])));
        }
        if (isset($_POST['lastName'])) {
            $lastName = stripslashes(strip_tags(trim($_POST['lastName'])));
        }
        if (isset($_POST['email'])) {
            $email = stripslashes(strip_tags(trim($_POST['email'])));
        }
        if (isset($_POST['message'])) {
            $message = stripslashes(strip_tags(trim($_POST['message'])));
        }

        // create email message
        $fullMessage = "Name: " . $firstName . " " . $lastName . "\n";
        $fullMessage .= "Email: " . $email . "\n";
        $fullMessage .= "Message: " . $message;

        // specify your email address
        $to = 'sethi.aarushi30@gmail.com';

        // specify email subject
        $subject = 'New Message from website';

        // specify headers
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // send email
        if(mail($to, $subject, $fullMessage, $headers)) {
            echo "Message sent successfully.";
        } else {
            echo "Message failed to send.";
        }
    }
?>