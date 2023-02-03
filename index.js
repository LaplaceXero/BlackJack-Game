let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let msgOut = document.getElementById("message");

let player = {
    name:"mk",
    balance: 500,

    win: function () {
        this.balance += 100;
    },

    loss: function () {
        this.balance -= 100;
    }
}


function StartGame()
{
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard,secondCard];
    isAlive = true;
    hasBlackJack = false;
    document.getElementById("player-el").textContent = player.name +": R" +player.balance;
    renderGame();
}

function renderGame()
{
    document.getElementById("cards-el").textContent = "Cards:";

    for(let i=0;i<cards.length;i++)
    {
        document.getElementById("cards-el").textContent += cards[i] + " ";
    }

    document.getElementById("sum-el").textContent ="Sum: " + sum;
    if(sum < 21)
    {
        message = "Do you want to draw";
    }

    else if(sum === 21)
    {
        message = "You have BlackJack";
        hasBlackJack = true;
        player.win();
    }

    else{
        message = "You have lost the Game";
        isAlive = false;
        player.loss();
    }

    msgOut.textContent = message;

}

function newCard()
{
    if((isAlive === true) && (hasBlackJack === false))
    {
        let drawCard =getRandomCard();
        cards.push(drawCard);
        sum += drawCard;
        renderGame();
    }

    else{
        alert("game over man");
    }    
    
}

function getRandomCard()
{

    let ranNumber = Math.floor(Math.random()*13 + 1);
    console.log(ranNumber);

    if(ranNumber === 1)
    {
        return 11;
    }

    else if(ranNumber > 10) 
    {
        return 10;
    }

    else{
        return ranNumber;
    }
}



let hands =["rock","paper","scissor"];

function play()
{
    let player1 = Math.floor(Math.random()*3);
    let player2 = Math.floor(Math.random()* 3);
    console.log("Player 1: " + hands[player1]);
    console.log("Player 2: " + hands[player2]);

}

play();