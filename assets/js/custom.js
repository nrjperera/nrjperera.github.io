
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


//My stat circles 

$( document ).ready(function() {
        $('#myStat').circliful();
    });


$( document ).ready(function() {
        $('#myStat2').circliful();
    });


$( document ).ready(function() {
        $('#myStat3').circliful();
    });

$( document ).ready(function() {
        $('#myStat4').circliful();
    });

	

