// 1
// makeAllCaps
// let words1 = ['apple', 'nokia', 'huawei', 'samsung'];

// const makeAllCaps = words1 => {
//     return new Promise((resolve, reject) => {
//         for (word of words1) {
//             if (typeof word === 'string')
//         {
//             const words2 = words1.map(arr => arr.toUpperCase())
//             resolve(words2)

//             // resolve(words1.toUpperCase()) // error

//             // for(i = 0; i < words1.length; i++)
//             // {resolve(words1[i].toUpperCase())} // APPLE

//             // resolve(word.toUpperCase()) // APPLE
//         }
//         else
//         {
//             reject('array is not array of string')
//         }
//         }
//     })
// }
// makeAllCaps(words1)
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// sortWords()
// const sortWords = words2 => {
//     // console.log(words2);
//     return new Promise ((resolve, reject) => {
//         for (word of words2) {
//             if (words2.length > 4) {
//                 resolve(words2.sort())
//             }
//             else {
//                 reject('array is not = 4')
//             }
//         }
//     })
// }
// sortWords(words1)
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// 2
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

const toJS = (morse) => {
  // newMorse = JSON.stringify(morse);
  let newMorse = JSON.parse(morse);
  // console.log(typeof newMorse);
  // console.log(newMorse);
  return new Promise((resolve, reject) => {
    if (Object.keys(newMorse).length == 0)
    {
      reject("error");
    }
    else
    {
      resolve(newMorse);
    }
  });
};

let userInput;

const toMorse = (newMorse) => {
  return new Promise((resolve, reject) => {
    userInput = prompt("Enter your word: ");
    let userWord = userInput.split("");
    let translate = [];

    for (let letter of userWord) {
      console.log(newMorse[letter]);
      console.log(letter);
      if
      (Object.keys(newMorse).includes(letter))
      {
        translate.push(newMorse[letter]);
      } else
      {
        reject("You entered incorrect symbols");
        break;
      }
    }
    resolve(translate);
    console.log(translate);
    
    let joinWords = translate => {
        let p = document.createElement('p');
        p.innerText = `The morse translation of ${userInput} is ${translate}`;
        document.querySelector('body').appendChild(p);}
    joinWords(translate);
  });
};

toJS(morse)
  .then((newMorse) => {
    let res = toMorse(newMorse);
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// toMorse(newMorse)
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// ~~~~OR~~~~:

// const toJS = (jsonString) => {
//   return new Promise((resolve, reject) => {
//     let objMorse;
//     try
//     {
//       objMorse = JSON.parse(jsonString);
//     }
//     catch(err)
//     {
//       reject('no json')
//     }
//     if
//     (Object.keys(objMorse).length === 0)
//     {
//       reject('this json obj ie empty')
//     }
//     else
//     {
//       resolve(objMorse)
//     }
//   })
// }

// const toMorse = (morseJS) => {
//   return new Promise((resolve, reject) => {
//     let userStr = prompt('enter word');
//     let arrStr = userStr.trim().split('');
//     let returnArr = [];
//     for (let i=0; i < arrStr.length; i++) {
//       if
//       (arrStr[i] in morseJS)
//       {
//         returnArr.push(morseJS[arrStr[i]]);
//       }
//       else {
//         reject('letter does not exist')
//       }
//     }
//     resolve(returnArr)
//   })
// }

// const joinWords = (morse) => {
//   let str = '';
//   morse.forEach((item, i) => {
//     str += item
//   });
//   return str;
// }

// toJS(morse)
// .then(value => toMorse(value))
// .then(arr => joinWords(arr))
// .then(translation => console.log(translation))
// .catch(err => console.log(err))