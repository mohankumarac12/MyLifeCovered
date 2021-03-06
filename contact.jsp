<html class="no-js" lang="">

<body onload="changeVisiblityForQuote();">

	<!-- Header  -->
	<%@include file="header.jsp"%>

	<section id="contact-us" class="main-section">
		<div class="overlay"></div>
		<div class="container">
			<div class="row margin-bottom-m quote-progress">
				<div class="col-md-12">
					<h2 class="text-center">Contact Us</h2>
				</div>
				<div class="col-md-6 col-md-offset-3 margin-bottom-m">
					<p id="contact-us-intro-text" class="text-center">${contactusintrotext}</p>
					<p id="contact-us-intro-text" class="text-center">Fill out the
						form below and we'll be in touch.</p>
					<p id="contact-us-privacy-text" class="text-center">Our Privacy
						Policy can be found below.</p>
				</div>
				<div class="col-md-4 col-md-offset-4">
					<form action="" id="contact-form" name="contactForm">
						<div class="error-text"></div>
						<div class="success-text" style="font-size: 150%"></div>
						<span class="hide-contact-fields">
							<div class="inline-text required">
								<input required class=" " type="text" id="contact-form-name"
									name="contact-form-name" maxlength="25"> <label
									class=" " for="contact-form-name">Name</label>
							</div>
							<div class="inline-text required">
								<input required class=" " type="text" id="contact-form-email"
									name="contact-form-email"> <label class=" "
									for="contact-form-email">Email Address</label>
							</div>
							<div class="inline-text required ">
								<input class=" " type="text" pattern="[0-9]*"
									id="contact-form-phone" name="contact-form-phone"> <label
									class=" " for="contact-form-phone">Phone Number</label>
							</div>
							<div class="inline-text required margin-bottom-s">
								<input class=" " type="text" id="contact-form-best-time"
									name="contact-form-best-time" maxlength="25"> <label
									class=" " for="contact-form-best-time">Best Time To
									Call</label>
							</div>
							<div class="">
								<label style="font-size: 16px" for="contact-form-comments">Comments</label>
								<textarea id="contact-form-comments"
									name="contact-form-comments" rows="5" cols="55" maxlength="800">${contactuscommentstext}</textarea>
							</div>
							<div class="text-center">
								<br /> <input id="contact-form-submit" type="button"
									class="btn btn-primary" value="Submit"
									onclick="validateContactus()" wpvalue="submit">
							</div>
						</span>
					</form>
				</div>
			</div>
		</div>
	</section>
	<footer>
		<%@include file="footer.jsp"%>
	</footer>
</body>
</html>