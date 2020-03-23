<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Contribute</title>

    <link rel="stylesheet" type="text/css" href="/contact/contact.css">
    <link rel="stylesheet" type="text/css" href="/css/nav.css">
    <!-- <link rel="stylesheet" type="text/css" href="/css/style.css"> -->

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
    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.7/dist/js/uikit.min.js"></script>


    <!-- <meta name='viewport' content='initial-scale=1, viewport-fit=cover'> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--1:1 forhold til hardware pixels og Device Independent pixels(DIP)-->
    <meta name="description" content="Arctic World Archive - Contribute">
    <!-- Hotjar Tracking Code for https://www.arcticworldarchive.org -->
    <script>
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1570115, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-152803977-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
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
    <span id="hamburger" class="hamburger flex-parent" onclick="openNav()" style="color:black;">&#9776;</span>
    <!--Hamburger ikonet, når den trykkes på kjører openNav()-->

    <section class="contact flex-parent">
        <div class="flex-parent bg-img" style="background-image:url('/assets/snowy.jpg')">
        </div>
    </section>


    <div class="uk-container uk-margin-large-top uk-margin-large-bottom uk-flex uk-flex-wrap uk-flex-wrap-around uk-flex-between uk-flex-middle">
        <div class="uk-flex uk-flex-column uk-width-1-3@m">
            <h1 style="font-family:'LyonDisplay-Light',sans-serif; font-size:4rem; font-weight: 100; color:#262626;">Contribute</h1>
            <p style="font-family: 'LyonDisplay-Regular',sans-serif; font-size:20px; color: #7D7773;">
                Do you have valuable information you want to store in the safest place in the world for a long time?
                <br><br>
                AWA accepts deposits that are globally significant for the benefit of future generations, as well as
                information that is significant to your organisation or to you individually.
                <br><br>
                AWA is a digital archive, and we can store any kind of digital file or object whether it’s a music file,
                a database, a 3D virtualization or a document.
                <br><br>
                If you have information in an analogue or physical format, we can provide digitisation as part of the
                project. We do not store analogue items or paper documents.
                <br><br>
                The Arctic World Archive offers several different storage plans for your information.
                <br><br>
                You can choose to store information for 5, 10 or 25 year and in some cases for perpetuity. We will help
                find your suitable time frame.
                <br><br>
                Please fill in the contact form below and we will get in touch with a proposal.
            </p>
        </div>

        <div class="uk-margin uk-margin-medium-top uk-width-1-2@m">
            <!-- Contact Form -->
            <form action="contactform.php" method="post">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend" style="font-family: 'LyonDisplay-Regular',sans-serif;font-size:35px;">Send us a message</legend>

                    <!-- Full name -->
                    <!-- <label class="uk-form-label">Full name</label> -->
                    <div class="uk-margin">
                        <!-- <legend class="uk-legend">Full name</legend> -->
                        <label class="uk-form-label">Full name</label>
                        <input class="uk-input" type="text" name="name" placeholder="Full Name">
                    </div>

                    <!-- Email -->
                    <!-- <legend class="uk-legend">Your E-Mail</legend> -->
                    <div class="uk-margin">
                        <label class="uk-form-label">Your E-mail</label>
                        <input class="uk-input" type="text" name="mail" placeholder="E-Mail">
                    </div>

                    <!-- Phone number -->
                    <div class="uk-margin">
                        <!-- <legend class="uk-legend">Your telephone number</legend> -->
                        <label class="uk-form-label">Your telephone number</label>
                        <input class="uk-input" type="tel" name="phone"
                            placeholder="Phone">
                    </div>

                    <!-- Type of information -->
                    <div class="uk-margin">
                        <!-- <legend class="uk-legend">Type of information</legend> -->
                        <label class="uk-form-label">Type of information</label>
                        <input class="uk-input" type="text" name="type"
                            placeholder="Type of information">
                    </div>

                    <!-- Amount of information -->
                    <div class="uk-margin">
                        <!-- <legend class="uk-legend">Amount (Size in GB) of information</legend> -->
                        <label class="uk-form-label">Amount (Size in GB) of information</label>
                        <input class="uk-input" type="text" name="amount"
                            placeholder="Amount (Size in GB) of information">
                    </div>

                    <!-- Desired length of storage -->
                    <div class="uk-margin">
                        <!-- <legend class="uk-legend">Desired length of storage</legend> -->
                        <label class="uk-form-label">Desired length of storage</label>
                        <input class="uk-input" type="text" name="length"
                            placeholder="Desired length of storage">
                    </div>

                    <!-- <div class="uk-margin">
                        <textarea class="uk-textarea" rows="3" name="message" placeholder="Message"></textarea>
                    </div> -->

                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label><input class="uk-checkbox" type="checkbox" onclick="checkCheckbox(this)"/>I agree to the AWA <a href="https://www.piql.com/privacy-notice/">privacy policy</a>
                            and understand that my data will be used for contact and sales purposes.</label>
                    </div>

                    <button class="uk-button uk-button-primary" type="submit" name="submit" disabled>Send Email</button>
                </fieldset>
            </form>
        </div>
    </div>


    <footer>
        <div>
            <img src="/assets/AWA_Logo_Negativ_RGB.png" class="footer-logo">
        </div>

        <div>
            <ul>
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/memories/">
                    <li>Memories</li>
                </a>
                <a href="/contribute/">
                    <li>Contribute</li>
                </a>
                <a href="/news/">
                    <li>News</li>
                </a>
                <a href="/about/">
                    <li>About</li>
                </a>
                <a href="/contact/">
                    <li>Contact</li>
                </a>
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
            <a href="https://www.facebook.com/ArcticWorldArchive/" target="_blank"><i
                    class="fab fa-facebook-f fa-2x"></i></a>
            <a href="https://www.linkedin.com/company/arctic-world-archive/" target="_blank"><i
                    class="fab fa-linkedin fa-2x"></i></a>
        </div>
    </footer>

    <script src="/js/script.js"></script>
    <script>
        function checkCheckbox(checkbox) {
            var button = document.querySelector("button");
            if (checkbox.checked) {
                button.removeAttribute("disabled");
            } else {
                button.setAttribute("disabled", "");
            }
        }

        function checkCheckbodx() {
            var b = document.querySelector("button");
            console.log(b);

            var atr = b.getAttribute("button");
            console.log(atr);

            if (b.getAttribute("button") === null) {
                console.log("Checked")
            }

            // if (b.getAttribute(b) === "disabled") {
            //     b.removeAttribute("disabled");
            // } else if (b.getAttribute()) {
            //     b.setAttribute = "disabled";
            // }
            // console.log(b.getAttribute());
        }
    </script>
</body>

</html>