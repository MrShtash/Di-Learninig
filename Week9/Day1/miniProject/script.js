const quoteArr = [
  {
    id: 0,
    author: "Benjamin Disraeli",
    quote: "Success is the child of audacity",
    likes: 0,
  },
  {
    id: 1,
    author: "Winston Churchill",
    quote: "Success consists of going from failure to failure without loss of enthusiasm",
    likes: 0,
  },
  {
    id: 2,
    author: "Wayne Gretzky",
    quote: "You miss 100% of the shots you dont take",
    likes: 0,
  },
  {
    id: 3,
    author: "Farrah Gray",
    quote: "Build your own dreams, or someone else will hire you to build theirs",
    likes: 0,
  },
];
// console.log(quoteArr[0]);

let form1 = document.forms.myForm;

const quoteP = document.getElementById("quote");
const authorP = document.getElementById("author");

submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submit);

// function submit(event) {
//   event.preventDefault();
//   let newQ = Math.floor(Math.random() * quoteArr.length);
//   let currentQuote = quoteArr[newQ];

//     let myQ = currentQuote.quote;
//     let myA = currentQuote.author;

//     quoteP.innerText = myQ;
//     authorP.innerText = myA;
//     // console.log(authorP, quoteP);
// }

//~~~~~
let lQuoteId; // var last displayed quote

function submit(event) {
  event.preventDefault();
  
  let newQ = Math.floor(Math.random() * quoteArr.length);
  if (lQuoteId == newQ) {
    submit()
  }
  else {
    lQuoteId = newQ;

  let currentQuote = quoteArr[newQ];

  let myQ = currentQuote.quote;
  let myA = currentQuote.author;

  quoteP.innerText = myQ;
  authorP.innerText = myA;
  }
}

btnws = document.getElementById('ws');
btnws.addEventListener('click', calcLSpace);

function calcLSpace(){
  // let qLength = 0;
  const currentQuote = quoteArr[lQuoteId];
  const qText = currentQuote.quote;
  const qLength = qText.length;
  // alert(`This quote has ${lQuoteId.length} characters`)
  alert(`This quote has ${qLength} characters`);

}

btnwthts = document.getElementById('wthts');
btnwthts.addEventListener('click', calcLengthNoSpace);

function calcLengthNoSpace(){
  const currentQuote = quoteArr[lQuoteId];
  const qText = currentQuote.quote;
  const qLength = qText.trim().length;
  alert(`This quote has ${qLength.length} characters`)
}

btnw = document.getElementById('w');
btnw.addEventListener('click', calcWords);

function calcWords(){
  let words = 0;
  for (char of lQuoteId.innerText) {
    if (char == ' ') {
        words++
    }
  }
  alert(`This quote has ${words} words`)
}

btnl = document.getElementById('l');
btnl.addEventListener('click', calcLike);

function calcLike(){
  quoteArr[lQuoteId].likes ++
    alert(`This quote has ${quoteArr[lQuoteId].likes} likes`)
}

function addQuote (event) {
  let form = document.forms.addQuote;
  let nQ = {
    id: quoteArr.length,
    author: form.author.value,
    quote: form.quote.value,
    likes: 0,
  }
  event.preventDefault(),
  quoteArr.push(nQ),
  console.log(quoteArr);
  alert(`${nQ}`)
}

// addQ(event);

