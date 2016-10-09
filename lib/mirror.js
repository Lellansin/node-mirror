'use strict';

module.exports = function * (...args) {
  if (args.some((arr) => !Array.isArray(arr))) {
    return yield * mirrorJson(args);
  }
  yield * mirrorArray(args);
};

function * mirrorArray(args) {
  for (let i = 0; i < args[0].length; i++) {
    let tmp = args.map((arr) => arr[i]);
    yield tmp;
  }
}

function * mirrorJson(args) {
  for (let key in args[0]) {
    let tmp = args.map((obj) => obj[key]);
    yield [...tmp, key];
  }
}
