(function(w) {
    function enterLine() {
        document.getElementById("btnEnter1").onclick = function() {
            window.open('https://11.jinlianys.com/dabo/shouye.html', "_self");
        }
        document.getElementById("btnEnter2").onclick = function() {
            window.open('https://12.jinlianys.com/dabo/shouye.html', "_self");
        }
        document.getElementById("btnEnter3").onclick = function() {
            window.open('https://13.jinlianys.com/dabo/shouye.html', "_self");
        }
        document.getElementById("btnEnter4").onclick = function() {
            window.open('https://16.jinlianys.com/dabo/shouye.html', "_self");
        }
        document.getElementById("btnEnter6").onclick = function() {
            window.open('http://www.baidu.com', "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);
