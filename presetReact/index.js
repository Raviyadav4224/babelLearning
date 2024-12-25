"use strict";

// npx babel sourceFolderToCompile --out-dir outputFolderName

//1. @babel/preset-env it converts the modern JS into backward compatible code

var arrowFunction = function arrowFunction() {};

//2. Plugin babel-plugin-transform-remove-console - It removes all the console after compiling

var sum = function sum() {};

// 3. @babel/preset-react - It converts JSX into JS