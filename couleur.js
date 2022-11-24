window.addEventListener("DOMContentLoaded", function(event){

});

function getNextSection(current){
    if (current.id === "red"){
        return document.getElementById("orange");}
    if (current.id === "orange"){
        return document.getElementById("yellow");}
    if (current.id === "yellow"){
        return document.getElementById("green");}
    if (current.id === "green"){
        return document.getElementById("blue");}
    if (current.id === "blue"){
        return document.getElementById("purple");}
}

function getPreviousSection(current){
    if (current.id === "purple"){
        return document.getElementById("blue");}
    if (current.id === "blue"){
        return document.getElementById("green");}
    if (current.id === "green"){
        return document.getElementById("yellow");}
    if (current.id === "yellow"){
        return document.getElementById("orange");}
    if (current.id === "orange"){
        return document.getElementById("red");}
}

let sections = document.querySelectorAll("body > main > section");
for (let i = 0; i < sections.length; i++){
    document.addEventListener("wheel", function(event){
        if(event.deltaY > 0){
            getNextSection(sections[i]);}
        else if(event.deltaY < 0){
            getPreviousSection(sections[i]);}
        let position = sections[i].getBoundingClientRect().top;
        console.log(position)
    });
}