// let rootElement = document.getElementById('root');

// let btn = document.getElementById('make');

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






// const container = document.getElementsByClassName('first');
// const content = document.getElementById('card1');

// let dragging = false;
// let offsetX = 0;
// let offsetY = 0;

// card1.addEventListener('mousedown', (e) => {
//     dragging = true;
//     offsetX = e.offsetX;
//     offsetY = e.offsetY;
// });

// document.addEventListener('mousemove', (e) => {
//     if(dragging){
//         const x = e.clientX - offsetX;
//         first.scrollLeft = x
//         // const y = e.clientY - offsetY;
//     }
// });

// document.addEventListener('mouseup', () => {
//     dragging = false;
// });

// const container = document.getElementsByClassName('first');
// const content = document.getElementById('card1');

// let dragging = false;
// let offsetX = 0;
// let offsetY = 0;

// card1.addEventListener('mouseover', function setNewImage() {
//     document.getElementById('card1').src = 'Project shimmers images/Paloma_Dress_Black_Tan_Botanical_3066_0949.webp'
// });

// function setNewImage(){
//     document.getElementById('card1').src = 'Project shimmers images/Paloma_Dress_Black_Tan_Botanical_3066_0949.webp';
// }

// function setOldImage(){
//     document.getElementById('card1').src = 'Project shimmers images/AEA2943GOLD';
// }

document.addEventListener('DOMContentLoaded', function(){
    const sliderImage = document.querySelectorAll('.slider_image');
    console.log(sliderImage)
    sliderImage.forEach((image) => {
        image.addEventListener('mouseover', function(){
            console.log('hover');
            this.style.backgroundImage = `url(${this.dataset.hover})`
        });
        image.addEventListener('mouseout', function(){
            console.log('out');
            this.style.backgroundImage = `url(${this.dataset.original})`
        });
    });
});
// console.log(myImage);

function hoverImage(){
    // console.log('hover')
    // myImage.src = 'Project shimmers images/AEA2943GOLD';
    //second image
}

function initialImage(){
    // console.log('init')
    // myImage.src = 'Project shimmers images/Paloma_Dress_Black_Tan_Botanical_3066_0949.webp';
    //first image
}