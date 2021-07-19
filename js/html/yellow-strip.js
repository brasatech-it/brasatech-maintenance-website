"use strict";
exports.__esModule = true;
exports.generateStrip = function () {
    var yellowDiv = document.querySelector('div#yellow-strip');
    var yellowDivChilds = document.querySelectorAll('div#yellow-strip > div');
    yellowDivChilds.forEach(function (element) {
        yellowDiv.removeChild(element);
    });
    var blackDiv = {
        element: document.createElement('div'),
        style: null,
        diagonal: null
    };
    yellowDiv.appendChild(blackDiv.element);
    blackDiv.style = getComputedStyle(document.querySelector('div#yellow-strip > div'));
    blackDiv.diagonal = (parseInt(blackDiv.style.width) +
        parseInt(blackDiv.style.marginRight) * Math.SQRT2);
    var blackDivs = window.innerWidth / (blackDiv.diagonal - 20) -
        ((window.innerWidth / (blackDiv.diagonal - 20)) % 1) +
        2;
    for (var i = 0; i < blackDivs; i++) {
        yellowDiv.appendChild(document.createElement('div'));
    }
};
