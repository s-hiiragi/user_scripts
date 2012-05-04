// ==UserScript==
// @name         customize_yakoubus.user.js
// @description  夜行バス比較なびをカスタマイズ
// @include      http://www.bushikaku.net/search/*
// @author       s_hiiragi <http://github.com/s-hiiragi>
// ==/UserScript==

/* 機能
 *   ・アイコンにツールチップを付ける (意味をすぐ忘れるので...)
 */

if (!document.readyState || document.readyState !== 'complete') {
	if (window.addEventListener) {
		window.addEventListener('load', main, false);
	} else if (window.attachEvent) {
		window.attachEvent('onload', main, false);
	} else {
		window.onload = main;
	}
} else {
	main();
}

function $(id) { return document.getElementById(id); }
function $q(selector) {
	return Array.prototype.slice.call(document.querySelectorAll(selector));
}

function main() {
	var a = $q('#bus_type_foot img');
	for (var i = 0, l = a.length; i < l; ++i) {
		var e = a[i], 
			e_name = e.parentNode.parentNode.querySelector('.icon_name'), 
			e_text = e.parentNode.parentNode.querySelector('.icon_cont'), 
			text = (e_name? (e_name.textContent || e_name.innerText)+'\n' : '')
				+ (e_text? (e_text.textContent || e_text.innerText) : ''), 
			imgs = $q('img[src="'+ e.getAttribute('src') +'"]');
		for (var k = 0, m = imgs.length; k < m; ++k) {
			var img = imgs[k];
			if (img !== e) img.title = text;
		}
	}
}
