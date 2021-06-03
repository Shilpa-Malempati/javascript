//Using the str.match()

//1)regular expression has flag g, it returns an array of all matches:
// let str = "We will, we will rock you";
// alert(str.match(/we/gi));
// We,we (an array of 2 substrings that match) and
//i makes the regExp case insensitive






//eg:-2)
// let strs = "We will, we will rock you a good song";

// let result = strs.match(/we/i); // without flag g
// console.log('regexp result',result);
// alert(result[0]); // We (1st match)
// alert(result.length); // 1

// // Details:
// alert(result.index); // 0 (position of the match)
// alert(result.input); // We will, we will rock you (source string)










//2)The method str.replace(regexp, replacement) replaces matches found using
// regexp in string str with replacement (all matches if there’s flag g, otherwise,
// only the first one).

// no flag g
// alert("We will, we will".replace(/we/i, "I")); // I will, we will

// // with flag g
// alert("We will, we will".replace(/we/gi, "I")); // I will, I will










//Character Class

//1) Character class with out flag
let str = "+7(903)-123-45-67";
let regexp = /\d/; //digit class
alert(str.match(regexp)); // 7

// //with flag g :
let str = "+7(903)-123-45-67";
let regexp = /\d/g;
alert( str.match(regexp) ); // array of matches: 7,9,0,3,1,2,3,4,5,6,7

// // let's make the digits-only phone number of them:
alert( str.match(regexp).join('') ); // 79035419441