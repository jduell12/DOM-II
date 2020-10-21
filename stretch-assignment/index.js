//get rocket elements 
let red = document.querySelector('.block--red');
let blue = document.querySelector('.block--blue');
let green = document.querySelector('.block--green');
let pink = document.querySelector('.block--pink');
let gray = document.querySelector('.block--gray');
let boxArray = [red, blue, green, pink, gray];

//add click event to boxes so that the box goes to the top of the stack
boxArray.forEach(item => item.addEventListener('click', function(event){
    event.target.style.order = `${1}`;
    for(let i = 0; i < boxArray.length; i++){
        if(boxArray[i] !== event.target){
            boxArray[i].style.order = `${i+2}`;
        } 
    }
}))

//add event listeners to boxes so that when the mouse is held down on them they move continuously to the right 

let body = document.body;
boxArray.forEach(item => item.addEventListener('mousedown', function(event){
    let margin = 100;
    let timer = setInterval(moveRight, 100);
    function moveRight (){
        item.style.marginLeft = margin + 'px';
        margin += 100;
    }
    body.addEventListener('mouseup', function(){
        clearInterval(timer);
        item.style.marginLeft = '10px';
    });
}))