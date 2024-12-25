// npx babel sourceFolderToCompile --out-dir outputFolderName

//1. @babel/preset-env it converts the modern JS into backward compatible code
//2. Plugin babel-plugin-transform-remove-console - It removes all the console after compiling
// 3. @babel/preset-react - It converts JSX into JS
// 4. Custom babel plugins
const arrowFunction = () => {
  console.log("This is an Arrow Function");
};

console.log("start");
const sum = () => {
  console.log("This is an Arrow Function");
};

console.log("End");



function greet() {
  console.log("Greet function")
}