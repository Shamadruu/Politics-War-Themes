// ==UserScript==
// @name         Darker Theme for Poliitics and War
// @namespace    https://github.com/Shamadruu/Politics-War-Themes/raw/master/
// @version      1.9
// @description  try to take over the world!
// @author       Shamadruu
// @downloadURL  https://github.com/Shamadruu/Politics-War-Themes/raw/master/darker.user.js
// @updateURL    https://github.com/Shamadruu/Politics-War-Themes/raw/master/darker.user.js
// @match        https://politicsandwar.com/*
// @match        https://test.politicsandwar.com/*
// @grant        none
// ==/UserScript==
(function(){
	var addGlobalStyle = function(style) {
        let styleElement = document.createElement("style");
        styleElement.innerHTML = style;
        document.head.appendChild(styleElement);
    }
	addGlobalStyle('body {background: #17191c!important; color:white;}');
	//addGlobalStyle('.container.white-bg {box-shadow: -5px 0 5px -5px transparent,5px 0 5px -5px transparent;}');
	addGlobalStyle('body > * {background-color: #17191c!important;}');
    addGlobalStyle('.ck-content, ck-content * {color:white!important;}');
    document.querySelectorAll(".ck-content *").forEach((e)=>{ e.style.color = "white"})
	addGlobalStyle('div.hidden-xs:nth-child(1) { background-color: #3c3c3c;}');
	addGlobalStyle('body a {color: #33ccff;}');
	addGlobalStyle('body a:hover {color: #cc33ff;}');
	addGlobalStyle('.informationbar, .columnheader, body table.nationtable th {background-color: #003d99');
	addGlobalStyle('body p, h3, form,h1, h2, h3, h4, #leftcolumn,body table.nationtable { color:#fff;}');
	addGlobalStyle('.achievement-showcase-title {color: #d7d77c');
	addGlobalStyle('#header > img:nth-child(1) {filter: invert(1);}');
	addGlobalStyle('div.col-md-1:nth-child(1) > img:nth-child(1), div.col-md-1:nth-child(3) > img:nth-child(1) {filter:invert(1);}');
	addGlobalStyle('div.btn-group > .btn {background-color:#fff; border-color: #17191c; color: black; }');
	addGlobalStyle('.nationtable tr:nth-child(2n+1) {background-color:#22252a;}');
	addGlobalStyle('.nationtable tr:nth-child(2n), .offWhite {background-color:#17191c;}');
	addGlobalStyle('.nationtable tr, table.nationtable td {border: #595959 solid 1px;}');
	addGlobalStyle('.nation-activity {background-color: #595959;}');	
	addGlobalStyle('.plot-container .svg-container {filter:invert(.85);}');
	addGlobalStyle('.breadcrumb {background-color: #454545;}');
	addGlobalStyle('.breadcrumb li {color:#fff!important;}');
	addGlobalStyle('.alert.alert-warning.center, .alert.alert-danger, .alert.alert-info {background-color: #3c3c3c;}');
	addGlobalStyle('.nationtable tr > td.center > span.center{background-color:#333!important;}');
	addGlobalStyle('#header, div.container:nth-child(10) > div:nth-child(1), #leftcolumn, #rightcolumn {background-color: #17191c;}');
	addGlobalStyle('.red-msg {background: #bf5340;}');
	addGlobalStyle('.blue-msg {background: #4084bf;}');
    addGlobalStyle('.alert.alert-info {display:none;}');
    addGlobalStyle('.ck.ck-editor__main * {color: black;}');
})();
