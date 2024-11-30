    // for now i've put the whole code in start game function so that after clicking the button each time 
// new numbers will be rendered

//initialize two variables to draw randon cards from 2 to 11
let randomCard = Math.floor(Math.random()*(12-2)+2)
let cards = []
// console.log(firstCard)
//sum of the two random cards picked from a deck of card
let sum = 0;
// let sum = 22
let message = "";
//logic to check if the game is on or over
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el")
let sumText = document.getElementById("sum")
console.log (cards)
let card = document.getElementById("card")

let player = {
    name : "per",
    chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+ player.chips



function startGame(){
    let firstCard = Math.floor(Math.random()*(12-2)+2)
    let secondCard = Math.floor(Math.random()*(12-2)+2)
    
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}



function renderGame(){
    
    
    // card.textContent = "CARDS : "+cards[0]+" & "+cards[1]
    card.textContent = "CARDS: "
    for(let i = 0; i<cards.length; i++){
        card.textContent += cards[i]+" "
    }


    //logic of the game
    sumText.textContent = "SUM : "+sum
if (sum <= 20) {
    message = "Wanna draw a new card 🤫";
    
}
else if(sum === 21){
    message = "Blackjack! 🎉";
    hasBlackJack = true;
   
   
}
else{
    message = "Better luck next time BUD 🥲"
    isAlive = false;
}

messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackJack === false){
        sum += randomCard
        cards.push(randomCard)
        renderGame()
    }
    }
    