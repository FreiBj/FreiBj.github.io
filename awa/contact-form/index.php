<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        main form {
            display: flex;
            flex-direction: column;
            width: 200px;
        }
    </style>
</head>

<body>

    <main>
        <p>Send E-Mail</p>

        <form action="contactform.php" method="post">
            <input type="text" name="name" placeholder="Full Name">
            <input type="text" name="mail" placeholder="Your E-Mail">
            <input type="text" name="subject" placeholder="Subject">
            <textarea name="message" placeholder="Message"></textarea>
            <button type="submit" name="submit">Send Email</button>
        </form>
    </main>


</body>

</html>