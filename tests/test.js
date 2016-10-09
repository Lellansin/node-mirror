'use strict';

const mirror = require('../');

let arr1 = [ 1,2,3,4,5,6,7 ];
let arr2 = [ 3,4,2,1,3,5,6 ];

for (let [a, b] of mirror(arr1, arr2)) {
  console.log(a, b);
}
