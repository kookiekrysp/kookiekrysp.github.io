var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/header-roses.jpg') {
        myImage.setAttribute('src', 'images/pink-wine.jpeg');
    } else {
        myImage.setAttribute('src', 'images/header-roses.jpg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Kookie Krysp is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Kookie Krysp is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
};