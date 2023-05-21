const form = document.getElementById("libform");
// let story = [];
function handlaSubmit(e) {
  e.preventDefault();
  playGame(e);
}

function playGame(e) {
  e.preventDefault();

  let story = document.getElementById("story");

  let noun = document.getElementById("noun").value;
  noun = noun.replaceAll(" ", "");
  noun = noun.trim();
  console.log(noun);

  let adjective = document.getElementById("adjective").value;
  adjective = adjective.replaceAll(" ", "");
  adjective = adjective.trim();
  console.log(adjective);

  let person = document.getElementById("person").value;
  person = person.replaceAll(" ", "");
  person = person.trim();
  console.log(person);

  let verb = document.getElementById("verb").value;
  verb = verb.replaceAll(" ", "");
  verb = verb.trim();
  console.log(verb);

  let place = document.getElementById("place").value;
  place = place.replaceAll(" ", "");
  place = place.trim();
  console.log(place);

  //   form.libbutton();

  story.textContent = `${person} ${verb} ${noun} ${adjective} ${place}`;
}
