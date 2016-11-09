<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      $to      = $_POST['email'];
      $name    = $_POST['name'];
      $query = $_POST['message'];
      $subject = "Query from " . $name;
      $message = "You're received a query from " . $name . ", their email address is " . $to . ".\r\nThey said:\r\n" . $query;
      $headers = 'From: nickturner57@gmail.com' . "\r\n" .
                 'Reply-To: nickturner57@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

      echo $to;
      echo $name;
      echo $query;
      echo $subject;
      echo $message;
      echo $headers;

      mail($to, $subject, $message, $headers);

    ?>

  </body>
</html>
