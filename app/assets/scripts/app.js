


$(document).ready(function() {

    //contact form
    $("#contact").submit(function(event) {
        console.log("meow");
        event.preventDefault();
        var name = $("#mail-name").val();
        var email = $("#mail-email").val();
        var message = $("#mail-message").val();
        var submit = $("#mail-submit").val();
        
        $(".form-message").load("mail.php", {
            name: name,
            email: email,
            message: message,
            submit: submit

        });
    });

    //menu animation
    $(".close-wrapper").on("click", function() {
        animateMenu();
    });

    function animateMenu() {
        $(".close-wrapper").toggleClass("close-wrapper--show");
        $(".hamburger-container").toggleClass("hamburger-container--move");
        $(".mobile-logo").toggleClass("mobile-logo--move");
        $(".logo-inverted-colors").toggleClass("logo-inverted-colors--show");
        $(".drop-down-menu").toggleClass("drop-down-menu--show");
    }

    //handle clicking menu buttons - scroll!
    $("#menu-home-button").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#section-home").offset().top
        }, 2000);
        animateMenu();
    });

    $("#menu-portfolio-button").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#section-portfolio").offset().top
        }, 2000);
        animateMenu();
    });

    $("#menu-about-button").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#section-about").offset().top
        }, 2000);
        animateMenu();
    });

    $("#menu-contact-button").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#section-contact").offset().top
        }, 2000);
        animateMenu();
    });




    //waypoint code for reveal on scroll
    var $itemsToReveal = $(".scroll-reveal");

    $itemsToReveal.each(function() {
        var currentItem = this;
        new Waypoint({
            element: currentItem,
            handler: function() {
                $(currentItem).addClass("portfolio-project-container--show");
            },
            offset: "80%"
        });
    });

    var $elementsToAddExpandBarClass = $(".contact-form-bar, .latest-work-bar");

    $elementsToAddExpandBarClass.each(function() {
        var currentItem = this;
        new Waypoint({
            element: currentItem,
            handler: function() {
                $(currentItem).addClass("expand-bar");
            },
            offset: "80%"
        });
    });

    // var contactFormBarWaypoint = new Waypoint({
    //     element: $(".contact-form-bar .latest-work-bar"),
    //     handler: function() {
    //         $(this.element).addClass("expand-bar");
    //     },
    //     offset: "80%"
    // });


    setTimeout(function() {
        $(".mobile-menu-container").addClass("mobile-menu-container--show");
    }, 1000);

});