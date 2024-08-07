// This class was on storage of data being used by the user and can be referenced by opening inspect and then application and then selecting the two storage areas we discussed: local storage and session storage

// local storage acts as data stored in the hard drive of the system and will not be deleted after a system shutdown
localStorage.setItem('Institution', 'Aptech');

let a = prompt('What is your favourite movie');

localStorage.setItem('fav_movie', a);

// Note that session storage is temporal and can be deleted after an event like a system shutdown. This is because it acts as data stored in the RAM.
sessionStorage.setItem('response', 'This will be stored in the session');

console.log(localStorage.getItem('Institution'));
// When the above code is displayed, it shows 'Aptech' which is found on line 1. This is because 'Institution' is the key and 'Aptech' is the value. Both being stored by the inbuilt syntax 'localStorage.setItem'