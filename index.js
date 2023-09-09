

var arr = document.querySelectorAll('button');
for(var i=0;i<arr.length;i++){
    arr[i].addEventListener('click',function(){
        var buttonHTML=this.innerHTML;
        createSound(buttonHTML);
        animation(buttonHTML);
    });


    document.addEventListener("keypress",function(event){
        createSound(event.key);
        animation(event.key);
    });


    function createSound(key){
        switch(key){
            case "w":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            case "s":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            default:console.log(buttonHTML);
    
        }
    }

function animation(key){
    var activebutton = document.querySelector("." + key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}
}
