function _pages() {
//  var _dw = document.documentElement.clientWidth;
    var _dw = $(window).width();
    var _sc = _dw / 320;
    document.body.style.zoom = _sc;
}
$(document).ready(function(){
    _pages();
})
window.onresize = function () {
    _pages();
}
!(function (doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function () {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };

    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));