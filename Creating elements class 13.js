let rootElement = document.getElementById('root');

let btn = document.getElementById('make');

// btn.addEventListener('dblclick', function(){
//     rootElement.innerText = 'I was double clicked'
// });

// btn.addEventListener('click', shoutOut);

// function shoutOut(){
//     let toWho = prompt('Who do you want to make a shout out to?');

//     alert('Shoutout to ' + toWho + ' for being the greatest of all time');
// }



// To create an element
// function newElement(){
//     let newp = document.createElement('p');
//     newp.textContent = 'Yo, nama ewa Uchicha Itachi';

//     newp.style.color = 'blue';
//     newp.style.fontSize = '20px';

//     rootElement.appendChild(newp);
// }

// btn.addEventListener('click', newElement);


// Example 2
function newElement(){
    let newh = document.createElement('h2');
    newh.textContent = 'Login to your account';
    newh.style.textAlign = 'center';
    newh.style.textDecoration = 'underline';

    let inputa = document.createElement('input');
    inputa.setAttribute('type', 'email');
    inputa.setAttribute('placeholder', 'enter your email');

    let inputb = document.createElement('input');
    inputb.setAttribute('type', 'password');
    inputb.setAttribute('placeholder', 'enter your password');

    let inputSubmit = document.createElement('input');
    inputSubmit.setAttribute('type', 'submit');
    inputSubmit.setAttribute('value', 'Login');

    rootElement.appendChild(newh);
    rootElement.appendChild(inputa);
    rootElement.appendChild(inputb);
    rootElement.appendChild(inputSubmit);
}

btn.addEventListener('click', newElement)