import {
    creatures,
    createCreatureButton
} from "./state.js"

let n = 0;

export function letterName (n) {
    let label = "";
    while (n>0) {
        const remainder = (n-1) % 26
        label = String.fromCharCode(65 + remainder) + label;
        n = Math.floor((n-1) / 26)
    }
    return label;
}

createCreatureButton.addEventListener("click", () => {
    n++;
    const newCreature = {
        type: "blob",
        name: letterName(n),
        id: `CR${n}`,
        x: Math.random(),
        y: Math.random()
    }

    creatures.push(newCreature);
    renderCreature(newCreature);
});

export function renderCreature (creature) {
    let element;
    let label;

    if (!document.getElementById(creature.id)) {  //check whether element exists 
        element = document.createElement('div');     //if not make element
        element.id = creature.id;
        element.classList.add("creatures");
        element.style.top = creature.y + "px";
        element.style.left = creature.x + "px";

        label = document.createElement("span");
        label.classList.add("creature.label");
        element.appendChild(label);
        label.textContent = creature.name;


        document.getElementById("world-canvas").appendChild(element);

        console.log("worked");
    }
}

export function creatureMovement() {

}