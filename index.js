

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

function deepestChild(){
  let len = document.getElementById('#grand-node').childNodes.length;
  return document.getElementById('#grand-node').childNodes[len-1];
}