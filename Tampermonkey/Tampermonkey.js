// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://127.0.0.1:5500/D3.js/indexD3JS.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
// @grant        none
// ==/UserScript==

//D3.j3

(function() {
  'use strict';
  //checks if the value "index" is null
    if(localStorage.getItem("index") === null){
      localStorage.setItem('index', 1); // added this code to always add 1 
  }

  let a = parseInt(localStorage.getItem('index'));
  localStorage.setItem('start' + a, performance.now()); // performance.now() show milliseconds

  //Prints start time, end time and the total time for each interval
  window.addEventListener('load', function() {
    localStorage.setItem('end' + a, performance.now()); // performance.now() method returns a high resolution timestamp in milliseconds
    localStorage.setItem('time_counter' + a, (localStorage.getItem("end" + a) -localStorage.getItem("start" + a)));
    localStorage.setItem('index', a + 1); //  always add 1 in the value index in localStorage

    //how many times it should iterate
    if (a < 10 ) {
      setTimeout(function() {
        location.reload();
      }, 5000); // 5 seconds in milliseconds
    }
  }, false);
  
})();