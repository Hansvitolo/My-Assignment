// let renji = document.getElementById('pic');
// let sweet = document.getElementById('sweet');

// function soul(){
//     let pics = document.querySelector('img');
//     pics.setAttribute('src', 'forest-7774205_1280.jpg');

//     // rootElement.appendChild(pics);
// }
// sweet.addEventListener('click', soul);

let nxt = document.getElementById('next');
let img = document.querySelector('img');
let prev = document.getElementById('prev');

prev.addEventListener('click', chgPicPrev());
nxt.addEventListener('click', chgPicNext());

imgGallery = ['samurai-4215748_1280.jpg', 'secret-3120483_1280.jpg'];
function chgPicPrev(){
    let n = imgGallery.length.pop();
        img.src = n;
    }

function chgPicNext(){
    let n = imgGallery.length.pop();
            img.src = n;
    }