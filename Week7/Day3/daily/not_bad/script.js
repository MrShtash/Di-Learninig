let sentence = "The movie is not that bad, I like it";
console.log(sentence);
let wordNot = sentence.indexOf('not');
console.log(wordNot);
let wordBad = sentence.indexOf('bad');
console.log(wordBad);
if (wordBad > wordNot) {
    sentence = "The movie is good, I like it"
}
else {
    sentence = "The movie is not that bad, I like it";
}
console.log(sentence);
