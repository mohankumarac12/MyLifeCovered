function textSlideHeight() {
    var maxHeight = -1;

    $('.txt-slide').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('#text_slider').height(maxHeight);
}

$(document).ready(function() {

    // open and close the mobile menu
    $('#open_menu').on('click', function(e) {
        e.preventDefault();
        $('ul#top_nav_menu').addClass('open');
        $('a#close_menu').addClass('open');
    });
    $('#close_menu').on('click', function(e) {
        e.preventDefault();
        $('ul#top_nav_menu').removeClass('open');
        $('a#close_menu').removeClass('open');
    });


    // build array for Affordability path
    var tempTable = {
        twentyfive: {
            twentyfive: {
                male: {
                    premium: 25,
                    age: 25,
                    gender: 1,
                    standard: 44,
                    savings: 19,
                    coverage: 550000
                },
                female: {
                    premium: 25,
                    age: 25,
                    gender: 2,
                    standard: 40,
                    savings: 15,
                    coverage: 650000
                }
            },
            thirty: {
                male: {
                    premium: 25,
                    age: 30,
                    gender: 1,
                    standard: 44,
                    savings: 19,
                    coverage: 535000
                },
                female: {
                    premium: 25,
                    age: 30,
                    gender: 2,
                    standard: 42,
                    savings: 17,
                    coverage: 650000
                }
            },
            thirtyfive: {
                male: {
                    premium: 25,
                    age: 35,
                    gender: 1,
                    standard: 46,
                    savings: 21,
                    coverage: 525000
                },
                female: {
                    premium: 25,
                    age: 35,
                    gender: 2,
                    standard: 51,
                    savings: 26,
                    coverage: 650000
                }
            },
            forty: {
                male: {
                    premium: 25,
                    age: 40,
                    gender: 1,
                    standard: 50,
                    savings: 25,
                    coverage: 350000
                },
                female: {
                    premium: 25,
                    age: 40,
                    gender: 2,
                    standard: 51,
                    savings: 26,
                    coverage: 450000
                }
            },
            fortyfive: {
                male: {
                    premium: 25,
                    age: 45,
                    gender: 1,
                    standard: 50,
                    savings: 26,
                    coverage: 195000
                },
                female: {
                    premium: 25,
                    age: 45,
                    gender: 2,
                    standard: 41,
                    savings: 16,
                    coverage: 275000
                }
            },
            fifty: {
                male: {
                    premium: 25,
                    age: 50,
                    gender: 1,
                    standard: 37,
                    savings: 12,
                    coverage: 105000
                },
                female: {
                    premium: 25,
                    age: 50,
                    gender: 2,
                    standard: 50,
                    savings: 25,
                    coverage: 170000
                }
            }
        },
        fifty: {
            twentyfive: {
                male: {
                    premium: 50,
                    age: 25,
                    gender: 1,
                    standard: 84,
                    savings: 34,
                    coverage: 1250000
                },
                female: {
                    premium: 50,
                    age: 25,
                    gender: 2,
                    standard: 82,
                    savings: 32,
                    coverage: 1650000
                }
            },
            thirty: {
                male: {
                    premium: 50,
                    age: 30,
                    gender: 1,
                    standard: 89,
                    savings: 39,
                    coverage: 1250000
                },
                female: {
                    premium: 50,
                    age: 30,
                    gender: 2,
                    standard: 88,
                    savings: 38,
                    coverage: 1565000
                }
            },
            thirtyfive: {
                male: {
                    premium: 50,
                    age: 35,
                    gender: 1,
                    standard: 102,
                    savings: 52,
                    coverage: 1200000
                },
                female: {
                    premium: 50,
                    age: 35,
                    gender: 2,
                    standard: 107,
                    savings: 57,
                    coverage: 1450000
                }
            },
            forty: {
                male: {
                    premium: 50,
                    age: 40,
                    gender: 1,
                    standard: 95,
                    savings: 45,
                    coverage: 775000
                },
                female: {
                    premium: 50,
                    age: 40,
                    gender: 2,
                    standard: 93,
                    savings: 43,
                    coverage: 985000
                }
            },
            fortyfive: {
                male: {
                    premium: 50,
                    age: 45,
                    gender: 1,
                    standard: 81,
                    savings: 31,
                    coverage: 420000
                },
                female: {
                    premium: 50,
                    age: 45,
                    gender: 2,
                    standard: 90,
                    savings: 40,
                    coverage: 590000
                }
            },
            fifty: {
                male: {
                    premium: 50,
                    age: 50,
                    gender: 1,
                    standard: 77,
                    savings: 27,
                    coverage: 235000
                },
                female: {
                    premium: 50,
                    age: 50,
                    gender: 2,
                    standard: 92,
                    savings: 42,
                    coverage: 390000
                }
            }
        },
        onehundred: {
            twentyfive: {
                male: {
                    premium: 100,
                    age: 25,
                    gender: 1,
                    standard: 167,
                    savings: 67,
                    coverage: 2500000
                },
                female: {
                    premium: 100,
                    age: 25,
                    gender: 2,
                    standard: 162,
                    savings: 62,
                    coverage: 3350000
                }
            },
            thirty: {
                male: {
                    premium: 100,
                    age: 30,
                    gender: 1,
                    standard: 175,
                    savings: 75,
                    coverage: 2500000
                },
                female: {
                    premium: 100,
                    age: 30,
                    gender: 2,
                    standard: 175,
                    savings: 75,
                    coverage: 3300000
                }
            },
            thirtyfive: {
                male: {
                    premium: 100,
                    age: 35,
                    gender: 1,
                    standard: 205,
                    savings: 105,
                    coverage: 2550000
                },
                female: {
                    premium: 100,
                    age: 35,
                    gender: 2,
                    standard: 215,
                    savings: 115,
                    coverage: 3250000
                }
            },
            forty: {
                male: {
                    premium: 100,
                    age: 40,
                    gender: 1,
                    standard: 207,
                    savings: 107,
                    coverage: 1750000
                },
                female: {
                    premium: 100,
                    age: 40,
                    gender: 2,
                    standard: 194,
                    savings: 94,
                    coverage: 2125000
                }
            },
            fortyfive: {
                male: {
                    premium: 100,
                    age: 45,
                    gender: 1,
                    standard: 173,
                    savings: 73,
                    coverage: 875000
                },
                female: {
                    premium: 100,
                    age: 45,
                    gender: 2,
                    standard: 175,
                    savings: 75,
                    coverage: 1300000
                }
            },
            fifty: {
                male: {
                    premium: 100,
                    age: 50,
                    gender: 1,
                    standard: 162,
                    savings: 62,
                    coverage: 535000
                },
                female: {
                    premium: 100,
                    age: 50,
                    gender: 2,
                    standard: 175,
                    savings: 75,
                    coverage: 845000
                }
            }
        },
    };


    // populate the two values on the Affordability
    // path when the dropdowns are changed
    var affordDropdown = $('select.afford-dropdown');

    var premium = 0;
    var age = 0;
    var gender = 0;
    var savings = 19;
    var coverage = 550000;

    function getCoverage() {
        premium = $("#affordablePremium").val();
        age = $("#affordableAge").val();
        gender = $("#affordableGender").val();
        var coverageObj = tempTable[premium][age][gender];

        coverage = coverageObj.coverage;
        var coverageAsDollar = '$' + coverage.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        savings = coverageObj.savings;
        var savingsAsDollar = '$' + savings.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        var totalCoverage = $('span#totalCoverage');
        var totalSavings = $('span#totalSavings');

        totalCoverage.html(coverageAsDollar);
        totalSavings.html(savingsAsDollar);
    }

    affordDropdown.on("change", function() {
        getCoverage();
    });



    function slideSwitchNext() {
        var bgd_active = $('#background_slider li.active');
        var txt_active = $('#text_slider li.active');

        var bgd_next;
        if (bgd_active.next().length) {
            bgd_next = bgd_active.next();
        } else {
            bgd_next = $('#background_slider li:first');
        }
        var txt_next;
        if (txt_active.next().length) {
            txt_next = txt_active.next();
        } else {
            txt_next = $('#text_slider li:first');
        }

        bgd_active.addClass('last-active');
        txt_active.addClass('last-active');

        bgd_next.addClass('active');
        txt_next.addClass('active');

        bgd_active.removeClass('active last-active');
        txt_active.removeClass('active last-active');

        var boxMatch = bgd_next.data('tile');
        $('#landing_tiles a').removeClass('active');
        $('#landing_tiles a#' + boxMatch).addClass('active');
    }

    function slideSwitchPrev() {
        var bgd_active = $('#background_slider li.active');
        var txt_active = $('#text_slider li.active');

        var bgd_prev;
        if (bgd_active.prev().length) {
            bgd_prev = bgd_active.prev();
        } else {
            bgd_prev = $('#background_slider li:last');
        }
        var txt_prev;
        if (txt_active.prev().length) {
            txt_prev = txt_active.prev();
        } else {
            txt_prev = $('#text_slider li:last');
        }

        bgd_active.addClass('last-active');
        txt_active.addClass('last-active');

        bgd_prev.addClass('active');
        txt_prev.addClass('active');

        bgd_active.removeClass('active last-active');
        txt_active.removeClass('active last-active');

        var boxMatch = bgd_prev.data('tile');
        $('#landing_tiles a').removeClass('active');
        $('#landing_tiles a#' + boxMatch).addClass('active');
    }
    var int = setInterval(slideSwitchNext, 8500);

    $('#landing a.next').click(function() {
        slideSwitchNext();
        clearInterval(int);
        setTimeout(function() {
            int = setInterval(slideSwitchNext, 8500);
        });
    });
    $('#landing a.prev').click(function() {
        slideSwitchPrev();
        clearInterval(int);
        setTimeout(function() {
            int = setInterval(slideSwitchNext, 8500);
        });
    });

    if ($('div#landing').length) {
        textSlideHeight();
    }

});

$(window).on('resize', function() {
    if ($('div#landing').length) {
        textSlideHeight();
    }
});


// make the sliders stick to the bottom
// of the page on Multicarrier quote
function checkOffset() {
    var rangeSliders = $('#range_sliders');
    if (rangeSliders.length) {
        if (rangeSliders.offset().top + rangeSliders.height() >= $('footer').offset().top - 10) {
            rangeSliders.addClass('unfix');
        }
        if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
            rangeSliders.removeClass('unfix');
        }
    }
}
$(document).scroll(function() {
    checkOffset();
});
