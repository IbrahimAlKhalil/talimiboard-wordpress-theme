window.addEventListener('load', function () {
    polyfills.ready().then(function () {
        include('tamplate', 'swiper').then(function () {
            controller.update().then(function () {
                (function () {
                    var drp = Array.from(document.querySelectorAll("div.dropDownMenu li.nested"));
                    drp.forEach(function (li) {
                        li.addEventListener("mouseleave", function (evt) {
                            var rect = evt.target.parentNode.getBoundingClientRect();
                            var leftRight = innerWidth - (rect.left + rect.width) < rect.width ? "left" : "right";
                            evt.target.classList.remove("active");
                            evt.target.classList.remove(leftRight);
                        });

                        li.addEventListener("mouseenter", function (evt) {
                            var rect = evt.target.parentNode.getBoundingClientRect();
                            var leftRight = innerWidth - (rect.left + rect.width) < rect.width ? "left" : "right";
                            evt.target.classList.add("active");
                            evt.target.classList.add(leftRight);
                        });
                    });
                })();

                tippy('#langdrop', {
                    html: Q('#languageDropDown'),
                    trigger: 'click',
                    theme: 'light',
                    animation: 'perspective',
                    performance: true,
                    interactive: true,
                    updateDuration: 0,
                    distance: 2,
                    multiple: true,
                    inertia: true,
                    createPopperInstanceOnInit: true
                });
            });
        });
    });
});
