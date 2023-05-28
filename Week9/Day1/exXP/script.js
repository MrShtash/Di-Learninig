// 1 HTML Form
// see index.html

// 2 HTML Form #2
// see index.html

// 3 JSON Mario
// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

let jsonMarioGame = JSON.stringify(marioGame, null, 2); // stringify use object as 1st param and converts into a str presentation. Null - optional, 2 - optional (spaces)
console.log(jsonMarioGame);
let jsonMarioGame1 = JSON.parse(jsonMarioGame).characters.mario.speed; // take JSON str and convert to JavaScript object, take speed value
console.log(jsonMarioGame1);