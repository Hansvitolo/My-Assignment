let char = '["Gandalf", "Frodo", "Aragon", "Sauron", "Saruman"]';

let fantasyLand = `[{
    "land": "The Shire",
    "population": 120500,
    "language_spoken": ["English", "Hobbish"],
    "specie": "Hobbits"
},
{
    "land": "Gondor",
    "population": 2000000,
    "specie": "men"
}
]`
// stringify method
let charString = JSON.stringify(char);
let fanString = JSON.stringify(fantasyLand);

// console.log(charString.toUpperCase())
console.log(char)
// console.log(fantasyLand)

// parse method (Iadded `` to lines 3 and 14 and '' in line 1)

let parse1 = JSON.parse(char)
let parse2 = JSON.parse(fantasyLand)



// console.log(parse2);

let h = document.getElementById('bktitle')
fetch("class 19 population.json")
// .then((response) => console.log(response))
.then((response) => response.json())
.then((a) => h.innerText = a[0])
.catch((err) => console.error("the error message is ", err))

fetch("class 19 population.json")
.then((resp) => resp.json())
// .then((resp) => resp.forEach(vale => console.log(vale)))
// .then((val) => console.log(val))



//practice on map
const numbers1 = [45, 4, 9, 16, 25];
let spade = numbers1.map((sweet, i) => ` ${i}- ${sweet * 2}`);
console.log(numbers1)
console.log(spade)