// API key: hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// random_id: string	e826c9fc5c929e0d6c6d423841a282aa

let form1 = document.forms.myForm; // choose form
console.log(form1);
let fields = myForm.elements; // choose all form fields
console.log(fields);

// let submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', submit);
form1.addEventListener("submit", submit);

async function submit(event) {
  event.preventDefault();
  if (fields[0].value.length > 0)
  {
    let info = {
      topic: fields[0].value,
    };

    let r = await fetch(`https://api.giphy.com/v1/gifs/random?q=${info.topic}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    if (r.status == 200)
    {
      const json = await r.json();
      console.log(json.data);
      let newImg = document.createElement("img");
      newImg.src = json.data.images.original.url;
      document.querySelector("body").appendChild(newImg);

      let delGif = document.createElement('button');
      delGif.addEventListener('submit', submit);
      delGif.textContent = 'Delete';
      document.querySelector('body').appendChild(delGif);
      delGif.style.marginLeft = '5px';
      delGif.style.backgroundColor = 'red';

      

    }
    else
    {
      throw new Error("bad query");
    }
  }
}



let delGifAll = document.createElement('button');
      delGifAll.addEventListener('submit', submit);
      delGifAll.textContent = 'Delete All Gifs';
      form1.appendChild(delGifAll);
      delGifAll.style.backgroundColor = 'red';
      delGifAll.style.fontSize = '20px';
      delGifAll.style.marginBottom = '10px';