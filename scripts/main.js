var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IndianMotocycle.jpg') {
      myImage.setAttribute ('src','images/IndianMotocycle7.jpg');
    } else {
      myImage.setAttribute ('src','images/IndianMotocycle.jpg');
    }
  }
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name' , myName);
  myHeading.textContent = 'This is a cool website, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This is a cool website, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
