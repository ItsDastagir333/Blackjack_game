let cards = []
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Dastagir",
    coins : 123
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : "+player.coins

function getRandomCard(){
    let value =Math.floor( Math.random()*13 ) + 1
    if(value>10) return 10
    else if (value===1) return 11
   return value
}

function startgame(){
    isAlive = true
    hasBlackjack = false
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards=[firstcard, secondcard]
    sum=firstcard + secondcard
    rendergame()
}
function rendergame(){
    cardsEl.textContent = "Cards : "
    for(let i=0; i<cards.length; i++){
    cardsEl.textContent = cardsEl.textContent +cards[i]+" "
    }
    sumEL.textContent = "Sum : " +sum
    if(sum<20){
        message = "Do you want to draw a new card? "
    }
    else if( sum === 21){
        message = "Wohoo!! You've got the Blackjack! "
        hasBlackjack = true
    }
    else{
        message="You've out of the game !"
        isAlive = false
    }

  messageEl.textContent = message
}
function newcard(){
  if(isAlive && !hasBlackjack){

    let card = getRandomCard()
    sum+=card
    cards.push(card)
    rendergame()
  }
}