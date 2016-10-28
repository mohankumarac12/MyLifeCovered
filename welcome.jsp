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
	<section id="landing_hero" class="cover text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Work Hard. Be Rewarded. <br>Know Yourself & Protect Those You Love.</h1>
                    <p>Learn how to maximize the value of your fitness routine and how to protect your family if you can't.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="landing_tiles" class="tiles">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-12">
    				<a href="blood.do" id="blood" class="tile">
    					<h3>Athletic Blood Profile</h3>
    					<p>Knowledge is power. Learn how over 50 health markers can improve your performance.</p>
    				</a>
    				<a href="life-help.do" id="life" class="tile">
    					<h3>Term Life <br>Insurance</h3>
    					<p>Learn how your healthy and fit lifestyle could qualify you for up to 50% lower life insurance premiums.</p>
    				</a>
    			</div>
    		</div>
    	</div>
    </section>
</div>
</body>
<%@include file="footer.jsp" %>
</html>