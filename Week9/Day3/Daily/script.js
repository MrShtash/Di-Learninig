// API key: hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// random_id: string	e826c9fc5c929e0d6c6d423841a282aa

let form1 = document.forms.myForm; // choose form
console.log(form1);
let fields = myForm.elements; // choose all form fields
console.log(fields);
let newDiv = document.getElementById("container");

form1.addEventListener("submit", submit);

async function submit(event) {
  event.preventDefault();
  if (fields[0].value.length > 0) {
    let info = {
      topic: fields[0].value,
    };

    console.log(info.topic);

    let r = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${info.topic}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    if (r.status == 200) {
      const json = await r.json();
      console.log(json.data);

      let innerDiv = document.createElement("div");
      newDiv.appendChild(innerDiv);

      let newImg = document.createElement("img");
      newImg.src = json.data.images.original.url;
      innerDiv.appendChild(newImg);

      let delGif = document.createElement("button");
      delGif.addEventListener("click", deleteOne);
      delGif.textContent = "Delete";
      innerDiv.appendChild(delGif);
      delGif.style.marginLeft = "5px";
      delGif.style.backgroundColor = "red";
    } else {
      throw new Error("bad query");
    }
  }
}

function deleteOne(event) {
  const gifToDel = event.target.parentNode;
  gifToDel.remove();
}

let delGifAll = document.createElement("button");
delGifAll.addEventListener("click", deleteAll);
delGifAll.textContent = "Delete All Gifs";
newDiv.appendChild(delGifAll);
delGifAll.style.backgroundColor = "red";
delGifAll.style.fontSize = "20px";
delGifAll.style.marginBottom = "10px";

function deleteAll(event) {
  const gifsToDel = event.target.parentNode;
  gifsToDel.remove();
}

// function deleteAll() {
//   let allimg = document.getElementsByTagName("img");
//   let other = [...allimg];
//   console.log(allimg);
//   for (let i = 0; i < other.length; i++) {
//     console.log("hello");
//     //console.log(allimg[i]);
//     allimg[i].remove();
//     console.log(allimg);
//   }
// }
