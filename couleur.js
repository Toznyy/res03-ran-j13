window.addEventListener("DOMContentLoaded", function(event){

});

function getNextSection(current){
    if (current.id === "red"){
        return document.getElementById("orange");}
    else if (current.id === "orange"){
        return document.getElementById("yellow");}
    else if (current.id === "yellow"){
        return document.getElementById("green");}
    else if (current.id === "green"){
        return document.getElementById("blue");}
    else if (current.id === "blue"){
        return document.getElementById("purple");}
    else if (current.id === "purple"){
        return undefined;}
}

function getPreviousSection(current){
    if (current.id === "purple"){
        return document.getElementById("blue");}
    else if (current.id === "blue"){
        return document.getElementById("green");}
    else if (current.id === "green"){
        return document.getElementById("yellow");}
    else if (current.id === "yellow"){
        return document.getElementById("orange");}
    else if (current.id === "orange"){
        return document.getElementById("red");}
    else if (current.id === "red"){
        return undefined;}
}

let sections = document.querySelectorAll("body > main > section");

for (let i = 0; i < sections.length; i++){

    
    sections[i].addEventListener("wheel", function(event){
        
        let currentScrollPosition = document.documentElement.scrollTop;
        
        if(event.deltaY > 0 && getNextSection(sections[i]) != undefined){
            
            let nextPosition = getNextSection(sections[i]).getBoundingClientRect().top;
            
            scroll(0, nextPosition + currentScrollPosition);}
            
        else if(event.deltaY < 0 && getPreviousSection(sections[i]) != undefined){
            
            let previousPosition = getPreviousSection(sections[i]).getBoundingClientRect().top;
            
            scroll(0, previousPosition + currentScrollPosition);}
    });
}