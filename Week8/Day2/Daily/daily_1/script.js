const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let usernames = [];
gameInfo.forEach((item, arr)=> {
    usernames.push(`!${item.username}`)
    // console.log(usernames)
})
console.log(usernames)

let playersWin = [];
gameInfo.forEach((item, arr)=> {
    if(item.score > 5){
        playersWin.push(`!${item.username}`)
    }
    // console.log(usernames)
})
console.log(playersWin)

let totalScorePlayers = 0;
gameInfo.forEach((item, arr)=> {
    totalScorePlayers +=item.score
    }
    // console.log(usernames)
)
console.log(totalScorePlayers)