<?php require_once('header.html'); ?>

<div id="life_afford" class="background-wrap child-landing life-landing">
	<section id="life_afford_hero" class="cover text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>YOU COULD QUALIFY TO GET SIGNIFICANTLY MORE COVERAGE FOR YOUR PREMIUM DOLLAR. DO YOU QUALIFY?</h1>
                    <p>Fit and healthy people often get more coverage for the same price as standard rated individuals. Find out how much more.</p>
                </div>
            </div>
            <div class="row">
            	<div class="col-md-12">
            		<div class="form-wrapper">
            			<div class="primary-container">
            				<h4>I know how much I can afford</h4>
            				<p>See our full <a href="calculator.php">Calculator</a>.</p>
            				<form>
            					<select name="affordablePremium" id="affordablePremium" class="coverageamt-select afford-dropdown">
                                    <!-- <option value="">Amount</option> -->
                                    <option value="twentyfive">$25 per month</option>
                                    <option value="fifty">$50 per month</option>
                                    <option value="onehundred">$100 per month</option>
                                </select>
                                <select name="affordableAge" id="affordableAge" class="coverageamt-select afford-dropdown">
                                    <!-- <option value="">Age</option> -->
                                    <option value="twentyfive">25-29 years old</option>
                                    <option value="thirty">30-34 years old</option>
                                    <option value="thirtyfive">35-39 years old</option>
                                    <option value="forty">40-44 years old</option>
                                    <option value="fortyfive">45-49 years old</option>
                                    <option value="fifty">50+ years old</option>
                                </select>
                                <select name="affordableGender" id="affordableGender" class="coverageamt-select afford-dropdown">
                                    <!-- <option value="">Gender</option> -->
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <p id="initialQuote">Based on the above, you may qualify for about <span id="totalCoverage" class="quoted-amount">$550,000</span> in coverage, and save close to <span id="totalSavings" class="quoted-amount">$19</span> per month over standard premium rates.<sup>*</sup></p>
                                <input type="button" class="btn btn-primary" value="Start My Quote" id="main-affordable-form" wpvalue="continue" onclick="return validatePremiumMlc();">
            				</form>
            			</div>
            			<a href="life-help.php" class="secondary-container">
            				<h5>Help Me Determine <br>My Coverage</h5>
            			</a>
            			<a href="life-need.php" class="secondary-container">
            				<h5>I Know How <br>Much I Need</h5>
            			</a>
            		</div>
            	</div>
            </div>
        </div>
    </section>
    <section id="life_help_tiles" class="tiles child-tiles">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-12">
    				<a href="blood.php" id="blood" class="tile">
    					<h3>Athletic Blood Profile</h3>
    				</a>
    				<a href="life-help.php" id="life" class="tile active">
    					<h3>Life Insurance for the Healthy</h3>
    				</a>
    			</div>
    		</div>
    	</div>
    </section>
</div>

<?php require_once('footer.html'); ?>