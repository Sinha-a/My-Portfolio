//import styled from 'styled-components'
let hedwigFly = document.getElementById('flyingOwl');
let hedwigSit = document.getElementById('sittingOwl');
let firstMsg = document.getElementById('message-one');
let letter = document.getElementById('scroll');
hedwigSit.hidden = true;
firstMsg.hidden = true;
letter.hidden=true;

setTimeout(changingOwlPosition,6000);

function changingOwlPosition (){
   hedwigFly.hidden = true;
   hedwigSit.hidden= false;
   letter.hidden= false;

   setTimeout(openMsg,2000) ;  
};

function openMsg(){
  letter.hidden=true;
 firstMsg.hidden = false;
};


let card1 = document.getElementById('card-one');
let card2 = document.getElementById('card-two');
let card3 = document.getElementById('card-three');
let cardStack = document.getElementById('cardDeck');


 card1.hidden = true;
 card2.hidden = true;
 card3.hidden = true;

 cardStack.onmousedown = function (){
    card1.hidden =false;
};

cardStack.onmouseup = function (){
    card2.hidden =false;
};

cardStack.onclick = function (){
    card3.hidden =false;
    setTimeout(callHowler,5000);
};

let theHowler = document.getElementById('howler');
theHowler.hidden = true;

function callHowler () {
    theHowler.hidden = false;
};