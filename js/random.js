var sites = [
    '../films/Кп.html',
    '../films/Кп2.html',
    '../films/Кп3.html',
    '../films/Кп4.html',
    '../films/Кп5.html',
    '../films/Кп6.html'
];

function rndSite() {
    'use strict';
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}
