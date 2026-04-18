function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function getAllPlayers() {
  let game = gameObject();                  
  let teams = Object.values(game);          
  let allPlayers = {};                      

  teams.forEach(function(team) {            
    let teamPlayers = team.players;         
    Object.assign(allPlayers, teamPlayers); 
  });

  return allPlayers
}
function numPointsScored(playerName) {
  return Object.entries(getAllPlayers()).find(function(entry) {
    return entry[0] === playerName;
  })[1].points;
}
function shoeSize(playerName){
    return Object.entries(getAllPlayers()).find(function(entry){
       return entry[0]===playerName;
    })[1].shoe;
}
function teamColors(teamName) {
  return Object.values(gameObject()).find(function(team) {
    return team.teamName === teamName;
  }).colors;
}

function teamNames() {
  return Object.values(gameObject()).map(function(team) {
    return team.teamName;
  });
}

function playerNumbers(teamName) {
  const team = Object.values(gameObject()).find(function(team) {
    return team.teamName === teamName;
  });
  return Object.values(team.players).map(function(player) {
    return player.number;
  });
}

function playerStats(playerName) {
  return Object.entries(getAllPlayers()).find(function(entry) {
    return entry[0] === playerName;
  })[1];
}

function bigShoeRebounds() {
  let allPlayers = getAllPlayers();
  let playerList = Object.values(allPlayers);
  let biggestShoePlayer = playerList.reduce(function(maxPlayer, currentPlayer) {
    if (currentPlayer.shoe > maxPlayer.shoe) {
      return currentPlayer;
    } else {
      return maxPlayer;
    }
  });
  return biggestShoePlayer.rebounds;
}
