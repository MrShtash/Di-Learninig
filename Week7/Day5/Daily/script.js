function bottlesOnTheWall() {
  let bottles = 99;
  // console.log(`${bottles} bottles beer on the wall`);
  do {
    console.log(`${bottles} bottles beer on the wall`);
    beer = Number(
      prompt("how many bottles we pass (enter number from 0 to 99)?")
    );
    if (isNaN(beer)) {
      alert("sorry, its not a number, enter number from 0 to 99");
    } else if (beer < 0 || beer > 99) {
      alert(
        "sorry, it is not a number in range from 0 to 99, enter number from 0 to 99"
      );
    } else {
      bottles = bottles - beer;
      console.log(`Take ${beer} down, pass them around`);
      console.log(`we have now ${bottles} bottles`);
      // return res;
    }
  } while (bottles > 0);
  // console.log(res);
}
let b = bottlesOnTheWall();
console.log(b);