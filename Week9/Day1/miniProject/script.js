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
  // const currentQuote = quoteArr[lQuoteId];
  // const qText = currentQuote.quote;
  // const qLength = qText.trim().length;
  // alert(`This quote has ${qLength.length} characters`)
  const currentQuote = quoteArr[lQuoteId].quote;
  const trimmedText = currentQuote.split(" ").join("");
  const qLength = trimmedText.length;
  console.log(qLength);
  console.log(trimmedText);
  alert(`This quote has ${qLength} characters`);
}

btnw = document.getElementById('w');
btnw.addEventListener('click', calcWords);

function calcWords(){
    alert(`This quote has ${myLength.length} words`);
}

btnl = document.getElementById('l');
btnl.addEventListener('click', calcLike);

function calcLike(){
  quoteArr[lQuoteId].likes ++
    alert(`This quote has ${quoteArr[lQuoteId].likes} likes`)
}

let form = document.getElementById("AddQuote");

function addQuote(event) {
  event.preventDefault();
  let nQ = {
    id: quoteArr.length,
    author: form.author.value,
    quote: form.quote.value,
    likes: 0,
  };
  quoteArr.push(nQ);
  console.log(quoteArr);
  alert(`${nQ.quote}`);
}
form.addEventListener("submit", addQuote);

let filterForm = document.getElementById("filterQuote");
filterForm.addEventListener('submit', filterQuote)

function search(event){
  event.preventDefault();
    let filtered = quoteArr.filter((item) => item.author.includes(filterForm.search.value))
    if (filterForm.search.valuelength > 0){
        for (item of window.children){
          body.removeChild(item)
        }
       for (item of filtered){
          let newQ = document.createElement('p')
          newQ.innerText = item.quote + '\n' + item.author
          body.appendChild(newQ)
       }
    }  
}

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
prevButton.addEventListener("click", showPQuote);
nextButton.addEventListener("click", showNQuote);

function showPQuote() {
  if (lQuoteId > 0) {
    lQuoteId--;
    displayQuote(filtered[lQuoteId]);
  }
}

function showNQuote() {
  if (lQuoteId < filtered.length - 1) {
    lQuoteId++;
    displayQuote(filtered[lQuoteId]);
  }
}

function displayQuote(quote) {
  quoteP.innerText = quote.quote;
  authorP.innerText = quote.author;
}

