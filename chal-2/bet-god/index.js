const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '23eedc5010msh73229f3320afb98p120873jsna25635726417',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

const getStatsBtn = document.getElementById("getStatsBtn")
getStatsBtn.addEventListener("click", getStats)

let team1Name = '';
let team2Name = '';




function getStats() {
    fetch(`https://api-nba-v1.p.rapidapi.com/games?date=${formattedDate}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const gamesForTheDay = response.response
            const gameIDs = gamesForTheDay.map(game => game.id)
            console.log(gameIDs);

            function fetchData(gameIDs) {
                const gamesContainer = document.createElement('div');
                gamesContainer.className = 'games-container';
                document.body.appendChild(gamesContainer);
        
                for(let i = 0; i < gameIDs.length; i++){
                    const currentGameID = gameIDs[i]
                    fetch("https://api-nba-v1.p.rapidapi.com/games/statistics?id=" + currentGameID, {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
                            "x-rapidapi-key": "23eedc5010msh73229f3320afb98p120873jsna25635726417"
                        }
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(responseData => {
                        
                        const teams = responseData.response;
                        const team1 = teams[0];
                        const team1Name = teams[0].team.name
                        console.log(team1Name)
                        const team1Stats = team1.statistics[0];
                        const team1Assists = team1Stats.assists;
                        const team1Rebounds = team1Stats.totReb;
                        const team1Points = team1Stats.points;

                        const team2 = teams[1];
                        const team2Name = teams[1].team.name
                        console.log(team2Name)
                        const team2Stats = team2.statistics[0];
                        const team2Assists = team2Stats.assists;
                        const team2Rebounds = team2Stats.totReb;
                        const team2Points = team2Stats.points;
                        const gameRatio = (team1Assists + team1Rebounds + team2Assists + team2Rebounds)/(team1Points + team2Points)
                        console.log(gameRatio)

                        const gameContainer = document.createElement('div');
                        gameContainer.className = 'game-container';
                        gamesContainer.appendChild(gameContainer);
                        const team1Element = document.createElement('div');
                        team1Element.innerText = team1Name;
                        gameContainer.appendChild(team1Element);
                        const vsElement = document.createElement('div');
                        vsElement.innerText = 'vs';
                        gameContainer.appendChild(vsElement);
                        const team2Element = document.createElement('div');
                        team2Element.innerText = team2Name;
                        gameContainer.appendChild(team2Element);
                        const ratioElement = document.createElement('div');
                        ratioElement.innerText = `Ratio: ${gameRatio}`;
                        gameContainer.appendChild(ratioElement);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
            }
            fetchData(gameIDs)
        })
        .catch(err => console.error(err));
};

