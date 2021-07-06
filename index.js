// document.getElementById("count-el").innerHTML = 50;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment(){
    count++;
    countEl.innerHTML = count;
}

function save(){
    saveEl.innerHTML += count + "-";
}
