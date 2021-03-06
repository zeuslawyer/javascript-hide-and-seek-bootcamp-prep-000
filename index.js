

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
function hasNoMoreChildren(obj) {
  //check if the passed in val has chilren - if not, then it's the deepest child
  if (obj.children.length === 0) {
    return true;
  }
}

f
function deepestChild(){
  
  let current = document.getElementById('grand-node');
  
  while (current) {
    if (hasNoMoreChildren(current)) {
      return current;
    }
    //else
    current = current.children[0];
    
  }
  return null;
}