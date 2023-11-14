const { add, sub, mult, div } = require("./math.js");
// Node runs on a server - not in a browser (backend not frontend)
// The console is the terminal window not the devtools of the browser
console.log("Hello world");
// There's no window object instead we have a global object
console.log(global);
// CommonJS modules instead of ES6 modules
const os = require("os");
const path = require("path");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(add(2, 3));
console.log(sub(2, 3));
console.log(mult(2, 3));
console.log(div(2, 3));
