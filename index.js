(function(){

const screen = document.querySelector('.screen');
const button = document.querySelectorAll('.btn');
const equal = document.querySelector('.green');
const clear = document.querySelector('.red');

button.forEach(function(buttons) {
    buttons.addEventListener('click', function(e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

clear.addEventListener('click', function(e) {
    screen.value = "";
});

equal.addEventListener('click', function(e) {
    if(screen.value === "") {
        screen.value = "please enter digits";
    }else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
});

}) ();