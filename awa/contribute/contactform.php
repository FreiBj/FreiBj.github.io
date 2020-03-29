<?php

    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $org = $_POST['org'];
        $mailFrom = $_POST['mail'];
        $phone = $_POST['phone'];
        
        $subject = "New Contribute page message - AWA";
        // $message = $_POST['message'];
        
        $type = $_POST['type'];
        $amount = $_POST['amount'];
        $length = $_POST['length'];


        $mailTo = "info@arcticworldarchive.org";
        $headers = "From: ".$mailFrom;

        // Variables for the reponse confirmation message
        $reponseTo = $mailFrom;
        $responseHeader = "From: ".$mailTo;
        $subjectResponse = "We've recieved your message - AWA";
        $txtReponse = "Thank you for reaching out to us!"."\n\n"."We have received your information and will get in touch with you soon."."\n\n"."Best regards,\nThe AWA team";

        $csv = $name.";".$mailFrom.";".$phone.";".$type.";".$amount.";".$length;
        $txt = "New Contribute page contact form message - AWA"."\n"."You have received an e-mail from ".$name." <".$mailFrom.">"."\n\n"."Name: ".$name."\n"."Organisation: ".$org."\n"."Email: ".$mailFrom."\n"."Phone: ".$phone."\n\n"."Type of information: ".$type."\n\n"."Amount (Size in GB) of information: ".$amount."\n\n"."Desired length of storage: ".$length."\n\n\n"."CSV: ".$csv;

        mail($mailTo, $subject, $txt, $headers);

        mail($reponseTo, $subjectResponse, $txtReponse, $responseHeader);

        header("Location: index.php?mailsend");
    }
?>