"use strict";
class Die {
    constructor() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }
}
// I used ! to end the line below, I don't think this was what you were looking for :(
let generateBtn = document.getElementById("generate-die");
generateBtn.addEventListener("click", () => {
    let die = new Die();
    let div = document.createElement("div");
    let divText = document.createTextNode(die.value.toString());
    document.body.appendChild(div);
    div.appendChild(divText);
    div.className = "dice";
    div.addEventListener("dblclick", () => {
        div.remove();
    });
});
let rollBtn = document.getElementById("roll-dice");
//I don't know how to handle diceArray, getting "Type 'HTMLCollectionOf<Element>' is not an array type or a string type.ts(2495)"
//I solved this error by changing the tsconfig.json file to es6 because someone on the internet said to do it. I don't understand it.
rollBtn.addEventListener("click", () => {
    let diceArray = document.getElementsByClassName("dice");
    for (let x of diceArray) {
        x.innerHTML = (Math.floor(Math.random() * 6) + 1).toString();
    }
});
let sumBtn = document.getElementById("sum-dice");
sumBtn.addEventListener("click", () => {
    let diceArray = document.getElementsByClassName("dice");
    let diceTotal = 0;
    for (let x of diceArray) {
        diceTotal = diceTotal + parseInt(x.innerHTML);
    }
    alert(diceTotal);
});
//ugh, I still don't see the point
