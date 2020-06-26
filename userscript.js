// ==UserScript==
// @name         Replace cold tourkey content
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
var displayElement = document.getElementById("displayed-text")
if(displayElement){
    //add scripts and css

var imported = document.createElement('script');
imported.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
document.head.appendChild(imported);

            // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];

        // Create new link Element
        var link = document.createElement('link');

        // set the attributes for link element
        link.rel = 'stylesheet';

        link.type = 'text/css';

       // link.integrity = 'sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk';

        link.crossorigin = 'anonymous';

        link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css';

        // Append link element to HTML head
        head.appendChild(link);



var customUrls = JSON.parse(document.getElementById("displayed-text").innerHTML);

    console.log(customUrls);
    document.getElementById("displayed-text").innerHTML = '<div class=""><div class="container">  <div class="row "><div class="col-sm d-flex flex-wrap justify-content-center"id="displayed-text-1"></div></div></div></div>'

var i = 0;
for (var key in customUrls) {
    if( i < 0){
         //document.getElementById("displayed-text").innerHTML = "<a href="+customUrls[key]+" target='_blank' class='text '>"+key+"</a><div id='displayed-text-1'></div>"
    }else{
        var e = i+1
        document.getElementById("displayed-text-1").innerHTML += '<div class="w-25 p-2 m-2 "><a href='+customUrls[key]+' target="_blank" class="btn-primary "><div class="card-header border border-light">'+key+'</div></a></div>'
    }
  console.log("key " + key + " has value " + customUrls[key]);
    i++
}
    'use strict';



    let myElements = document.querySelectorAll(".text");

for (let i = 0; i < myElements.length; i++) {
	myElements[i].style.color = "#FFFFFF";
}
    }
})();

