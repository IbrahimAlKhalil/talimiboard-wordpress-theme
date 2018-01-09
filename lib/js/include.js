(function () {
    var urlShim = window.URL || window.webkitURL || window.mozURL;
    var cssPath = '/lib/css/';
    var jsPath = '/lib/js/';
    var list = {
        "popper": {
            "js": ["popper.min"]
        },
        "tippy": {
            "js": ["tippy.min"],
            "css": ["tippy"],
            "dep": ["popper"]
        },
        "library": {
            "js": ["library"]
        },
        "jsCookie": {
            "js": ["jsCookie"]
        },
        
        "ZingTouch": {
            "js": ["ZingTouch"]
        },
        
        "tamplate": {
            "js": ["tamplateController"],
            "dep": ['library', 'jsCookie', 'tippy']
        },
        
        "blobUtil": {
            "js": ["blobUtil"]
        },
        
        "swiper": {
            "js": ["swiper"],
            "css": ["swiper"]
        }
    };

    function include(){function a(g,h){e.includes(h)||('dep'in g&&b(g.dep),'css'in g&&(d[h].css=[],g.css.forEach(function(i,j){f.push(fetch(cssPath+i+'.css',{method:'get',cache:'default'}).then(function(k){return k.text().then(function(l){d[h].css[j]=l})}))})),'js'in g&&(d[h].js=[],g.js.forEach(function(i,j){f.push(fetch(jsPath+i+'.js',{method:'get',cache:'default'}).then(function(k){return k.text().then(function(l){e[e.length-1]===h&&(l+=';(function(){window.filesLoaded();})();'),d[h].js[j]=l})}))})),e.push(h))}function b(g){g.forEach(function(h){d[h]={},a(list[h],h)})}var c=Array.from(arguments),d={},e=[],f=[];return c.forEach(function(g){g in list?(d[g]={},a(list[g],g)):console.error(g+' is not found!')}),new Promise(function(g){window.filesLoaded=g,Promise.all(f).then(function(){e.forEach(function(i){'css'in d[i]&&d[i].css.forEach(function(j){var k=document.createElement('style');k.innerHTML=j,document.head.appendChild(k)}),'js'in d[i]&&d[i].js.forEach(function(j){var k=new Blob([j],{type:'application/javascript'}),l=document.createElement('script');l.setAttribute('async',!1),l.setAttribute('defer',!0),l.src=urlShim.createObjectURL(k),document.head.appendChild(l)})})})})}window.include=include;
})();
