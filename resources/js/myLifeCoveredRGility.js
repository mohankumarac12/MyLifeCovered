var coverageValues = new Array();
	for (var i = 100000, j = 0; i<=500000 ; i+=25000, j++){
		coverageValues[j] = i;
	}
	for (var i = 550000, j = coverageValues.length; i<=1000000 ; i+=50000, j++){
		coverageValues[j] = i;
	}
	for (var i = 1100000, j = coverageValues.length; i<=2000000 ; i+=100000, j++){
		coverageValues[j] = i;
	}

	function populateRecommendedCoverageSlider(selAmnt) {
		$("#preselected-coverage").slider({
			animate : false,
			min : 0,
			max : coverageValues.length - 1,
			step : 1,
			orientation : "horizontal",
			disabled: true,
			slide : function(event, ui) {
				event.preventDefault();
				return false;
			},
			change : function(e, ui) {
				e.preventDefault();
				return false;
			}
		});
		var range = getCoverageRange(coverageValues.indexOf(parseInt(selAmnt)));
		$('.recom-cov-slider-range').css('left' , (range) + '%');
	}

	function populateRecommendedTermSlider(selAmnt) {
		$("#preselected-term").slider({
			animate : false,
			min : 10,
			max : 30,
			step : 5,
			orientation : "horizontal",
			disabled: true,
			slide : function(event, ui) {
				event.preventDefault();
				return false;
			},
			change : function(e, ui) {
				e.preventDefault();
				return false;
			}
		});

		var range = getTermRange(selAmnt);
		$('.recom-term-slider-range').css('left' , (range) + '%');
	}

	function getCoverageRange(val){
		var range = 0;
		var stepAmnt = 1;
		var minAmnt = 0;
		var maxAmnt = coverageValues.length - 1;
		
		var minMinMax = maxAmnt - minAmnt;
		minMinMax = minMinMax / stepAmnt;
		var minSelMin = val - minAmnt;
		if(minSelMin !== 0){
			minSelMin = minSelMin / stepAmnt;
			range = minSelMin / minMinMax;
			range = range * 100;
		}
		return range;
	}

	function getTermRange(val){
		
		var range = 0;
		var stepAmnt = parseInt(5);
		var minAmnt = parseInt(10);
		var maxAmnt = parseInt(30);
		
		var minMinMax = maxAmnt - minAmnt;
		minMinMax = minMinMax / stepAmnt;
		var minSelMin = val - minAmnt;
		if(minSelMin !== 0){
			minSelMin = minSelMin / stepAmnt;
			range = minSelMin / minMinMax;
			range = range * 100;
		}
		return range;
	}

	function getIKnowQuote(demographicData, successCallback, formId,allowMarketing,phone) {
		var USCitizen = true, PolicyOwner = true, ReplacementPolicy=true, currentIncome = 0,selectedPath = demographicData['path_selected'], recCoverage=0;
		if(demographicData['us_citizen'] == undefined)
			USCitizen = false;
		if(demographicData['policy_owner'] == undefined)
			PolicyOwner = false;
		if(demographicData['not_replacing'] == undefined)
			ReplacementPolicy = false;
		if(demographicData['current-income'] !== undefined)
			currentIncome = demographicData['current-income'];
		
		if(demographicData['rec-coverage'] !== undefined)
			recCoverage = demographicData['rec-coverage'];
		if (!USCitizen || !PolicyOwner || !ReplacementPolicy) {
			knockout("");
			$('#contact-form').find('.hide-contact-fields').show();
			$('#contact-form').find('.success-text').hide();
		} else {
			showOverlay("wOverlayId", "loading");
		    $.ajax({
		        url: "getQuote.do",
		        type: "POST",
		        data: {
		        	coverageAmount : demographicData['requested_coverage'],
					policyTerm : demographicData['policy_term'],
					currentIncome : currentIncome,
					birthDate : demographicData['date-of-birth'],
					gender : demographicData['gender'],
					smoker : demographicData['smoker'],
					emailAddress : demographicData['email-address'],
					firstName : demographicData['first-name'],
					state : demographicData['state'],
					USCitizen : USCitizen,
					PolicyOwner : PolicyOwner,
					ReplacementPolicy : ReplacementPolicy,
					noOfYearsToMaintainCoverage : recCoverage,
					selectedPath : selectedPath,
					allowMarketing : allowMarketing,
					quotePhone : phone
		        },
		        success: function(data, textStatus, jqXHR) {
		        	var retdata = JSON.parse(data);
		        	var errorMessage = retdata.errorMessage;
		        	if(errorMessage !== ""){
		        		displayErrorText(errorMessage, formId);
		        	}else{
		        		var profile = JSON.parse(retdata.profileVO);
		        		var fakeResponseData = {
		    		        bestClassPrice: +numberWithCommas(profile.appliedQuoteVO.bestPremiumPerMonth.toFixed()),
		    		        standardClassPrice: +numberWithCommas(profile.appliedQuoteVO.standardPremiumPerMonth.toFixed())
		    		    };
		        		$("#original-quote_selected").val(selectedPath);
		        		$("#comparison-quote_selected").val(selectedPath);
		        		successCallback(fakeResponseData);
		        	}
		        	hideOverlay("wOverlayId", "loading");
		        	$('#quote-page').find('.error-text').html("");
		        	$('#quote-page').find('.success-text').html("");
					$('#quote-page').find('.success-text').css({'display':'none'});
		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		        	displayErrorText("Please try again.", formId);
		        	hideOverlay("wOverlayId", "loading");
		        }
		    });
		}    
	}

	function populateUpdatedCoverageSlider(selAmnt) {
		var val = coverageValues.indexOf(parseInt(selAmnt));
		$("#comparison-coverage").slider({
			animate : true,
			min : 0,
			max : coverageValues.length - 1,
			step : 1,
			orientation : "horizontal",
			value: val,
			slide : function(event, ui) {
				//console.log("slide sliderValue=" + ui.value);
				var range = getCoverageRange(ui.value);
				$('.inner.style3').css('width' , (range) + '%');
				$("#comparison-quote-selectedCoverageAmnt").val(coverageValues[ui.value]);
				$("#comparison-quote .recommended-coverage .calculated-coverage").text("$" + numberWithCommas(coverageValues[ui.value]));
				$("#comparison-quote .quote-coverage").text("$" + numberWithCommas(coverageValues[ui.value]));
			},
			change : function(e, ui) {
				//console.log("change sliderValue=" + ui.value);
				if($("#comparison-quote").is(":visible")){
					getPremiumPerMonth();
				}
				return false;
			}
		});
		var range = getCoverageRange(val);
		$('.upd-cov-slider-range').css('left',(range) + '%');
	}

	function populateUpdatedTermSlider(selAmnt) {
		$("#comparison-term").slider({
			animate : true,
			min : 10,
			max : 30,
			step : 5,
			orientation : "horizontal",
			value: selAmnt,
			slide : function(event, ui) {
				//console.log("Term slide sliderValue=" + ui.value);
				var range = getTermRange(ui.value);
				$('.inner.style4').css('width' , (range) + '%');
				$("#comparison-quote-selectedPolicyTerm").val(ui.value);
				$("#comparison-quote .recommended-coverage .calculated-term").text(ui.value + " Years");
				$("#comparison-quote .quote-term").text(ui.value + " Years");
			},
			change : function(e, ui) {
				//console.log("Term change sliderValue=" + ui.value);
				if($("#comparison-quote").is(":visible")){
					getPremiumPerMonth();
				}
				return false;
			}
		});
		
		var range = getTermRange(selAmnt);
		$('.upd-term-slider-range').css('left' , (range) + '%');
	}
	
	function getPremiumPerMonth() {
		showOverlay("wOverlayId", "loading");
		$.ajax({
			url : 'getUpdatedQuote.do',
			type : 'post',
			data : {
				selectedCoverageAmnt : $("#comparison-quote-selectedCoverageAmnt").val(),
				selectedPolicyTerm : $("#comparison-quote-selectedPolicyTerm").val()
			},
			dataType : 'text',
			cache : false,
			success : function(data) {
				//console.log(data);
				var retdata = JSON.parse(data);
				//$("#comparison-quote .best-class").find(".price").html(retdata.bestPremiumPerMonth.toFixed());
		      //  $("#comparison-quote .standard-class").find(".price").html(retdata.standardPremiumPerMonth.toFixed());
				$("#quote_recommended").find(".calculated-coverage").html('$'+numberWithCommas($("#comparison-quote-selectedCoverageAmnt").val()));
				$(".calculated-term").html($("#comparison-quote-selectedPolicyTerm").val() + " Years");
		        populatePremiumValues(retdata.productPremiumsCoveragesList);
			},
			error : function(xhr, textStatus, errorThrown) {
				hideOverlay("wOverlayId", "loading");
			}
		}).done(function() {
			hideOverlay("wOverlayId", "loading");
		});
	}
	
	$(function(){
		$('#original-quote').find('.apply-now').on('click',function(e){
			$('#quote-page').find('.success-text').html("");
			$('#quote-page').find('.success-text').css({'display':'none'});
			var $originalQuote = $('#original-quote');
			/*var originalselectedCoverage = $('#original-quote-originalCoverageAmnt').val();
			var originalselectedTerm  = $('#original-quote-originalPolicyTerm').val();
			var originalbestPremium = $originalQuote.find('.best-class').find('.price').html();
			var orignialstdPremium = $originalQuote.find('.standard-class').find('.price').html();*/
			
			if(parseInt($('#calc-path_selected').val())== 4 ) {
				var comparedselectedCoverage = removeCommas($originalQuote.find('.trans-america').find('.best-coverage').html());
				var comparedbestPremium = removeCommas($('#comparison-quote-selectedPremium').val());
				var comparedstdAmt = removeCommas($originalQuote.find('.trans-america').find('.standard-coverage').html());
			} else {
				var comparedselectedCoverage = $('#comparison-quote-selectedCoverageAmnt').val();
				var comparedbestPremium = $originalQuote.find('.trans-america').find('.best-premium').html();
				var comparedstdPremium = removeCommas($originalQuote.find('.trans-america').find('.standerd-premium').html());
			}
			var comparedselectedTerm  = $('#comparison-quote-selectedPolicyTerm').val();
			var  dataPosted= {
					selectedCoverageAmnt	: comparedselectedCoverage,
					selectedPolicyTerm		: comparedselectedTerm,
					bestPremiumPerMonth		: comparedbestPremium,
					standardPremiumPerMonth : comparedstdPremium,
					standardCoverageAmnt : comparedstdAmt
			};
			showOverlay("wOverlayId", "loading");
			 $.ajax({
				url : 'applyKnowCoverage.do',
				type : 'post',
				data : 	dataPosted,
				aType : 'json',
				cache : false,
				success : function(data) {
					hideOverlay("wOverlayId", "loading");
					if(data != null && data!= ""){
						var jsonData = JSON.parse(data);
						$('#comparison-coverage,#comparison-term').slider( "option", "disabled" ,true);
						location.href=jsonData.url;
					
					}else{
						$('#quote-page').find('.success-text').html("Thank you for applying. We will get back to you soon.");
						$('#quote-page').find('.success-text').css({'display':'block'});
						$('#quote-page').find('.success-text').css({'margin-bottom':'30px'});
						$('#quote-page').find('.success-text').css({'font-size':'30px'});
					}
				},
				error : function(xhr, textStatus, errorThrown) {
					hideOverlay("wOverlayId", "loading");
				}
			});
		});
		
		$('#comparison-quote').find('.apply-now').on('click',function(e){
			var $comparisonQuote = $('#comparison-quote');
			if(parseInt($('#calc-path_selected').val())== 4 ) {
				var comparedselectedCoverage = removeCommas($comparisonQuote.find('.best-class').find('.price').html());
				var comparedbestPremium = removeCommas($('#comparison-quote-selectedPremium').val());
			} else {
				var comparedselectedCoverage = $('#comparison-quote-selectedCoverageAmnt').val();
				var comparedbestPremium = $comparisonQuote.find('.best-class').find('.price').html();
			}
			var comparedselectedTerm  = $('#comparison-quote-selectedPolicyTerm').val();
			var comparedstdPremium = removeCommas($comparisonQuote.find('.standard-class').find('.price').html());
			
			var  dataPosted= {
					selectedCoverageAmnt	: comparedselectedCoverage,
					selectedPolicyTerm		: comparedselectedTerm,
					bestPremiumPerMonth		: comparedbestPremium,
					standardCoverageAmnt : comparedstdPremium,
			};
			$('#quote-page').find('.success-text').html("");
			$('#quote-page').find('.success-text').css({'display':'none'});
			showOverlay("wOverlayId", "loading");
			 $.ajax({
				url : 'applyKnowCoverage.do',
				type : 'post',
				data : 	dataPosted,
				aType : 'json',
				cache : false,
				success : function(data) {
					hideOverlay("wOverlayId", "loading");
					if(data != null && data!= ""){
						$('#comparison-coverage,#comparison-term').slider( "option", "disabled" ,true);
						var jsonData = JSON.parse(data);
						location.href=jsonData.url;
					}else{
						$('#quote-page').find('.success-text').html("Thank you for applying. We will get back to you soon.");
						$('#quote-page').find('.success-text').css({'display':'block'});
						$('#quote-page').find('.success-text').css({'margin-bottom':'30px'});
						$('#quote-page').find('.success-text').css({'font-size':'30px'});
					}
				},
				error : function(xhr, textStatus, errorThrown) {
					hideOverlay("wOverlayId", "loading");
				}
			});
		});
		
	});
	
	var map = new Object();

	map[0] = "A";
	map[1] = "B";
	map[2] = "C";
	map[3] = "D";
	map[4] = "E";
	map[5] = "F";
	map[6] = "G";
	map[7] = "H";
	map[8] = "I";
	map[9] = "J";
	map[10] = "K";
	map[11] = "L";
	
	function get(k) {
		return map[k];
	}

	function calculateInsuranceNeeds() {
		$.ajax({
			url: "insuranceNeeds.do",
			type: "post",
			data: {
				firstName: $("#firstName").val(),
				currentSavings: $("#currentSavings").val(),
				currentIncome: $("#currentIncome").val(),
				currentLifeInsurance: $("#currentLifeInsurance").val(),
				yearsIncomeProvided: $("#yearsIncomeProvided").val(),
				currentRetirementSavings: $("#currentRetirementSavings").val(),
				finalExpenses: $("#finalExpenses").val(),
				outstandingMortgage: $("#outstandingMortgage").val(),
				childCount: $("#childCount").val(),
				outstandingDebt: $("#outstandingDebt").val(),
				pathId : $("#selectedPath").val()
			},
			dataType: "text",
			cache: "false",
			success: function(data) {
				loadPDFPanelData(data);
				return false;
			},
			error: function(xhr, textStatus, errorThrown) {
				return false;
			}
		}).done(function() {
			$("#updatedCoverage").html("<label onclick='copyRecommendedCoverage();'>+</label>");
			$("#coverageSlider").css("display", "none");
			$("#pdfContentPanel").css("display", "block");
			return false;
		});
		return false;
	}
	function loadPDFPanelData(data) {
		var profile = JSON.parse(data);
		$("#panelfirstname").html(profile.firstName);
		$("#coverage").html(""+formatInUS(profile.coverage));
		$("#term").html(profile.term);
		
		$("#panelfinalexpenses").html(""+formatInUS(profile.finalExpenses));
		$("#paneloutstandingdebt").html(""+formatInUS(profile.outstandingDebt));
		$("#paneloutstandingmortgage").html(""+formatInUS(profile.outstandingMortgage));
		$("#childcounts").html(""+profile.childCount);
		$("#estimatedcollegeexpenses").html(""+formatInUS(profile.estimatedCollegeExpenses));
		$("#totalexpensedeath").html(""+formatInUS(profile.totalExpenseDeath));
		$("#panelcurrentlifeinsurance").html(""+formatInUS(profile.currentLifeInsurance));
		$("#panelyearsIncomeProvided").html(""+profile.yearsIncomeProvided);
		$("#panelcurrentSavings").html(""+formatInUS(profile.currentSavings));
		$("#panelcurrentRetirementSavings").html(""+formatInUS(profile.currentRetirementSavings));
		$("#valuelifeinsuranceforce").html(""+formatInUS(profile.valueLifeInsuranceForce));
		$("#totalincomeneeddeath").html(""+formatInUS(profile.totalIncomeNeedDeath));
	}
	function formatInUS(input) {
		if(input != null && input != "") {
			input = $.formatNumber(input, {
				format: "$#,###",
				locale: "US"
			});
		}
		return input;
	}
	function updateFirstName() {
		$("#fistname").html($("#firstName").val());
	}

	function sendEmailWithPDF() {
		$.ajax({
			url: "sendEmailWithPDF.do?emailAddress="+$("#pdfEmailAddress").val(),
			type: "post",
			dataType: "text",
			cache: false,
			success: function(data) {
				
			},
			error: function() {
				
			}
		});
	}
	
	function displayChildrenPanel() {
		var childCount = $("#childCount").val();
		/*var html = "";
		for(var i = 0; i < childCount; i++) {
			html += '<br><label>ChildB - Public or Private:</label>'+
				'<input type="text" id="child2schoolType" name="children[1].schoolType" value="${children[1].schoolType}">';
			$("#childrenPanel").html(html);
		}*/
	}
	
	 function showOverlay(overlayId, loading) {
        if (loading) {
            $("#" + overlayId + ", #" + loading).css({
                display: "block"
            });
            //$("#" + loading).css("top", centreScreenCalFn(loading));
        } else {
            $("#" + overlayId).css("display", "block");
        }
        $("#" + overlayId).css("height", this.getDocHeight().height + "px");
    }
	 
    function hideOverlay(overlayId, loading) {
        $("#" + overlayId + ", #" + loading).css("display", "none");
        $("body").removeClass("modelPop");
    }
    
    function centreScreenCalFn(loading) {
        var scrollTopVal = $(document).scrollTop();
        var windowHeight = $(window).height();
        var b;
        if ($("#" + loading).height() < windowHeight) {
            $("#" + loading).css("position", "fixed");
            b = windowHeight / 2 - $("#" + loading).height() / 2 - 20;
        } else {
            $("#" + loading).css("position", "absolute");
            b = scrollTopVal + (windowHeight / 2) - $("#" + loading).height() / 2 - 20;
        }
        return b;
    }
    
    function getDocHeight() {
        var docHeight = $(document).height(), windowHeight = $(window).height(), bodyWidth = $("body").width(), windowWidth = $(window).width(), finHeight, finWidth;
        if (docHeight > windowHeight) {
        	finHeight = docHeight;
        } else {
        	finHeight = windowHeight;
        }
        if (bodyWidth > windowWidth) {
        	finWidth = bodyWidth;
        } else {
        	finWidth = windowWidth;
        }
        return {
            width: finWidth,
            height: finHeight
        };
    }
    function quoteVisiblity(obj) {
    	if(obj == 'howMuchDoINeed') {
    		sessionStorage.setItem('getQuoteVisibility', 'block');	
    	} else {
    		sessionStorage.setItem('getQuoteVisibility', 'none');
    	}
    }
    function changeVisiblityForQuote() {
    	if(null != sessionStorage.getItem('getQuoteVisibility'))
    		document.getElementById("getAQuote").style.display = sessionStorage.getItem('getQuoteVisibility');
	}
    
    var premiumValues = new Array();
	for (var i = 20, j = 0; i<=50 ; i+=5, j++){
		premiumValues[j] = i;
	}
	for (var i = 60, j = premiumValues.length; i<=100 ; i+=10, j++){
		premiumValues[j] = i;
	}
	
    /*pre selected premium based slider*/
    function populatePreSelectedPremiumSlider(selPremium) {
		$("#preselected-coverage").slider({
			animate : false,
			min : 0,
			max : premiumValues.length - 1,
			step : 1,
			orientation : "horizontal",
			disabled: true,
			slide : function(event, ui) {
				event.preventDefault();
				return false;
			},
			change : function(e, ui) {
				e.preventDefault();
				return false;
			}
		});
		var range = getPremiumRange(premiumValues.indexOf(parseInt(selPremium)));
		$('.recom-cov-slider-range').css('left' , (range) + '%');
	}
	function getPremiumRange(val){
		var range = 0;
		var stepAmnt = 1;
		var minAmnt = 0;
		var maxAmnt = premiumValues.length - 1;
		
		var minMinMax = maxAmnt - minAmnt;
		minMinMax = minMinMax / stepAmnt;
		var minSelMin = val - minAmnt;
		if(minSelMin !== 0){
			minSelMin = minSelMin / stepAmnt;
			range = minSelMin / minMinMax;
			range = range * 100;
		}
		return range;
	}
	
	function populateUpdatedPremiumSlider(selPremium) {
		var val = premiumValues.indexOf(parseInt(selPremium));
		$("#comparison-coverage").slider({
			animate : true,
			min : 0,
			max : premiumValues.length - 1,
			step : 1,
			orientation : "horizontal",
			value: val,
			slide : function(event, ui) {
				//console.log("slide sliderValue=" + ui.value);
				var range = getPremiumRange(ui.value);
				$('.inner.style3').css('width' , (range) + '%');
				$("#comparison-quote-selectedPremium").val(premiumValues[ui.value]);
				$("#comparison-quote .recommended-coverage .calculated-coverage").text("$" + numberWithCommas(premiumValues[ui.value]));
				$("#comparison-quote .quote-coverage").text("$" + numberWithCommas(premiumValues[ui.value]));
			},
			change : function(e, ui) {
				//console.log("change sliderValue=" + ui.value);
				if($("#comparison-quote").is(":visible")){
					getCoveragePerMonthWithPremium();
				}
				return false;
			}
		});
		var range = getPremiumRange(val);
		$('.upd-cov-slider-range').css('left',(range) + '%');
	}
	
	function populatePremiumUpdatedTermSlider(selAmnt) {
		$("#comparison-term").slider({
			animate : true,
			min : 10,
			max : 30,
			step : 5,
			orientation : "horizontal",
			value: selAmnt,
			slide : function(event, ui) {
				//console.log("Term slide sliderValue=" + ui.value);
				var range = getTermRange(ui.value);
				$('.inner.style4').css('width' , (range) + '%');
				$("#comparison-quote-selectedPolicyTerm").val(ui.value);
				$("#comparison-quote .recommended-coverage .calculated-term").text(ui.value + " Years");
				$("#comparison-quote .quote-term").text(ui.value + " Years");
			},
			change : function(e, ui) {
				console.log("Term change sliderValue=" + ui.value);
				if($("#comparison-quote").is(":visible")){
					getCoveragePerMonthWithPremium();
				}
				return false;
			}
		});
		
		var range = getTermRange(selAmnt);
		$('.upd-term-slider-range').css('left' , (range) + '%');
	}
	
	function getCoveragePerMonthWithPremium() {
		showOverlay("wOverlayId", "loading");
		$.ajax({
			url : 'getUpdatedQuote.do',
			type : 'post',
			data : {
				affordablePremium : $("#comparison-quote-selectedPremium").val(),
				selectedPolicyTerm : $("#comparison-quote-selectedPolicyTerm").val(),
				selectedPath : 4
			},
			dataType : 'text',
			cache : false,
			success : function(data) {
				//console.log(data);
				var retdata = JSON.parse(data);
				populateCoverageValues(retdata.productPremiumsCoveragesList);
				//$("#comparison-quote .best-class").find(".price").html(retdata.bestPremiumPerMonth.toFixed());
				/*$("#comparison-quote .best-class").find(".price").html(numberWithCommas(retdata.coverage.toFixed()));
		        $("#comparison-quote .standard-class").find(".price").html(numberWithCommas(retdata.standardCoverage.toFixed()));*/
		        
		        $("#quote_recommended").find(".best-premium").html('$'+numberWithCommas($("#comparison-quote-selectedPremium").val()));
				$(".calculated-term").html($("#comparison-quote-selectedPolicyTerm").val() + " Years")
			},
			error : function(xhr, textStatus, errorThrown) {
				hideOverlay("wOverlayId", "loading");
			}
		}).done(function() {
			hideOverlay("wOverlayId", "loading");
		});
	}
	
	
	function populatePremiumValues(productList){
		for(var i=0;i<productList.length;i++){
			if(productList[i].productName == "TransamericaTrendsetterSuper") {
				$(".trans-america .best-premium").text(productList[i].bestPremiumPerMonth);
				$(".trans-america .standerd-premium").text(productList[i].standardPremiumPerMonth);
			}
			if(productList[i].productName == "ProtectiveCustomChoice") {
				$(".protective-life .best-premium").text(productList[i].bestPremiumPerMonth);
				$(".protective-life .standerd-premium").text(productList[i].standardPremiumPerMonth);
			}
			if(productList[i].productName == "BannerOPTerm" || productList[i].productName == "WilliamPennOPTerm") {
				$(".banner-life .best-premium").text(productList[i].bestPremiumPerMonth);
				$(".banner-life .standerd-premium").text(productList[i].standardPremiumPerMonth);
			}
			if(productList[i].productName == "AGSelectATerm" || productList[i].productName == "USLifeSelectATerm") {
				$(".aig-life .best-premium").text(productList[i].bestPremiumPerMonth);
				$(".aig-life .standerd-premium").text(productList[i].standardPremiumPerMonth);
			}
			if(productList[i].productName == "LincolnTermAcceleTicketOnly") {
				$(".lincoln-life .best-premium").text(productList[i].bestPremiumPerMonth);
				$(".lincoln-life .standerd-premium").text(productList[i].standardPremiumPerMonth);
			}
		}
	}
	
	function populateCoverageValues(productList){
		for(var i=0;i<productList.length;i++){
			if(productList[i].productName == "TransamericaTrendsetterSuper") {
				$(".trans-america .best-coverage").text(numberWithCommas(productList[i].bestCoverage));
				$(".trans-america .standard-coverage").text(numberWithCommas(productList[i].standardCoverage));
			}
			if(productList[i].productName == "ProtectiveCustomChoice") {
				$(".protective-life .best-coverage").text(numberWithCommas(productList[i].bestCoverage));
				$(".protective-life .standard-coverage").text(numberWithCommas(productList[i].standardCoverage));
			}
			if(productList[i].productName == "BannerOPTerm" || productList[i].productName == "WilliamPennOPTerm") {
				$(".banner-life .best-coverage").text(numberWithCommas(productList[i].bestCoverage));
				$(".banner-life .standard-coverage").text(numberWithCommas(productList[i].standardCoverage));
			}
			if(productList[i].productName == "AGSelectATerm" || productList[i].productName == "USLifeSelectATerm") {
				$(".aig-life .best-coverage").text(numberWithCommas(productList[i].bestCoverage));
				$(".aig-life .standard-coverage").text(numberWithCommas(productList[i].standardCoverage));
			}
			if(productList[i].productName == "LincolnTermAcceleTicketOnly") {
				$(".lincoln-life .best-coverage").text(numberWithCommas(productList[i].bestCoverage));
				$(".lincoln-life .standard-coverage").text(numberWithCommas(productList[i].standardCoverage));
			}
		}
	}