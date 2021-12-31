const team = {
    _players: [{firstName: 'Yuri', lastName: 'Katsudon', age: 25},
              {firstName: 'Victor', lastName: 'Romanof', age: 30},
              {firstName: 'Yuuri', lastName: 'Slovac', age: 19}
              ],
    _games: [{opponent: 'USA', teamPoints: 20, opponentPoints: 18},
            {opponent: 'Thailand', teamPoints: 52, opponentPoints: 5},
            {opponent: 'Canada', teamPoints: 31, opponentPoints: 40}
            ],
  
            get players() {
              return this._players;
            },
            get games() {
              return this._games;
            },
  
            addPlayer(firstName, lastName, age){
              const newPlayer = {firstName, lastName, age};
              this.players.push(newPlayer);
            },
  
            addGame(opponent, teamPoints, opponentPoints){
              const newGame = {opponent, teamPoints, opponentPoints};
              this.games.push(newGame);
            }
  
  
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('France', 25, 25);
  team.addGame('India', 10, 32);
  team.addGame('Germany', 40, 18);
  
  console.log(team.players);
  console.log(team.games);