let sentence = "The movie is not that bad, I like it";
console.log(sentence);
let wordNot = sentence.indexOf('not');
console.log(wordNot);
let wordBad = sentence.indexOf('bad');
console.log(wordBad);
let between = sentence.slice(13,25);
console.log(between); //"not that bad"

if (wordBad > wordNot) {
    let new_s = sentence.replace(between, "good");
    console.log(new_s);
}
else {
    sentence = "The movie is not that bad, I like it";
}
console.log(between);
console.log(sentence);

// The movie is not that bad, I like it
// The movie is good, I like it