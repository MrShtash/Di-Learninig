class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}
class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}
const pet = new Flamingo();
// forcast: "I'm pink. 🌸"
// fact: I'm pink. 🌸, I'm a bird. 🦢. Coz we cosole '... pink', after that super '... bird'