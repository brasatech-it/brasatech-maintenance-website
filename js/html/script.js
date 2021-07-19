"use strict";
exports.__esModule = true;
var yellow_strip_1 = require("./yellow-strip");
window.onload = yellow_strip_1.generateStrip;
window.onresize = yellow_strip_1.generateStrip;
var lastDate = Date.now();
var animationDuration = 6 * 1000;
var flame = document.querySelector('svg#flame');
var error = document.querySelector('g#Screen_x0020_with_x0020_error');
var wrench = document.querySelector('svg#wrench');
var cb = function () {
    var dateNow = Date.now();
    var timeDiff = dateNow - lastDate;
    if (timeDiff >= animationDuration * 0.45 &&
        timeDiff < animationDuration * 0.5) {
        flame.classList.add('hidden');
        error.classList.remove('hidden');
    }
    else if (timeDiff >= animationDuration * 0.55 &&
        timeDiff < animationDuration * 0.6) {
        flame.classList.remove('hidden');
        error.classList.add('hidden');
    }
    else if (timeDiff >= animationDuration * 0.6 &&
        timeDiff < animationDuration) {
        flame.classList.add('hidden');
        error.classList.remove('hidden');
    }
    else if (timeDiff >= animationDuration) {
        flame.classList.remove('hidden');
        error.classList.add('hidden');
        wrench.classList.remove('animate');
        wrench.classList.add('animate');
        lastDate = dateNow;
    }
    window.requestAnimationFrame(cb);
};
window.requestAnimationFrame(cb);
