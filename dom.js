var $ = function(sel){
    var elem = document.querySelectorAll(sel);

    var text = function(str){
        for(var i = 0; i < elem.length; i++){
            elem[i].innerText = str;
        }
    }

    var addClass = function(className){
        for(var i = 0; i < elem.length; i++){
            elem[i].classList.add(className);
        }
    }

    var removeClass = function(className){
        for(var i = 0; i < elem.length; i++){
            elem[i].classList.remove(className);
        }
    }

    var on = function(action, cb){
        for (var i = 0; i < elem.length; i++){
            elem[i].addEventListener(action, cb);
        }
    }

    var html = function(newHTML) {
        var charHTML = "<ul>";
        for (var i = 0; i < elem.length; i++) {
            elem[i].innerHTML = newHTML;
        }
    }

    var toggle = function(something) {
        if (elem !== null){
            for(var i = 0; i < elem.length; i++){
                elem[i].classlist.remove(className);
            }
        } else {
            for(var i = 0; i < elem.length; i++){
                elem[i].classlist.add(className);
            }
        }
    }

    var toggleClass = function(className) {
        for (var i = 0; i < elem.length; i++){
            if(elem[i].className.includes(className)) {
                elem[i].classlist.remove(className);
                }
            else {
                elem[i].classlist.add(className);
                }
    }
    }   

    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        removeClass: removeClass,
        on:on,
        html: html,
        toggleClass: toggleClass
    }

        return publicAPI;
}
//Toggle class

//html

