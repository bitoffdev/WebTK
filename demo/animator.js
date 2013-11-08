// Javascript module for animating elements
// Constructor: new animator(element)
// Methods:
//    1. animator.fadein()
//    2. animator.fadeout()

function animator(element) {
    this.el = element;
    this.state = 0;
    this.fadeout = function() {
        var element = this.el;
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0.0) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= 0.1;
        }, 50);
    };
    this.fadein = function() {
        var element = this.el;
        var op = 0.0;
        var timer = setInterval(function () {
            if (op >= 1.0) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += 0.1;
        }, 50);
    };
}
