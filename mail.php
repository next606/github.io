<?php



$method = $_SERVER['REQUEST_METHOD'];







    $project_name = trim($_POST["project_name"]);

    $admin_email  = trim($_POST["admin_email"]);

    $form_subject = trim($_POST["form_subject"]);

    $name =  trim($_POST["name"]);

    $phone = trim($_POST["phone"]);



	$message = "Заявка с сайта tk-dom.ru </br></br> Имя: ".$name."</br>"."Телефон: ".$phone;

/* $message = "Имя: ".$name."</br>"."Телефон: ".$phone; */





function adopt($text) {

    return '=?UTF-8?B?'.Base64_encode($text).'?=';

}



$headers = "MIME-Version: 1.0" . PHP_EOL .

"Content-Type: text/html; charset=utf-8" . PHP_EOL .

'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .

'Reply-To: '.$admin_email.'' . PHP_EOL;



mail($admin_email, adopt($form_subject), $message, $headers );