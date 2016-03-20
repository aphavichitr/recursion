// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var arrContents = [];
    for (var i = 0; i < obj.length; i++) {
      arrContents.push(stringifyJSON(obj[i]));
    }
    return '[' + arrContents + ']';
  } else if (typeof obj === 'object') {
    var objContents = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      } 
      objContents.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objContents.join() + '}';
  }
};
