var inputs = process.argv.slice(2);
var result = inputs.map((x) => {
	return x.charAt(0);
}).reduce((oldValue,newValue) => {
	return oldValue + newValue; 
});

console.log(result);