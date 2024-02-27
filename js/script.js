$(document).ready(function () {

    let lastScrollTop = 0;

    //humpurger toggle
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });

    //change text
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 50,
            loop: true,
            backDelay: 1000,
            backSpeed: 50
        });
    }

    // click nav links
    $(".nav-link").click(function () {
        let hRef = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(hRef).offset().top + 1 }, 1000);
    })

    //Navbar links color
    function nav_links() {

        if ($(window).scrollTop() >= $("#About").offset().top) {
            $('.up').css('display', 'block');
        } else {
            $('.up').css('display', 'none');
        }

        if ($(window).scrollTop() >= $("#Home").offset().top && $(window).scrollTop() < $("#About").offset().top) {
            $(".nav-link").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-link").eq(0).addClass("active");
        } else if ($(window).scrollTop() >= $("#About").offset().top && $(window).scrollTop() < $("#Services").offset().top) {
            $(".nav-link").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-link").eq(1).addClass("active");
        } else if ($(window).scrollTop() >= $("#Services").offset().top && $(window).scrollTop() < $("#Portfolio").offset().top) {
            $(".nav-link").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-link").eq(2).addClass("active");
        } else if ($(window).scrollTop() >= $("#Portfolio").offset().top && $(window).scrollTop() < $("#Testimonial").offset().top) {
            $(".nav-link").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-link").eq(3).addClass("active");
        } else if ($(window).scrollTop() >= $("#Testimonial").offset().top && $(window).scrollTop() < $("#Blog").offset().top) {
            $(".nav-link").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-link").eq(4).addClass("active");
        } else if ($(window).scrollTop() >= $("#Blog").offset().top && $(window).scrollTop() < $("#Contact").offset().top) {
            $(".nav-link").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-link").eq(5).addClass("active");
        } else {
            $(".nav-link").each(function () {
                $(this).removeClass("active");
            })
            $(".nav-link").eq(6).addClass("active");
        }

    }
    nav_links();

    //Scroll Diraction
    function ScrollDir() {
        let current = $(this).scrollTop();
        if (current > lastScrollTop) {
            $('.navbar').css("top", "-65px");
        } else {
            $('.navbar').css("top", "0px");
        }
        lastScrollTop = current;
    }

    //While scroll
    $(window).scroll(function () {
        nav_links();
        ScrollDir();
        navbar();
    });

    //navbar
    function navbar() {
        if ($(window).width() >= 751) {
            if ($(window).scrollTop() == 0) {
                $('.navbar').addClass('back');
            } else {
                $('.navbar').removeClass('back');
            }
            $("#navbarSupportedContent23").css("background-color", "transparent").css("position", "unset");
            $("#navbarSupportedContent23").removeClass("toggle");
        } else {
            $('.navbar').removeClass('back');
            $("#navbarSupportedContent23").css("background-color", "#333").css("position", "absolute");
            $("#navbarSupportedContent23").addClass("toggle");
        }
    }
    navbar();

    //navbar resize
    $(window).resize(function () { navbar(); })

    //click up button
    $(".up").click(function () {
        $('html, body').animate({ scrollTop: 0 }, $(window).scrollTop() / 2);
    })

    //counter
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    // click Portfolio li
    $(".filters li").click(function () {
        $(".filters li").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    })

    //portfolio filter
    let $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
    })
    $(".filters li").click(function () {
        let value = $(this).attr('data-name');
        $grid.isotope({
            filter: value
        })
    })

    //lightBox
    let current;
    let pictures = Array.from(document.querySelectorAll(".pics"));
    for (let i = 0; i < pictures.length; i++) {
        $(pictures[i]).click(function (e) {
            current = i;
            let pic = $(this).children(":first").attr('src')
            $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
            $(".slideShow").css("transform", "scale(1,1)");
            $("body").css("overflow", "hidden");
        })
    }
    $("#exit").click(function () {
        $(".slideShow").css("transform", "scale(0,0)");
        $("body").css("overflow", "auto");
    })
    $("#goRight").click(function () {
        if (current == pictures.length - 1) {
            current = 0;
        } else {
            current++;
        }
        let pic = $(pictures[current]).children(":first").attr('src');
        $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
    })
    $("#goLeft").click(function () {
        if (current == 0) {
            current = pictures.length - 1;
        } else {
            current--;
        }
        let pic = $(pictures[current]).children(":first").attr('src')
        $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
    })
    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 27) {
            $(".slideShow").css("transform", "scale(0,0)");
            $("body").css("overflow", "auto");
        }
        else if (e.keyCode == 39) {
            if (current == pictures.length - 1) {
                current = 0;
            } else {
                current++;
            }
            let pic = $(pictures[current]).children(":first").attr('src')
            $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
        }
        else if (e.keyCode == 37) {
            if (current == 0) {
                current = pictures.length - 1;
            } else {
                current--;
            }
            let pic = $(pictures[current]).children(":first").attr('src')
            $(".slideShow").children(":first").css("background-image", "url(" + pic + ")");
        }
    })

    //slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    //contact validation
    //name validation
    let nameVal = false;
    $("#name").keyup(function () {
        let name = $(this).val();
        let regName = /^[a-zA-Z]+ [a-zA-Z]{2,10}$/;
        if (!regName.test(name)) {
            $("#namealert").css("display", "block");
            disable();
        } else {
            $("#namealert").css("display", "none");
            nameVal = true;
            able();
        }
    })

    //email validation
    let emailVal = false;
    $("#email").keyup(function () {
        let email = $(this).val();
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(email)) {
            $("#emailalert").css("display", "block");
            disable();
        } else {
            $("#emailalert").css("display", "none");
            emailVal = true;
            able();
        }
    })

    //subject validation
    let subjectVal = false;
    $("#subject").keyup(function () {
        let subject = $(this).val();
        let regSubject = /^[A-Za-z]{3,20}$/;
        if (!regSubject.test(subject)) {
            $("#subjectalert").css("display", "block");
            disable();
        } else {
            $("#subjectalert").css("display", "none");
            subjectVal = true;
            able();
        }
    })

    //message validation
    let messageVal = true;
    $("#message").keyup(function () {
        let message = $(this).val();
        let regMessage = /^[\s\S]{0,100}$/;
        if (!regMessage.test(message)) {
            $("#messagealert").css("display", "block");
            messageVal = false;
            disable();
        } else {
            $("#messagealert").css("display", "none");
            messageVal = true;
            able();
        }
    })

    //disable function
    function disable() {
        document.querySelector("#submit").setAttribute("disabled", false);
    }

    //able function
    function able() {
        if (nameVal == true && emailVal == true && subjectVal == true && messageVal == true) {
            document.querySelector("#submit").removeAttribute("disabled", false);
        }
    }

    //clear function
    $("#submit").click(function () {
        document.getElementsByClassName("form-control").value = '';
    })

    //spinner
    $(".spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
})