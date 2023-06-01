// const url = `https://v6.exchangerate-api.com/v6/3618cca6f16b652284a155fe/latest/USD`;

// document.getElementById('convert').addEventListener('click', handleClick);
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const switchButton = document.getElementById("switch"); // when we call switch we can switch val of select 

document.getElementById("input").addEventListener("keyup", handleClick);

fromSelect.addEventListener("change", handleClick);
toSelect.addEventListener("change", handleClick);
switchButton.addEventListener("click", switchCurrencies);

fetchCurrencies(); // when page load we have this func
// handleClick();

function switchCurrencies() {
    // const fromValue = fromSelect.value;
    // const toValue = toSelect.value;
    // fromSelect.value = toValue;
    // toSelect.value = fromValue;
    [fromSelect.value, toSelect.value] = [toSelect.value, fromSelect.value]; // select val's
    handleClick(); // cal func
}

function fetchCurrencies() {
  const url = `https://v6.exchangerate-api.com/v6/3618cca6f16b652284a155fe/codes`;
  fetch(url)
    .then((res) => res.json()) // res is res.json
    .then((res) => populateDropDown(res.supported_codes)) // pass code to the populate dropdown
    .catch((error) => console.error(error));
}

function populateDropDown(codes) { // takes code and ...
  console.log("rates:", codes);
  const entries = Object.entries(codes); // ... create entries ... 
  // console.log('entries:', entries);

  for (const entry of entries)
  { // ... disctruct to loop 
    // const currency = entries[0];
    // // console.log('currency:', currency);
    // const rate = entries[1];
    // // console.log('rate:', rates)
    // console.log("Entry:------", entry);
    const [code, name] = entry[1]; // for each entries we have code and name. We use [1] index, coz we have code, name bu index 1. index 0 is number
    const option = document.createElement("option"); // create 2 opt
    option.innerText = name; // for each opt create name and ... 
    option.value = code; // ... code
    fromSelect.appendChild(option); // add to page and each populate by API

    const option2 = document.createElement("option");
    option2.innerText = name;
    option2.value = code;
    toSelect.appendChild(option2);
  }
}

// even we change each conditions (lines 8-12) we call handleClick
async function handleClick() {
  // console.log(fromSelect.value);
  // console.log(toSelect.value);
  const currency1 = fromSelect.value; // take value from select and to select
  const currency2 = toSelect.value;
  const input = document.getElementById("input");
  const summary = document.getElementById("summary");
// get url and call
  const url = `https://v6.exchangerate-api.com/v6/3618cca6f16b652284a155fe/pair/${currency1}/${currency2}`;
//   console.log(url);
  try
  {
    const res = await fetch(url); // try to fetch 
    const resJson = await res.json(); // trancform to JSON
    const rate = resJson.conversion_rate; // get back to conversion_rate
    const amount = Number(input.value); // trandform into num
    // console.log('resJson:', resJson);
    const total = amount * rate; // multiply by amount that we have
    // console.log('total:', total);
    summary.innerText = `${amount} ${currency1} = ${total} ${currency2}`; // put inside inner text
  }
  catch (error)
  {
    // console.log("tttt------------");
    console.error(error);
  }
}





























































// # 1
// # 1.1 Python
// chars = ['a', 'b', 'a', 'c', 'b'];
// chars1 = list(set(chars));
// print(chars1);

// # 1.2 Python
// chars2 = ['a', 'b', 'a', 'c', 'b'];
// chars3 = [];
// for i in chars2:
//   if i  not in chars3:
//     chars3.append(i);
// chars2=chars3;
// print(chars2);
// print(chars3);

// 1.3 JavaScript
// const arr = ['a', 'b', 'a', 'c', 'b'];
// let out = [];
// for (let i=0; i<arr.length; i++) {
//     const e = array[i];
//     if (!out.includes(e)){
//         out.push(e)
//     }
// }
// console.log(out);

// 2
// # 2.1
// reverse str 'hello world' --> olleh dlrow
// const str = 'hello world'
// const reverse = str.split('').reverse().join('')
// console.log(reverse);

// # 2.2
// const str = 'hello world'
// const splitted = str.split('')
// let reversed = []
// for (let i=splitted.length; i >= 0; i--) {
//     reversed.push(splitted[i])
// }
// reversed = reversed.join('')
// console.log(reversed);

// # 2.3
// const str = 'hello world'
// let reversed = ''
// for (let i=str.length; i >= 0; i--) {
//     reversed += str[i]
// }
// console.log(reversed);

// # 3
