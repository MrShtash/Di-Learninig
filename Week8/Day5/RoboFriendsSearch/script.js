// let header = document.createElement('header');
//   header.setAttribute("style", "background-color: lightgreen; height: 30px")

// let logoHeaderText = document.createElement('logoHeaderText');
//   logoHeaderText.textContent = 'ROBOFRIENDS';
//   logoHeaderText.setAttribute("style", "font-family: 'SEGA LOGO FONT', sans-serif;")

// let input = document.createElement('input');
//   input.setAttribute("style", "border-radius: 5px; width: 300px");
//   input.placeholder = "Search Robots";

// let item = document.createElement('card');

// document.body.appendChild(header);
// document.body.appendChild(logoHeaderText);
// document.body.appendChild(input);
// document.body.appendChild(item);

const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
];

let body = document.body;
  body.style.backgroundImage = "url('pattern.png')";
  body.style.margin = "0";

let header = document.createElement("header");
  header.style.position = "relative";
  header.style.height = "70px";
  header.style.width = "100%";
  header.style.margin = "0";
  header.style.padding = "0";
  header.style.top = "0";
  header.style.left = "0";
  header.style.backgroundColor = "rgba(105, 53, 129)";
body.appendChild(header);

let div_h = document.createElement("div");
  div_h.style.display = "flex";
header.appendChild(div_h);

let h2 = document.createElement("h2");
  h2.style.position = "relative"
  h2.style.marginLeft = "50px";
  h2.style.marginTop = "0px";
  h2.setAttribute("style", "font-family: 'SEGA LOGO FONT', sans-serif;")
  h2.textContent = "ROBOFRIENDS";
  h2.style.fontSize = "30px";
  h2.style.fontWeight = "lighter";
div_h.appendChild(h2);

let input = document.createElement("input");
  input.style.width = "35rem";
  input.placeholder = "Search Robots";
  input.setAttribute("oninput", "filter_data(event)");
  input.style.marginTop = "16px";
  input.style.marginLeft = "30px";
  input.style.height = "2rem";

input.addEventListener("input", (event) => {
//     let filtered = [];
console.log(event.target.value); // value of element that triggered the event (event element contain) info about event and the element that triggered it)
//     robots.forEach((item, i) => {
//         for (i = 0;i < event.target.value.length; i++) {//let j in event.target.value, j < event.target.value.length, j++) 
//             if (event.target.value[i] == item.name[i].toLowerCase()) {
//                 filtered.push(item);
//             }
//         }
//     });
//     console.log(filtered);
//     console.log(event.target.value.length);
filter_data(event)
});
div_h.appendChild(input);

window.addEventListener("load", (event) => { // add listener for the load event, when its triggered (finish loading) it calls render with robots as arg
    render(robots);
})

const filter_data = (e) => { // func takes event parametr e
    const filtered = robots.filter(user => { // filtered robots and stored result in the filtered obj
        return user.name.toLowerCase().includes(e.target.value.toLowerCase()) // check lowercase name as property of each robo includes lowercase value of e.target.value
    })
    // console.log(filtered);
    render(filtered)
}

let main = document.createElement("main"); // main content
body.appendChild(main);

let div_c = document.createElement("div");
  div_c.style.display = "flex";
  div_c.style.flexWrap = "wrap";
  div_c.style.justifyContent = "space-around";
  div_c.style.marginTop = "35px";
  div_c.classList.add("container");
main.appendChild(div_c);

const render = (robots) => {
    console.log(robots);
    div_c.innerHTML = '' // clean inner HTML div_c for prepare to render new robots elem 

for (i in robots) {    // check each robo object
    let robot = document.createElement("div"); // new div 
      robot.id = robots[i].id; // the id property set id of current robo object
      robot.classList.add("robots"); // class added to robo element
      robot.style.margin = "25px";
      robot.style.borderRadius = "25px";
      robot.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 1)";
      robot.style.backgroundColor = "rgba(53, 129, 114";

    let image_cont = document.createElement("div"); // new div
      image_cont.style.padding = "35px";

    let image = document.createElement("img"); // new img
      image.src = robots[i].image; // attr of img elem is set as property of current robo object
      image.style.width = "350px";
      image.style.height = "350px";
      image.style.backgroundColor = "rgba(105, 53, 129, 0.795)";
      image.style.borderRadius = "50%";

    let name = document.createElement("p"); // new elem
      name.textContent = robots[i].name; // the property is set to the name property of current robo obj
      name.style.marginLeft = "35px";
      name.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
      name.style.fontSize = "35px";

    let email = document.createElement("p");
      email.textContent = robots[i].email;
      email.style.marginLeft = "35px";
      email.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
      email.style.fontSize = "20px";

    robot.appendChild(image_cont);
    image_cont.appendChild(image);
    robot.appendChild(name);
    robot.appendChild(email);
    div_c.appendChild(robot);
  }
}