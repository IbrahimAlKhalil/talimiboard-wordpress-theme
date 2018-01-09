common().then(function () {
    tippy('#slideshow button[title]', {
        placement: 'left',
        performance: true,
        theme: 'light',
        distance: 20,
        arrow: true,
        delay: [1000, 300]
    });

    controller.slideImageLoader(Q('#slideshow > .imgs.swiper-wrapper'), 3, function () {
        var scontainer = Q('#slideshow.swiper-container');
        var swiper = new Swiper(scontainer, {
            grabCursor: true,
            touchEventsTarget: 'wrapper',
            speed: 1200,
            preloadImages: false,
            centeredSlides: true,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                dynamicBullets: true,
                clickable: true
            },
            autoplay: {
                delay: 3000
            },
            navigation: {
                nextEl: '#slideshow > button:last-of-type',
                prevEl: '#slideshow > button:first-of-type',
            }
        });

        scontainer.addEventListener('mouseenter', function () {
            swiper.autoplay.stop();
        });

        scontainer.addEventListener('mouseleave', function () {
            swiper.autoplay.start();
        });

        var bla = Q('#slideshow > .imgs.swiper-wrapper > img:first-child, #slideshow > div.loading');
        bla[0].style.filter = 'blur(0)';
        bla[1].remove();
    });

    tippy('.fileCards > div.card [title]:not(.title)', {
        placement: 'bottom'
    });
    tippy('.fileCards > div.card div.title', {
        placement: 'right',
        theme: 'light'
    });


    controller.updateNotice();
    controller.updateLive();
    var noticeContainer = document.querySelector('main .noticeboxwrapper.swiper-container');
    var noticeSwipe = new Swiper(noticeContainer, {
        touchEventsTarget: 'wrapper',
        speed: 1800,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 6000
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
            clickable: true
        }
    });

    noticeContainer.addEventListener('mouseenter', function () {
        noticeSwipe.autoplay.stop();
    });

    noticeContainer.addEventListener('mouseleave', function () {
        noticeSwipe.autoplay.start();
    });



    //////////////////////////////////////////////////////////
    setTimeout(function () {
        if (!Cookies.get("alerted")) {
            Cookies.set("alerted", true, {
                expires: 360
            });
            var box = document.getElementById("alert");
            box.style.display = 'block';
            box.animate({
                transform: ["translateY(-100%)", "translateY(85px)"],
                opacity: [0, 1]
            }, {
                duration: 1000,
                fill: "forwards",
                easing: "ease-in-out"
            }).onfinish = function () {
                box.animate({
                    transform: ["translateY(85px)", "translateY(-100%)"],
                    opacity: [1, 0]
                }, {
                    duration: 900,
                    fill: "forwards",
                    easing: "ease-in-out",
                    delay: 15000
                }).onfinish = function () {
                    box.remove();
                };
            };
            box.children[1].children[0].onclick = function () {
                box.animate({
                    transform: ["translateY(85px)", "translateY(-100%)"],
                    opacity: [1, 0]
                }, {
                    duration: 900,
                    fill: "forwards",
                    easing: "ease-in-out"
                }).onfinish = function () {
                    box.remove();
                };
            };
        }
    }, 3000);

    ////////////////////////////////////////////
    if (!Cookies.get('loaded', true)) {
        Cookies.set('loaded', true);
        document.querySelector('div.loader').animate({
            transform: ['translateY(0)', 'translateY(100%)'],
            opacity: [1, 0]
        }, {
            duration: 1000,
            fill: 'forwards',
            easing: 'cubic-bezier(.17,.67,.83,.67)'
        }).onfinish = function () {
            document.querySelector('div.loader').remove();
        };
    } else {
        Cookies.set('loaded', true);
        document.querySelector('div.loader').remove();
    }
});
