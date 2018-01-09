var cookieEnabled = navigator.cookieEnabled;
if (typeof navigator.cookieEnabled === "undefined" && !cookieEnabled) {
    document.cookie = "testcookie";
    cookieEnabled = document.cookie.indexOf("testcookie") !== -1;
}




(function () {
    var lang = (function () {
        if (cookieEnabled) {
            return Cookies.get('lang') || 'bn';
        } else {
            return 'en';
        }
    })();

    function Main() {

        var instance = this;

        var _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };

        this.slideImageLoader = function (container, ind, callback) {
            return new Promise(function (resolve) {
                fetch('/resources/images/slider.json').then(function (value) {
                    value.json().then(function (data) {
                        data.forEach(function (src, index) {
                            var img = document.createElement('img');
                            if (index === ind && callback) {
                                img.onload = callback;
                                img.addEventListener('load', function () {
                                    resolve();
                                });
                            } else if (data.length - 1 === index) {
                                img.addEventListener('load', function () {
                                    resolve();
                                });
                            }
                            img.src = src;
                            img.className = 'swiper-slide';
                            container.appendChild(img);
                        });
                    });
                });
            });
        };


        //tid="placeholder:next;
        this.attachDictionary = function () {
            var elms = arguments[0].length ? arguments[0] : Array.from(arguments);
            elms.forEach(function (elm) {
                var attrs = elm.getAttribute('data-did').split(';');
                var keyValue = [];
                attrs.forEach(function (arr) {
                    keyValue.push(arr.split(':'));
                });
                keyValue.forEach(function (atr) {
                    elm[atr[0]] = tamplate.dictionary[atr[1]];
                });
            });
        };

        function cleanArray(arr) {
            var ar = [];
            arr.forEach(function (value) {
                var trimed = value.trim();
                ar.push(trimed.slice(2, trimed.length - 1));
            });
            return ar;
        }

        this.translate = function (str) {
            if (str.indexOf('${') === 0) {
                return tamplate.dictionary[str.slice(2, str.length - 1)];
            } else {
                return tamplate.dictionary[str];
            }
        };




        var pop = {
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
        };


        this.updateTamplate = function (query, id) {
            var container = typeof query === 'string' ? document.querySelector(query) : query;
            var tmp = tamplate.tamplates[id];
            tmp.cont.forEach(function (inner) {
                var elm = document.createElement(tmp.tag);
                if (typeof inner === 'string') {
                    elm.innerHTML = inner;
                    container.appendChild(elm);
                } else if (inner.constructor === Object) {
                    for (var key in inner) {
                        if (key === 'inner') {
                            elm.innerHTML = inner[key];
                        } else if (key === 'class') {
                            elm.className = inner[key];
                        } else if (key === 'drop') {
                            var dropDown = document.createElement('div');
                            var ul = document.createElement('ul');
                            dropDown.appendChild(ul);

                            var popOpt = _extends({}, pop, inner[key].pop);

                            for (var dkey in inner[key]) {
                                if (dkey !== 'inner' && dkey !== 'class') {
                                    dropDown[dkey] = inner[key][dkey];;
                                } else if (dkey === 'class') {
                                    dropDown.className = inner[key][dkey];
                                } else {
                                    inner[key][dkey].forEach(function (inn) {
                                        var li = document.createElement('li');

                                        if (inn.constructor === Object) {
                                            for (var ikey in inn) {
                                                if (ikey === 'inner') {
                                                    li.innerHTML = inn[ikey];
                                                } else if (ikey === 'class') {
                                                    li.className = inn[ikey];
                                                } else {
                                                    li[ikey] = inn[ikey];
                                                }
                                            }
                                        } else {
                                            li.innerHTML = inn;
                                        }
                                        ul.appendChild(li);
                                    });
                                }
                            }

                            tippy(elm, _extends(popOpt, {
                                html: dropDown
                            }));

                        }
                        container.appendChild(elm);
                    }
                }
            });
        };


        this.addEventTippy = function (query, tipQuery, eventType, func, option) {
            var elm = document.querySelector(query);
           addEvent(elm._tippy.options.html.querySelectorAll(tipQuery), eventType, func, option);
        };
        
        this.updateNotice = function () {
            var noticeBox = document.querySelector('div.noticboxwrapperwr > div.noticeboxwrapper > div.notices');
            tamplate.tamplates.notice.forEach(function (notice) {
                createElm('div.notice.swiper-slide>p{'+notice+'}', noticeBox);
            });
        };

        this.updateLive = function () {
            var liveUpdateBox = document.querySelector('main > .marquee');
            if(tamplate.tamplates.live.length===0) {
                liveUpdateBox.remove();
            } else {
                tamplate.tamplates.live.forEach(function (txt) {
                    liveUpdateBox.children[0].innerHTML+=' &nbsp;&nbsp;&nbsp;&nbsp;<i' +
                        ' style="color: #5938ba;" class="material-icons">star</i> ' + txt;
                });
                liveUpdateBox.children[0].style.animationDuration = liveUpdateBox.innerHTML.length*60+'ms';
            }
        };

        this.update = function () {
            return new Promise(function (resolve) {
                fetch('/resources/tamplate/'+lang+'/tamplate.json').then(function (value) {
                    value.json().then(function (data) {
                        tamplate = data;
                        var dids = document.querySelectorAll('[data-did]');
                        var tids = document.querySelectorAll('[data-tid]');
                        for (var i = 0; i < tids.length; i++) {
                            instance.updateTamplate(tids[i], tids[i].getAttribute('data-tid'));
                        }
                        instance.attachDictionary(dids);
                        resolve();
                    })
                });
            });
        }



    }
    window.controller = new Main();
})();
