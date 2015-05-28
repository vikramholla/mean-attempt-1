var fs = require("fs");
filepath = process.argv[2];

var buf = fs.readFileSync(filepath);
var str = buf.toString();
var strarray = str.split('\n');

console.log (strarray.length - 1);

