"use strict";

require("./Component.js");
var a = 10;
var arrowFunction = function arrowFunction() {
  console.log("Arrow Funciton");
};
var myPromise = new Promise(function (resolve, reject) {
  resolve(10);
});
console.log([1, 2, 3].includes(4));