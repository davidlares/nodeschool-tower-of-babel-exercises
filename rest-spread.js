var rawArgs = process.argv.slice(2);
var args = [];

    rawArgs.forEach(val => {
      let commaSep = val.split(',');
      commaSep.forEach(val => {
        if(val !== '') args.push(+val);
      });
    });


function avg(...args){
	var sum = 0;
	args.forEach(i => {
		sum += i;
	});
	return sum / args.length;
}

console.log(avg(...args));