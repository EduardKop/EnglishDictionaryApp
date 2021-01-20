let leftMenu = document.querySelectorAll("li");

leftMenu.forEach((e)=>{
e.addEventListener("mouseover",function(){
    if(e == event.target){
        e.style.backgroundColor = "white";
        e.addEventListener("mouseout",function(){
            e.style.backgroundColor = "transparent";

        }) 
    }
   
})
})