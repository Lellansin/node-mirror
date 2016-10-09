'use strict';

const mirror = require('../');

let obj1 = { name: 'Alan', age: 18, sex: 'male' };
let obj2 = { name: 'Bob', age: 18, sex: 'female' };
let obj3 = { name: 'Chris', age: 16, sex: 'female' };

for (let [v1, v2, key] of mirror(obj1, obj2)) {
  console.log('v1', v1, 'v2', v2, key);
}
