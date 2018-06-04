let evenOrOdd = +process.argv[2];
let evenOrOddKey = evenOrOdd % 2 === 0 ? 'even':'odd';
var sum = +process.argv[3] + evenOrOdd;

var obj = {
	[evenOrOddKey]: evenOrOdd	
};

obj[sum] = sum;
console.log(obj)
