// Examples:
// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

const takeString = (str1, str2) => {
    let s1 = str1.toLowerCase().split('').sort().join('').trim();
    let s2 = str2.toLowerCase().split('').sort().join('').trim();
    for (i in s1) {
        if (s1[i] == s2[i]) {
            console.log('This is an anagram');
        }
        else {
            console.log('This is not an anagram');
        }
    }
    console.log(s1);
    console.log(s2);
}

takeString("Astronomer", "Moon starer");
takeString("School master", "The classroom");
takeString("The Morse Code", "Here come dots");
takeString("Astronomer", "Here come dots");