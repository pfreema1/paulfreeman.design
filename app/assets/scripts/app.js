


$(document).ready(function() {

    /************** PARTICLES STUFF ************ */

    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 1,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": .5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 1.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100,
              "duration": .4
            },
            "push": {
              "particles_nb": 1
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });






    /********************** end particles stuff */


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

    var middlePageWaypoint = new Waypoint({
        element: $("#middlePageTrigger"),
        handler: function() {
            $(".overlay-text-wrapper").css('opacity', '.01');
        }
    });

    setTimeout(function() {
        $(".mobile-menu-container").addClass("mobile-menu-container--show");
    }, 1000);

});