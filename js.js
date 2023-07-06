
let cards = []
let sum = 0
let hasBlackjack = false 
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEL = document.getElementById("card-el")
let playerEL = document.getElementById("player-el")
let player = {
    name: prajwal ,
    chips: 1} 



playerEL.textContent = player.name + "$" + player.chips

function getRandorCard(){
 let randomNumber = Math.floor( Math.random() * 13 ) + 1
if (randomNumber > 10 ){
    return 10
}else if  (randomNumber === 1){
    return 11 
} else {
    return randomNumber
}
}

function startGame(){
    isAlive =true
    let firstCard = getRandorCard()
    let secondCard = getRandorCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEL.textContent = "cards: "
    for (let i=0; i<cards.length; i++){
        cardsEL.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if ( sum <= 20){
        message = "do you want to new card"
    } else if (sum === 21 ){
        message = "you got the blackjack!"
        hasBlackjack = true
    }else {
        message="you are out of game"
        isAlive = false
    }
    // console.log(message)  
    messageEl.textContent = message
}
function newcard(){
    // console.log("draw a new card from the deck!")
    if (isAlive === true && hasBlackjack === false){
    let card = getRandorCard ()
    sum += card 
    cards.push(card)
    console.log(cards)
    renderGame()}
}
