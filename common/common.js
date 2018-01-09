function common() {
    return new Promise(function (resolve) {
        window.addEventListener('load', function (ev) {
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

                        tippy('.globalNav [title]', {
                            theme: 'light',
                            animation: 'perspective',
                            performance: true,
                            updateDuration: 0,
                            distance: 2,
                            inertia: true,
                            createPopperInstanceOnInit: false
                        });

                        (function() {
                            function expand(label) {
                                label.classList.add("active");
                                var childs = Array.from(label.children[4].children[0].children);
                                label.style.height = (childs.length + 1) * 65 + "px";
                                childs.forEach(function(child, index) {
                                    child.animate(
                                        {
                                            left: ["-100%", 0],
                                            opacity: [0, 1]
                                        },
                                        {
                                            fill: "forwards",
                                            duration: 250,
                                            delay: 500 + index * 200,
                                            easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                                        }
                                    );
                                });
                            }

                            function deExpand(label) {
                                label.classList.remove("active");
                                var childs = Array.from(label.children[4].children[0].children);
                                label.style.height = "72px";
                                childs.forEach(function(child, index) {
                                    child.animate(
                                        {
                                            left: [0, "-100%"],
                                            opacity: [1, 0]
                                        },
                                        {
                                            fill: "forwards",
                                            duration: 0,
                                            easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                                        }
                                    );
                                });
                            }

                            function makeSwanky(container) {
                                var labels = container.querySelectorAll("label");

                                var arr = Array.from(labels);
                                arr.forEach(function(el) {
                                    Array.from(el.children[4].children[0].children).forEach(function(ch) {
                                        ch.addEventListener("click", function(e) {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        });
                                    });

                                    el.addEventListener("click", function() {
                                        if (el == container._lastSwanky) {
                                            deExpand(el);
                                            container._lastSwanky = false;
                                        } else {
                                            container._lastSwanky && deExpand(container._lastSwanky);
                                            expand(el);
                                            container._lastSwanky = el;
                                        }
                                    });
                                });
                            }

                            var swanky = document.querySelectorAll(".swanky_wrapper");
                            var swankies = Array.from(swanky);
                            swankies.forEach(function(sw) {
                                makeSwanky(sw);
                            });
                        })();

                        resolve();
                    });
                });
            });
        });
    });
}