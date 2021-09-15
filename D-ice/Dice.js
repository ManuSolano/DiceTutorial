let images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png",];
function  RandomNumber  () {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);
    
    document.getElementById("d1").src=images[randomNumber1];
    document.getElementById("d2").src=images[randomNumber2];

    if(randomNumber1>randomNumber2){
        result="Player 1 wins!";
    }
    else if(randomNumber2>randomNumber1){
        result="Player 2 wins!";
    }
    else if(randomNumber2==randomNumber1){
        result="It's a tie!";
    }
    document.getElementById("result").innerHTML = result;
}