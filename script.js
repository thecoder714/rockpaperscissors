player1 = "",player2 = "",turn=0,score1=0,score2=0;function check() {player1 = document.getElementById("p1").value;player2 = document.getElementById("p2").value;if (player1==player2){turn++;}else if(player1=="rock"){if(player2=="paper"){turn++;score2++;}else if(player2=="scissors"){turn++;score1++;}}else if(player1=="paper"){if(player2=="rock"){turn++;score1++;}else if(player2=="scissors"){turn++;score2++;}}else if(player1 == "scissors") {if(player2=="paper"){turn++;score1++;}else if(player2=="rock"){turn++;score2++;}}document.getElementById("player").innerHTML="Player1: "+score1+", Player2: "+score2;document.getElementById("p1").value="";document.getElementById("p2").value="";}

// -----Here's what's going on----

// (player1 = ""), (player2 = ""), (turn = 0), (score1 = 0), (score2 = 0);
// function check() {
// 	player1 = document.getElementById("p1").value;
// 	player2 = document.getElementById("p2").value;
// 	if (player1 == player2) {
// 		turn++;
// 	} else if (player1 == "rock") {
// 		if (player2 == "paper") {
// 			turn++;
// 			score2++;
// 		} else if (player2 == "scissors") {
// 			turn++;
// 			score1++;
// 		}
// 	} else if (player1 == "paper") {
// 		if (player2 == "rock") {
// 			turn++;
// 			score1++;
// 		} else if (player2 == "scissors") {
// 			turn++;
// 			score2++;
// 		}
// 	} else if (player1 == "scissors") {
// 		if (player2 == "paper") {
// 			turn++;
// 			score1++;
// 		} else if (player2 == "rock") {
// 			turn++;
// 			score2++;
// 		}
// 	}
// 	document.getElementById("player").innerHTML =
// 		"Player1: " + score1 + ", Player2: " + score2;
// 	document.getElementById("p1").value = "";
// 	document.getElementById("p2").value = "";
// }