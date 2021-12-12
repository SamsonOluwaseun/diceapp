//Randomly select dice
var randomNumber1=Math.floor(Math.random()*6)+1// Generate Random number between 0 and 1
var randomNumber2=Math.floor(Math.random()*6)+1
var dice="images/dice"+randomNumber1+".png"
var dice2="images/dice"+randomNumber2+".png"
document.querySelector(".img1").setAttribute("src", dice)
document.querySelector(".img2").setAttribute("src", dice2)

// Rename Page header
if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else {document.querySelector("h1").innerHTML="Draw"}

