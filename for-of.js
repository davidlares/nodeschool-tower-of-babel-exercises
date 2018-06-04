const max = process.argv[2];
let FizzBuzz = {
	[Symbol.iterator](){
		var min = 1;
		return { 
			next() {
				// hacemos la evaluacion fizzbuzz
				if(min > max) {
					return {done: true}
				}

				let value = min;
				
				if(value % 3 === 0) {
					value = 'Fizz';
				} else if(value % 5 === 0) {
					value = 'Buzz';
				} else if(value % 15 === 0){
					value = 'FizzBuzz';
				} 
				
				min++;
				return {done: false, value: value}
			}
		}
	}
}

for(var n of FizzBuzz){
	console.log(n);
}