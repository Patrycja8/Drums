var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var name = this.innerHTML;
    sound(name);
    buttonAnimation(name);

  });
  document.querySelectorAll(".drum")[i].addEventListener("keydown",function(event){
    sound(event.key)
    buttonAnimation(event.key)
  })

}
function sound(name){
    switch(name){
        case "w":
            let audio_w = new Audio("sounds/tom-1.mp3")
            audio_w.play();
            break;
        case "a":
            let audio_a = new Audio("sounds/tom-2.mp3")
            audio_a.play();
            break;
        case "s":
            let audio_s = new Audio("sounds/tom-3.mp3")
            audio_s.play();
            break;
        case "d":
            let audio_d = new Audio("sounds/tom-4.mp3")
            audio_d.play();
            break;
        case "j":
            let audio_j = new Audio("sounds/snare.mp3")
            audio_j.play();
            break;
        case "k":
            let audio_k = new Audio("sounds/crash.mp3")
            audio_k.play();
            break;
        case "l":
            let audio_l = new Audio("sounds/kick-bass.mp3")
            audio_l.play();
            break;
       }
    

}
function buttonAnimation(key){
    var activeButton = document.querySelector("."+key)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)


}


       
            

     


    
