// array with icons .star inside
let arrIcons = document.querySelectorAll('.star');

// setting eventListeners to each icon
arrIcons.forEach(function(star){
    star.addEventListener('click', setRating); 
});

// function triggered by user's rating click
function setRating(event){
    let clickedIcon = event.currentTarget;
    let arrIcons = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    for (i = 4 ; i >= 0 ; i--){
        if(match){
         arrIcons[i].classList.remove('rated');
        }else{
         arrIcons[i].classList.add('rated');
        }
        //looking for the clickedIcon
        if (arrIcons[i] === clickedIcon){
            match = true;
            num = arrIcons[i] + 1;
        }
    }
}

// removes .rated when user clicks outside the icons div
var elements = document.querySelectorAll('.unrate');
elements.forEach(function (element) {
    element.addEventListener('click', unrate);
});
function unrate() {
    let arrIcons = document.querySelectorAll('.star');
    for (var i = 0; i < arrIcons.length; i++) {
     arrIcons[i].classList.remove('rated');
    }
}

// shows message when user mouse over an icon
arrIcons.forEach(function(icon){
    icon.addEventListener('mouseover', ratingMessage);
});

function ratingMessage(event){
    let arrIcons = document.querySelectorAll('.star');
    let mouseoveredIcon = event.currentTarget;
   
    if (mouseoveredIcon === arrIcons[0]){
        document.getElementById('ratingMessage').innerHTML = '5/5<br>Who do I have to kill to get a pistachio one?';
    }
    if(mouseoveredIcon === arrIcons[1]){
        document.getElementById('ratingMessage').innerHTML = '4/5<br>Of course! I know all the best artisan gelato makers in town.';
    }
    if(mouseoveredIcon === arrIcons[2]){
        document.getElementById('ratingMessage').innerHTML = '3/5<br>Yes! I buy it at the supermarket. A lot of it for little cash!';
    }
    if(mouseoveredIcon === arrIcons[3]){
        document.getElementById('ratingMessage').innerHTML = `2/5<br>Meh... I'd rather have more pizza with that kind of money.`;
    }
    if(mouseoveredIcon === arrIcons[4]){
        document.getElementById('ratingMessage').innerHTML =  `1/5<br>Gross... I can't stand it.`;
    }
} 

// hides rating message when user mouse over outside the icons div
elements.forEach(function(element){
    element.addEventListener('mouseover', hideMessage);
});
function hideMessage(){
    document.getElementById('ratingMessage').innerHTML = '';
}
