var randomNumber1  = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6);
  
  if (randomNumber1 === 1) {
      document.getElementById("x").src="images/dice1.png"; 
  } else if (randomNumber1 === 2) { 
      document.getElementById("x").src="images/dice2.png"; 
  } else if (randomNumber1 === 3) {
      document.getElementById("x").src="images/dice3.png"; 
  } else if (randomNumber1 === 4) {
    document.getElementById("x").src="images/dice4.png"; 
  } else if (randomNumber1 === 5) {
    document.getElementById("x").src="images/dice5.png"; 
  } else if (randomNumber1 === 6) {
    document.getElementById("x").src="images/dice6.png"; 
  }


          
          if (randomNumber2 === 1) {
              document.getElementById("xx").src="images/dice1.png"; 
          } else if (randomNumber2 === 2) { 
              document.getElementById("xx").src="images/dice2.png"; 
          } else if (randomNumber2 === 3) {
              document.getElementById("xx").src="images/dice3.png"; 
          } else if (randomNumber2 === 4) {
            document.getElementById("xx").src="images/dice4.png"; 
          } else if (randomNumber2 === 5) {
            document.getElementById("xx").src="images/dice5.png"; 
          } else if (randomNumber2 === 6) {
            document.getElementById("xx").src="images/dice6.png"; 
          }
  

            if (randomNumber2 > randomNumber1) {
              document.querySelector("h1").innerHTML = ("Player 2 Wins!");
            } else if (randomNumber2 < randomNumber1) {
              document.querySelector("h1").innerHTML = ("Player 1 Wins!");
            } else if (randomNumber2 === randomNumber1) {
              document.querySelector("h1").innerHTML = ("Draw!");
            }







