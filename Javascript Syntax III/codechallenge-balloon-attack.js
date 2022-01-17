class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`);
  }
}

  // Write function below
 function balloonAttack(playerOne, playerTwo) {
    for (let i = 0; i < 10; i++) {
      playerOne.balloonCount = playerOne.balloonCount - playerTwo.hitsPerMinute;
      playerTwo.balloonCount = playerTwo.balloonCount - playerOne.hitsPerMinute;
    }
    if (playerOne.balloonCount > playerTwo.balloonCount) {
      return playerOne.name;
    } else if (playerOne.balloonCount < playerTwo.balloonCount) {
      return playerTwo.name;
    } else {
      return "Tie!";
    }
  }

const p1 = new Player("p1", 5);
const p2 = new Player("p2", 2);

console.log(balloonAttack(p1, p2));
