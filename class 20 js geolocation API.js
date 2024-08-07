// Geolocation API: to pull the location of the user from the user's system any where in the world. (User has to be connected to the net)

let btn = document.getElementById('getlocale');
let show = document.getElementById('show');
// the first two assigns the display elements to be shown, to variables

function getLocation(){
    navigator.geolocation.getCurrentPosition(showPos);
}
// after that a function is declared containing an in-built navigator object, an in-built function called 'getCurrentPosition' with a callback function 'showPos'.
// Remember call back functions are functions that are passed as arguments.

function showPos(p){
    show.innerHTML = `my latitude is ${p.coords.latitude} <br> longitude ${p.coords.longitude} <br> Accuracy ${p.coords.accuracy} <br> Altitude ${p.coords.altitude}`
}
// The call back function is displayed above. It contains the data to be displayed once the function is called. '.p' here is the parameter passed in the callbackfunction (can be anything) '.coords.latitude/longitude/accuracy/altitude, are all built-in

btn.addEventListener('click', getLocation);
// and finally an eventlistener to activate the functions (attached to a button in the html file)




// On a side note please be aware that both js files where linked to the html file.