let planets = [
    {name: "Mercury", moons: 0},
    {name: "Venus", moons: 0},
    {name: "Earth", moons: 1},
    {name: "Mars", moons: 0},
    {name: "Jupiter", moons: 2},
    {name: "Saturn", moons: 3},
    {name: "Uranus", moons: 4},
    {name: "Neptune", moons: 0}
];

for (let planet of planets) {
    let div = document.createElement('div');
    div.classList.add('planet');
    console.log('div', div);
    let section = document.getElementsByClassName('listPlanets')[0];
    section.appendChild(div);

    for (let i = 0; i < planet.moons; i++) {
        let moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        moonDiv.style.top = i * 10 + "px";
        moonDiv.style.right = i * 10 + "px";
        div.appendChild(moonDiv);
    }
}

// function getPlanetColor(name) {
//   switch (name) {
//     case "Mercury":
//       return "gray";
//     case "Venus":
//       return "orange";
//     case "Earth":
//       return "blue";
//     case "Mars":
//       return "red";
//     case "Jupiter":
//       return "brown";
//     case "Saturn":
//       return "yellow";
//     case "Uranus":
//       return "lightblue";
//     case "Neptune":
//       return "darkblue";
//     default:
//       return "gray";
//   }
// }