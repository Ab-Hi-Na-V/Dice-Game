var draw_ =0, ply1 = 0, ply2 = 0;


var player1 = prompt("Enter 1st player name:");
if (player1 == null || player1 == "") {
     prompt("Enter 1st player name:");
}
var player2 = prompt("Enter 2nd player name:");
if (player2 == null || player2 == "") {
     prompt("Enter 2nd player name:");
}

document.querySelector(".player_1").innerHTML = player1;
document.querySelector(".player_2").innerHTML = player2;
document.querySelector(".player_1_").innerHTML = player1;
document.querySelector(".player_2_").innerHTML = player2;

//dice 1
function Result() {
    var random1 = Math.floor(Math.random() * 6) + 1;
    var randromDiceImage1 = "Dice-" + random1 + ".svg";

    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randromDiceImage1);

    // dice 2

    var random2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "Dice-" + random2 + ".svg";

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (random1 > random2) {
        document.querySelector("h1").innerHTML = "🏆" + player1 + " wins!";
        ply1 = ply1 + 1;
        document.querySelector(".result_1").innerHTML = ply1;
    } else if (random2 > random1) {
        document.querySelector("h1").innerHTML = player2 + " wins! 🏆";
        ply2 = ply2 + 1;
        document.querySelector(".result_2").innerHTML = ply2;
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
        draw_ = draw_ + 1;
        document.querySelector(".result_3").innerHTML = draw_;
    }
}
