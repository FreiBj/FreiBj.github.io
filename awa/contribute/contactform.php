<?php

    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mailFrom = $_POST['mail'];
        $phone = $_POST['phone'];
        
        $subject = "New Contribute page message - AWA";
        // $message = $_POST['message'];
        
        $type = $_POST['type'];
        $amount = $_POST['amount'];
        $length = $_POST['length'];


        $mailTo = "info@arcticworldarchive.org";
        $headers = "From: ".$mailFrom;

        $csv = $name.";".$mailFrom.";".$phone.";".$type.";".$amount.";".$length;
        $txt = "New Contribute page contact form message - AWA"."\n"."You have received an e-mail from ".$name." <".$mailFrom.">"."\n\n"."Name: ".$name."\n"."Email: ".$mailFrom."\n"."Phone: ".$phone."\n\n"."Type of information: ".$type."\n\n"."Amount (Size in GB) of information: ".$amount."\n\n"."Desired length of storage: ".$length."\n\n\n"."CSV: ".$csv;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.php?mailsend");
    }
?>