# node-mirror

A mirror traverse for es6

```
npm i for-mirror
```

usage

```javascript
const mirror = require('mirror');

let arr1 = [ 1,2,3,4,5,6,7 ];
let arr2 = [ 3,4,2,1,3,5,6 ];

for (let [a, b] of mirror(arr1, arr2)) {
  console.log(a, b);
}
```

output

```
1 3
2 4
3 2
4 1
5 3
6 5
7 6
```
