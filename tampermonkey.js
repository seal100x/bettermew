// ==UserScript==
// @name         Mew enchantment AutoUpdate ver.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  个人向脚本，随着网页的更新，可能会失效。主要功能：https://mew.fun/Dove_yige/thoughts/69082567613583360
// @author       破损的鞘翅
// @match        https://mew.fun/n/*
// @icon         https://g.doveyige.top/s2/favicons?domain=mew.fun
// @grant        none
// @require      https://seal100x.github.io/bettermew/mew.js
// file:///E:/workspace/bettermew/mew.js

// ==/UserScript==

(function() {
    'use strict';

    window.onload = function () {
		var e = document.createElement("link");
		e.rel = "stylesheet";
		e.type = "text/css";
		e.href = "https://seal100x.github.io/bettermew/mew.css";
		document.head.appendChild(e);
    }

})();
