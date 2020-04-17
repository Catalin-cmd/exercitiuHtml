

let myVariable;
myVariable = 'Catalinel';
// sau poti folosi let myVariable = 'Catalinel'; let este o variabila, un loc de stocare dinamic
/*
Comentariul poate fi adaugat si asa;
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpeg') {
      myImage.setAttribute ('src','images/firefox-icon2.jpeg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h5');

function setUserName() {
    let myName = prompt('Baga, boss, aici numele de jmecher.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Vulpea nr. 1, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Vulpea nr. 1, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

  function setUserName() {
    let myName = prompt('Baga, boss, aici numele de jmecher.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Vulpea nr. 1, ' + myName;
    }
  }