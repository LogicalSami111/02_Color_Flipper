const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// letter represent the Numbers 10 11 12 13 14 15
// For eg: the #f15025 here f represents 15..
// for hex value we always use #

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let hexColor = '#';
    for (let i=0; i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber(){
    return Math.floor(Math.random()* hex.length );
}




