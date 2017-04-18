$(document).ready(function(){

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function(){


    $(".navbar").hide();

    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 500) {
                $('.navbar').fadeIn();
            }
            else {
                $('.navbar').fadeOut();
            }
        });


    });

});

var num = 500;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

$(document).ready(function(){

    // hide .navbar1 first
    $(".navbar1").hide();

    // fade in .navbar1
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 500) {
                if ($(this).scrollTop() < 2300) {
                    $('.navbar1').fadeIn();
                }
                else {
                    $('.navbar1').fadeOut();
                }
            }
            else {
                $('.navbar1').fadeOut();
            }
        });


    });

});


$(document).ready(function() {
    $(".scroll").click(function(event){
        $('html, body').animate({scrollTop: '+=550px'}, 700);
    });
});

function scrollTo(to, duration) {
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = element.scrollTop;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}
function test(elID)
{
    var dest = document.getElementById(elID);
    scrollTo(dest.offsetTop, 600);
}


