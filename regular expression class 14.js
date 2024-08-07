var txt = 'Today was very RAINY in the morning';
var new_entry = 'It was raining cats and dogs in Gwarimpa. But Gwarimpa looks fine. I live in Gwarimpa';

let n = txt.search(/rainy/i);
n;

// var text2 = txt.replace('RAINY', 'sunny');

var text2 = txt.replace(/rainy/i, 'sunny');

console.log(text2);

// Use of the /g modifier

let n2 = /Gwarimpa/g;
console.log(new_entry.match(n2));

// Use of /m modifier

let entry3 = '\nIn the beginning.\nIn time. \nIn the moment';
let search3 = /In/mg;

console.log(entry3.match(search3));