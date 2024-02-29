"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);

    if (guess === 0 || guess === ""){
        document.querySelector(".message").textContent = 'No Number';
    }else if (guess > secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector(".message").textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }else if (guess < secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector(".message").textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }else if (guess === secretNumber){
        document.querySelector(".message").textContent = 'Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.fontSize = '3rem';
    }
});

document.querySelector('.again').addEventListener('click', function (){
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector(".guess").value = '';
    document.querySelector("body").style.backgroundColor = 'coral';
    document.querySelector('.number').style.fontSize = '2rem';   
});

/*
    1. Select an element 'again' class and attach a click event handler
    2. In the handler function, restore intial values of score and secretnumber variables
    3. Restore the initial contidions of message, number, score and guess input fiels
    4. Also restore the original background color and font size as well
*/