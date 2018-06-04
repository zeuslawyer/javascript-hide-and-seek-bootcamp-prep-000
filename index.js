

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list');
  console.log('ZP>>>' + lis);
  for (var i=0; i < lis.length; i++) {
    let currentVal = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = currentVal + n;
  }
}


// test function for use within deepestChild()
function testCriteria(obj) {
  if (obj.children.length === 0) {
    return true;
  }
}

function deepestChild(){
  console.log('HERE IT IS!!!   ' + document.getElementById('grand-node').children);
  
  let current = document.getElementById('grand-node');
  let holder = [];
  
  while (current) {
    if (testCriteria(current)) {
      return current;
    }
    current = current.children[0];
    
  }
  return null;
}