
//console.log(process.argv);

var total = 0;
for ( i = 2; i < process.argv.length; i++) {
	var n = Number(process.argv[i])
	total = total + n;
}
console.log (total);
