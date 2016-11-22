<%@include file="header.jsp" %>

<div id="life_need" class="background-wrap child-landing life-landing">
	<section id="life_know_hero" class="cover text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>YOU COULD SAVE UP TO <br>5O% ON YOUR PREMIUM.</h1>
                    <p>Life insurance can often be significantly less expensive for healthy and fit people. Do you measure up?</p>
                </div>
            </div>
            <div class="row">
            	<div class="col-md-12">
            		<div class="form-wrapper">
            			<div class="primary-container">
            				<h4>I know how much I need</h4>
            				<p>We recommened 8-10x your salary for optimal coverage.</p>
            				<p>See our full <a href="calculator.do">Calculator</a>.</p>
            				<form>
            					<select name="coverageAmount" id="coverageAmount" class="coverageamt-select">
                                    <option value="">Total Coverage</option>
                                    <option value="100000">$100,000</option>
                                    <option value="200000">$200,000</option>
                                    <option value="350000">$350,000</option>
                                    <option value="500000">$500,000</option>
                                    <option value="750000">$750,000</option>
                                    <option value="1000000">$1,000,000</option>
                                    <option value="1500000">$1,500,000</option>
                                    <option value="2000000">$2,000,000</option>
                                </select>
            					<input type="submit" value="Go">
            				</form>
            			</div>
            			<a href="life-help.do" class="secondary-container">
            				<h5>Help Me Determine <br>My Coverage</h5>
            			</a>
            			<a href="life-afford.do" class="secondary-container">
            				<h5>I Know What <br>I Can Afford</h5>
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
                        <h3>Athletic <br>Blood Profile</h3>
                    </a>
                    <a href="life-help.php" id="life" class="tile active">
                        <h3>Term Life <br>Insurance</h3>
                    </a>
                    <a href="everplans.php" id="emergency" class="tile">
                        <h3>Life & Legacy <br>Planning</h3>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<%@include file="footer.jsp" %>