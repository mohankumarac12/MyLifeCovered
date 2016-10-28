<%@include file="header.jsp" %>

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
            				<p>See our full <a href="calculator.do">Calculator</a>.</p>
            				<form>
            						<select name="coverageAmount" id="coverageAmount" class="coverageamt-select">
                                    <option value="">Amount</option>
                                    <option value="25">$25</option>
                                    <option value="30">$30</option>
                                    <option value="35">$35</option>
                                    <option value="40">$40</option>
                                    <option value="45">$45</option>
                                    <option value="50">$50</option>
                                    <option value="60">$60</option>
                                    <option value="70">$70</option>
                                    <option value="80">$80</option>
                                    <option value="90">$90</option>
                                    <option value="100">$100</option>
                                </select>
            					<span>/ month</span>
            					<input type="submit" value="Go">
            				</form>
            			</div>
            			<a href="life-help.do" class="secondary-container">
            				<h5>Help Me Determine <br>My Coverage</h5>
            			</a>
            			<a href="life-need.do" class="secondary-container">
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
    				<a href="blood.do" id="blood" class="tile">
    					<h3>Athletic Blood Profile</h3>
    				</a>
    				<a href="life-help.do" id="life" class="tile active">
    					<h3>Life Insurance for the Healthy</h3>
    				</a>
    			</div>
    		</div>
    	</div>
    </section>
</div>

<%@include file="footer.jsp" %>