<?php require_once('header.html'); ?>

	<section id="affordability_hero" class="section-photo cover text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>See how much you may qualify to save on life insurance, paying as low as $25 per month!</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                        <div class="form-wrapper">
                            <div class="primary-container">
                                <form>
                                    <div class="select-wrapper">
                                        <label for="affordablePremium">Preferred Payment</label>
                                        <select name="affordablePremium" id="affordablePremium" class="coverageamt-select afford-dropdown">
                                            <!-- <option value="">Amount</option> -->
                                            <option value="twentyfive">$25 per month</option>
                                            <option value="fifty">$50 per month</option>
                                            <option value="onehundred">$100 per month</option>
                                        </select>
                                    </div>
                                    <div class="select-wrapper">
                                        <label for="affordableAge">Age Range</label>
                                        <select name="affordableAge" id="affordableAge" class="coverageamt-select afford-dropdown">
                                            <!-- <option value="">Age</option> -->
                                            <option value="twentyfive">25-29</option>
                                            <option value="thirty">30-34</option>
                                            <option value="thirtyfive">35-39</option>
                                            <option value="forty">40-44</option>
                                            <option value="fortyfive">40-49</option>
                                            <option value="fifty">50+</option>
                                        </select>
                                    </div>
                                    <div class="select-wrapper">
                                        <label for="affordableGender">Gender</label>
                                        <select name="affordableGender" id="affordableGender" class="coverageamt-select afford-dropdown">
                                            <!-- <option value="">Gender</option> -->
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div class="secondary-container">
                                <p id="initialQuote">Based on the above, you may qualify for about <span id="totalCoverage" class="quoted-amount">$550,000</span> in coverage, and save close to <span id="totalSavings" class="quoted-amount">$10</span> per month over standard premium rates.<sup>*</sup>
                            </div>
                            <div class="gobutton-container">
                                <input type="button" class="btn btn-primary" value="Start My Quote" id="main-affordable-form" wpvalue="continue" onclick="return validatePremiumMlc();">
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    <section id="home-page-copy" class="cover main-section">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-7 margin-bottom-m" id="home-page-copy-container">
                    <p>I'm Todd Seabaugh, a CrossFit® Affiliate owner and athlete since 2008. While attending the 2016 Reebok CrossFit Games® in Carson, CA, I was blown away by the dedication and discipline I saw in each and every competitor. I decided shortly after to start promoting life insurance to adult athletes and other super-fit individuals to help them take advantage of higher coverage amounts and lower rates that may be available to them based on their individual health.</p>

                    <p>Because of this lifestyle, we are all stronger both physically and mentally. But family members need a recovery plan in case something happens to us. Today, I want to challenge you to get this done. Will you make the commitment to protect the ones you care about the most?</p>

                    <p class="small"><img src="resources/images/todd_seabaugh.png" style="width:187px;"><br>Todd Seabaugh, CrossFit® Affiliate Owner</p>
                    <small>All licensed trademarks are the property of their respective owners, who are not affiliated with MY LIFE COVERED™ and do not endorse its product and services.</small>
                </div>
                <div class="col-md-5 margin-bottom-m" id="home-page-aside-copy-container">
                    <h2>Need a quick rundown on insurance lingo?</h2>
                    <p>Quotes, rates, applications, blah blah blah. Let us help you <a href="basics.do">learn the basics</a>.</p>
                    <br>
                    <h2>Already know what you need?</h2>
                    <a href="quote.do" class="btn btn-primary martin-top-s">Get Started</a>
                </div>
            </div>
        </div>
    </section>

<?php require_once('footer.html'); ?>