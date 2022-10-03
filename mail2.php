<?php
$to = "preensikl@mail.ru"; 
$name = clear_data($_POST['name']);
$email = clear_data($_POST['email']);
$text = clear_data($_POST["text"]);

$subject = "Обращение";
// $headers .= "From: mihailmuller.site\r\n";
// $headers .= "X-Mailer :PHP/". phpversion();


function clear_data($val){
        $val = trim($val);
        $val = stripslashes($val);
        $val = htmlspecialchars($val);
        return $val;
}

$messege = "Имя: ". $name."\n" . "Email: ". $email. "\n" . "Сообщение: " .$text;
echo $message

mail($to, $subject, $message, $headers);

if (mail($to, $subject, $message))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>