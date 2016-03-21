// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var elements = [];
  var body = document.body;

  getElements(body);

  function getElements(node) {
    if (node.classList) {
      for (var i = 0; i < node.classList.length; i++) {
        if (node.classList[i] === className) {
          elements.push(node);
        }
      }
    }
    for (var j = 0; j < node.childNodes.length; j++) {
      getElements(node.childNodes[j]);
    }
  };
  return elements;
};