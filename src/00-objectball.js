function gameObject(){
    return{
        home:{
            teamName: "Brooklyn Nets",
            colors:["Black","White"],
            players:{
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 3,
                    slamDunks: 15
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away:{
            teamName: "Charlotte Hornets",
            colors:["Turquoise","Purple"],
            players:{
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 12
                }
            }
        }
    };
}
 

function findPlayer(playerName){
    const game =gameObject();
    for (let teamm in game) {
        if(game[team].players[playerName]){
            return game[team].players[playerName];
        }
    }
    return null;
}

function numPointsScored(playerName){
    let player = findPlayer(playerName);
    return player ?   player.points : null;
}

function shoeSize(playerName){
    let  player = findPlayer(playerName);
    return player ? player.shoe  :   null;
}

function teamColors(teamName){
    const game = gameObject();
    for (let team in game){
        if(game[team].teamName === teamName)
            return game[team].colors;
    }
}

function teamNames(){
    const game = gameObject();
    return [game.home.teamName,  game.away.teamName];
}

function playerNumbers(teamName){
    const game  = gameObject();
    for (let team in game) {
        if(game[team.teamName === teamName]){
            return Object.values(game[team].players).map(player => player.number);
        }
    }
    return null;
}

function playerStats(playerName){
    return findPlayer(playerName);
}

function  bigShoeRebounds(){
    const game = gameObject();
    let maxShoeSize = 0;
    let playerWithMaxShoe = null;

    for(let team in game) {
        for (let player in game[team].players){
            if(game[team].players[player].shoe > maxShoeSize){
                maxShoeSize =  game[team].players[player].shoe;
                playerWithMaxShoe  = game[team].players[player];
            }
        }
    }
    return playerWithMaxShoe ?   playerWithMaxShoe.rebounds  : null;
}

function mostPointScored(){
    const game = gameObject();
    let topScorer = null;
    let maxPoints = 0;

    for (let team in game){
        for(let player in game[team].players){
            if(game[team].players[player].points > maxPoints){
                maxPoints = game[team].players[player].points;
                topScorer = player;
            }
        }
    }
    return topScorer;
}

function winningTeam() {
    const game = gameObject();
    let highestScoringTeam  = null;
    let maxTeamPoints = 0;

    for (let team in game) {
        let teamPoints = Object.values(game[team].players).reduce((sum, player) => sum +  player.points, 0);
        if(teamPoints > maxTeamPoints){
            maxTeamPoints = teamPoints;
            highestScoringTeam = game[team].teamName;
        }
    }
    return highestScoringTeam;
}

function playerWithLongestName(){
    const game = gameObject();
    let LongestName = "";

    for (let team in game){
        for (let player in game[team].players){
            if(player.length  > LongestName.length){
                LongestName =  player;
            }
        }
    }
    return LongestName;
}

function doesLongNameStealAton(){
    const game = gameObject();
    let playerWithLongest =  playerWithLongestName();
    let maxsteals = 0;
    let playerMostSteals = "";

    for (let team in game){
        for (let player in game[team].players){
            if (game[team].players[player].steals > maxSteals){
                maxSteals = game[team].players[player].steals;
                playerMostSteals = player;
            }
        }
    }
    return playerWithLongest === playerMostSteals;
}