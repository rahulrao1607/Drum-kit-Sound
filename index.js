var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
{
    document.getElementsByClassName("drum")[i].addEventListener("click",clickHappene);
    // document.querySelectorAll(".drum")[i].addEventListner("click",clickHappene);
}

function clickHappene()
{
//     var sound =new Audio('sounds/tom-1.mp3');
//     sound.play();
         var ButtoninnerHtml=this.innerHTML;
         makeSound(ButtoninnerHtml); 
         buttonAnimation(ButtoninnerHtml);   

}
document.addEventListener("keypress",keybordlick);

function keybordlick(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);

}

function makeSound(key)
{
    switch(key)
    {
       case "w":
           var tom1 =new Audio('sounds/tom-1.mp3');
           tom1.play();
           break;

       case "a":
           var tom1 =new Audio('sounds/tom-2.mp3');
           tom1.play();
           break;

           case "s":
               var tom1 =new Audio('sounds/tom-3.mp3');
               tom1.play();
               break;
               
               case "d":
           var tom1 =new Audio('sounds/tom-4.mp3');
           tom1.play();
           break;

           case "j":
           var tom1 =new Audio('sounds/snare.mp3');
           tom1.play();
           break;

           case "k":
           var tom1 =new Audio('sounds/kick-bass.mp3');
           tom1.play();
           break;

           case "l":
           var tom1 =new Audio('sounds/crash.mp3');
           tom1.play();
           break;

           default : alert("wrong button babu");                
    }
}

function buttonAnimation(currentKey)
{
    var activeButton =document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    //delay or timeout
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}