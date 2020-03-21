<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Contribute</title>

        <link rel="stylesheet" type="text/css" href="/contact/contact.css">
        <link rel="stylesheet" type="text/css" href="/css/nav.css">

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#1e1e2e">
        <meta name="theme-color" content="#ffffff">

        <!-- Add icon library -->
        <script src="https://kit.fontawesome.com/3f79689e7f.js"></script>
        <!-- UIkit CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.3.7/dist/css/uikit.min.css" />
        

        <!-- <meta name='viewport' content='initial-scale=1, viewport-fit=cover'> -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--1:1 forhold til hardware pixels og Device Independent pixels(DIP)-->
        <meta name="description" content="Arctic World Archive - Contribute">
        <!-- Hotjar Tracking Code for https://www.arcticworldarchive.org -->
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1570115,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        </script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152803977-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-152803977-1');
        </script>
    </head>

    <body>
        <div id="myNav" class="overlay">
          <!--<a style="cursor:pointer" class="closebtn" onclick="closeNav()">&times;</a>-->
          <div class="overlay-content">
            <a style="cursor:pointer" onclick="closeNav()" class="closeButton">&times;</a>
            <a href="/">Home</a>
            <a href="/memories/">Memories</a>
            <a href="/contribute/">Contribute</a>
            <a href="/news/">News</a>
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
          </div>
        </div>
        <span id="hamburger" class="hamburger flex-parent" onclick="openNav()" style="color:black;">&#9776;</span> <!--Hamburger ikonet, når den trykkes på kjører openNav()-->

        <section class="contact flex-parent">
          <div class="flex-parent bg-img" style="background-image:url('/assets/snowy.jpg')">
                <!-- <h1>Contact Us</h1> -->
          </div>


        <div class="contact-sec flex-col">
          <h1>Contribute</h1>
          <p>
            For enquiries on how to contribute data or sponsor cultural heritage projects, <br> email: <a href="mailto:info@arcticworldarchive.org">info@arcticworldarchive.org</a>
            <br><br>
            <b>Arctic World Archive</b>
            <br>
            Grønland 56, Drammen
            <br>
            Norway
          </p>
        </div>

        <div class="uk-container">
          <form action="contactform.php" method="post">
            <fieldset class="uk-fieldset">
              <legend class="uk-legend">Contribute Form</legend>
        
              <div class="uk-margin">
                <input class="uk-input" type="text" name="name" placeholder="Full Name">
              </div>

              <div class="uk-margin">
                <input class="uk-input" type="text" name="mail" placeholder="Your E-Mail">
              </div>

              <div class="uk-margin">
              <input class="uk-input" type="text" name="subject" placeholder="Subject">
              </div>
        
              <div class="uk-margin">
                <textarea class="uk-textarea" rows="3" name="message" placeholder="Message"></textarea>
              </div>
        
              <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input class="uk-checkbox" type="checkbox" checked />I agree to the AWA privacy policy and understand that my data will be used for contact and sales purposes.</label>
              </div>

              <button class="uk-button uk-button-primary" type="submit" name="submit">Send Email</button>
            </fieldset>
          </form>
        </div>


        <footer>
            <div>
                <img src="/assets/AWA_Logo_Negativ_RGB.png" class="footer-logo">
            </div>

            <div>
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="/memories/"><li>Memories</li></a>
                    <a href="/contribute/"><li>Contribute</li></a>
                    <a href="/news/"><li>News</li></a>
                    <a href="/about/"><li>About</li></a>
                    <a href="/contact/"><li>Contact</li></a>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Arctic World Archive</li>
                    <li>Grønland 56</li>
                    <li>3045 Drammen</li>
                    <li>Norway</li>
                </ul>
            </div>

            <div>
                <a href="https://www.facebook.com/ArcticWorldArchive/" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a>
                <a href="https://www.linkedin.com/company/arctic-world-archive/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            </div>
        </footer>

        <script src="/js/script.js"></script>
    </body>
</html>
