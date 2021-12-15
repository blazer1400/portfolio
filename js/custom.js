$(document).ready(function() {
	$('#homeFullScreen').css({height:$(window).height(),width:$(window).width()});
	$(window).resize(function(){
        $('#homeFullScreen').css({height:$(window).height(),width:$(window).width()});
    });

});
$(document).ready(function() {
    $('#portfolio-container').css({height:$(window).height(),width:$(window).width()});
    $(window).resize(function(){
        $('#portfolio-container').css({height:$(window).height(),width:$(window).width()});
    });

});

var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
    cursorChar: '_',
    attr: null
});

var aboutme = document.getElementById("aboutme");
var myskills = document.getElementById("myskills");
var mywork = document.getElementById("mywork");
var contact = document.getElementById("contact");

function show(article) {
    switch (article) {
        case "aboutme":
            myskills.style.opacity = "0";
            mywork.style.opacity = "0";
            contact.style.opacity = "0";
            myskills.style.display = "none";
            mywork.style.display = "none";
            contact.style.display = "none";

            aboutme.style.display = "block";
            setTimeout(function() {
                aboutme.style.opacity = "1";
            }, 400);
            break;
        case "myskills":
            mywork.style.display = "none";
            mywork.style.opacity = "0";
            contact.style.display = "none";
            contact.style.opacity = "0";
            aboutme.style.display = "none";
            aboutme.style.opacity = "0";

            myskills.style.display = "block";
            setTimeout(function() {
                myskills.style.opacity = "1";
            }, 400);
            break;
        case "mywork":
            myskills.style.display = "none";
            myskills.style.opacity = "0";
            contact.style.display = "none";
            contact.style.opacity = "0";
            aboutme.style.display = "none";
            aboutme.style.opacity = "0";

            mywork.style.display = "block";
            setTimeout(function() {
                mywork.style.opacity = "1";
            });
            break;
        case "contact":
            mywork.style.display = "none";
            mywork.style.opacity = "0";
            myskills.style.display = "none";
            myskills.style.opacity = "0";
            aboutme.style.display = "none";
            aboutme.style.opacity = "0";

            contact.style.display = "block";
            setTimeout(function() {
                contact.style.opacity = "1";
            }, 400);
            break;
    }
}