<html class="no-js" lang="">
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>MY LIFE COVERED&trade;</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="resources/images/favicon.ico" rel="shortcut icon">
       
        <!--[if IE 9]>
        <link rel="stylesheet" href="resources/css/ie9.css">
        <![endif]-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
         <script src="https://use.typekit.net/yty8keo.js"></script>
        <script>
      	//Woopra Domanin name
        var domainName = '<spring:eval expression="@propertyConfigurer.getProperty('domain.name')" />';
        
        try {
        Typekit.load({
        async: false
        });
        } catch (e) {}
        </script>
        <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-79521976-1', 'auto');
        ga('send', 'pageview');
        </script>
        <script>
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1064726673573667');
        fbq('track', "PageView");</script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1064726673573667&ev=PageView&noscript=1"
        /></noscript>
        </script>
    </head>
    <body>
    <%@include file="header.jsp" %>
<div id="landing" class="background-wrap">
    <a class="prev slide-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
    <ul id="background_slider">
        <li id="bgd_slide1" data-tile="blood" class="bgd-slide active"></li>
        <li id="bgd_slide2" data-tile="life" class="bgd-slide"></li>
        <li id="bgd_slide3" data-tile="everplans" class="bgd-slide"></li>
        <li id="bgd_slide4" data-tile="blood" class="bgd-slide"></li>
        <li id="bgd_slide5" data-tile="life" class="bgd-slide"></li>
        <li id="bgd_slide6" data-tile="everplans" class="bgd-slide"></li>
    </ul>
    <a class="next slide-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <section id="landing_hero" class="cover text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ul id="text_slider">
                        <li id="txt_slide1" class="txt-slide active">
                            <h1>Your Health Is A Priority</h1>
                            <p>Our athletic blood profile can show you what your blood says about your health and fitness. We'll tell you what you can do to improve areas of concern.</p>
                        </li>
                        <li id="txt_slide2" class="txt-slide">
                            <h1>You Work Hard. Let Us Reward You.</h1>
                            <p>Did you know that Life Insurers reward the fit and healthy with lower premiums? Significantly lower. For those that qualify, life insurance coverage can be purchased for about half the premium paid by "the average Joe."</p>
                        </li>
                        <li id="txt_slide3" class="txt-slide">
                            <h1>They Mean The World To You</h1>
                            <p>Have you prepared & stored all of your important information for easy retrieval should something unexpected happen to you? An Everplan life and legacy plan will provide clarity and direction for your loved ones at this most critical time.</p>
                        </li>
                        <li id="txt_slide4" class="txt-slide">
                            <h1>Are You Performing At Full Potential</h1>
                            <p>Our athletic blood profile can show you what your blood says about your health and fitness. Read our easy to understand explanations, or share the results with your doctor, & dial in strategies that help you improve. Actionable data is a week away!</p>
                        </li>
                        <li id="txt_slide5" class="txt-slide">
                            <h1>You Look Younger Than Your Age</h1>
                            <p>Why shouldn’t you? You work hard to stay in shape and active. Life insurers recognize that your lifestyle makes you a good insurance risk. How good? If you qualify, your premiums could be half that of the "Standard Non-Smoker." Let us provide you with up to 5 no-obligations quotes.</p>
                        </li>
                        <li id="txt_slide6" class="txt-slide">
                            <h1>What Would They Do Without You?</h1>
                            <p>Have you prepared & stored all of your important information for easy retrieval should something unexpected happen to you? An Everplan life and legacy plan will guide them through understanding your wishes, identifying your accounts, and locating important documents.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="landing_tiles" class="tiles">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a href="blood.do" id="blood" class="tile active">
                        <h3>Athletic <br>Blood Profile</h3>
                        <p>Knowledge is power. Learn how over 50 health markers can improve your performance.</p>
                    </a>
                    <a href="life-help.do" id="life" class="tile">
                        <h3>Term Life <br>Insurance</h3>
                        <p>Learn how your healthy and fit lifestyle could qualify you for up to 50% lower life insurance premiums.</p>
                    </a>
                    <a href="everplans.do" id="everplans" class="tile">
                        <h3>Life & Legacy <br>Planning</h3>
                        <p>Prepare yourself and your loved ones in the event anything should happen to you.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
</body>
<%@include file="footer.jsp" %>
</html>