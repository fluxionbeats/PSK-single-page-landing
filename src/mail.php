<?php
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
$name = $_POST['name'];
$tel = $_POST['tel'];

$mail = new PHPMailer(true);

//Enable SMTP debugging.
$mail->SMTPDebug = 3;
$mail->CharSet = 'UTF-8';
//Set PHPMailer to use SMTP.
$mail->isSMTP();
//Set SMTP host name
$mail->Host = 'ssl://smtp.mail.ru';
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;
//Provide username and password
$mail->Username = "89206134166@inbox.ru";
$mail->Password = "Eiwd5pmeqUzYXNqnvc4B";
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "SSL";
//Set TCP port to connect to
$mail->Port = 465 ;

$mail->From = "89206134166@inbox.ru";
$mail->FromName = "ООО «Промстройкомплект»";

$mail->addAddress("89206134166@inbox.ru", "Имя менеджера");

$mail->isHTML(true);

$mail->Subject = "Запрос на обратный звонок: " . $name;
$mail->Body = "<h1 style='font-size:24px;'>Пользователь оставил заявку на обратный звонок</h1>
<p style='font-size:16px;'>Имя: <b>" . $name . "</b></p>
<p style='font-size:16px;'>Телефон: <a href='tel:" . $tel . "'>" . $tel . "</a>";
$mail->AltBody = "This is the plain text version of the email content";

try {
    $mail->send();
    echo "Message has been sent successfully";
} catch (Exception $e) {
    echo "Mailer Error: ";
}
