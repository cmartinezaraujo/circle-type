// const text = document.querySelector(".team-name");

// let circle = new CircleType(text).radius(180);

let circleTypes = [];

fetch("http://ergast.com/api/f1/current/constructorStandings.json")
.then(response => response.json())
.then(data => {
    const standings = data.MRData.StandingsTable.StandingsLists;
    // const standingsArray = standings.ConstructorStandings[0];
    const standingsContainer = document.querySelector(".standings-container");
    console.log("Standnings", standings);

    standings[0].ConstructorStandings.forEach(team => {
        insertTeam(
            standingsContainer,
            team.Constructor.name,
            team.position,
            team.points,
            team.Constructor.constructorId);
        console.log(team.Constructor.constructorId);
     });
});

const insertTeam = (container, team, position, points, id) => {
    const template = `
    <div class="team-container">
            <h2 class="team-name ${id}-ct">${team}</h2>
            <div class="circle-shape ${id}">
                <p class="team-place">${position}</p>
                <p class="team-points">${points} Points</p>
            </div>
    </div>`;

    container.insertAdjacentHTML("beforeend", template);
    addCircleType(id);
}

const addCircleType = (query) => {
    const text = document.querySelector(`.${query}-ct`);
    let circle = new CircleType(text).radius(180);
    circleTypes.push(circle);
};
