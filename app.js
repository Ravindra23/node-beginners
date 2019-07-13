var module = require('./module-and-export');
var value = module.PI;


var add = module.sum;
module.counter();
console.log(value);

add(2,78);
add(value,5.6789);