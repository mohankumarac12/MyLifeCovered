<%@include file="header.jsp" %>
<div id="life_help" class="background-wrap child-landing life-landing">
	<section id="life_help_hero" class="cover text-center">
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
            				<h4>Help me determine <br>my coverage</h4>
            				<p>We recommened 8-10x your salary for optimal coverage.</p>
            				<p>See our full <a href="calculator.do">Calculator</a>.</p>
            				<form>
            					<input type="text" pattern="[0-9]*" id="annualIncomeId" name="annualIncome" placeholder="Annual Income">
            					<input type="submit" onclick="" value="Go">
            				</form>
            			</div>
            			<a href="life-need.do" class="secondary-container">
            				<h5>I Know How Much <br>I Need</h5>
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