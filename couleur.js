window.addEventListener("DOMContentLoaded", function(event){

});

function getNextSection(current){
    if (current.id === "red"){
        return document.getElementById("orange")}
    if (current.id === "orange"){
        return document.getElementById("yellow")}
    if (current.id === "yellow"){
        return document.getElementById("green")}
    if (current.id === "green"){
        return document.getElementById("blue")}
    if (current.id === "blue"){
        return document.getElementById("purple")}
}

function getPreviousSec(current){
    if (current.id === "purple"){
        return document.getElementById("blue")}
    if (current.id === "blue"){
        return document.getElementById("green")}
    if (current.id === "green"){
        return document.getElementById("yellow")}
    if (current.id === "yellow"){
        return document.getElementById("orange")}
    if (current.id === "orange"){
        return document.getElementById("red")}
}

let sections = document.querySelectorAll("body > main > section");