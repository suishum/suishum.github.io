<?php
$errors = '';
$myemail = 'hello@suishum.com';
// throw error if any fields are empty
if (empty($_POST['name'])  || empty($_POST['email']) || empty($_POST['message'])) {
  $errors .= "\n Error: all fields are required";
  }
// store info in variables
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
// regex for email validation
if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)) {
  $errors .= "\n Error: Invalid email address";
  }

if (empty($errors)) {
  $to = $myemail;
  $email_subject = "Contact form submission: $name";
  $email_body =
  "You have received a new message. ".
  " Here are the details:\n Name: $name \n ".
  "Email: $email_address\n Message \n $message";
  $headers .= "Reply-To: $email_address";
  mail($to,$email_subject,$email_body,$headers);
  // set up contact form success message
  header('Location: ../index.php');
  }

?>
