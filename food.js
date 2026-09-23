import {
    food,
    worldHeight,
    worldWidth
} from "./state.js"

let foodTimer = 0;
let element;

export function spawnFood() {
    const currentFood = food.length;
    foodTimer--;

    if(foodTimer <= 0) {
    newFood()

    foodTimer = (60 + Math.random() * 60) * currentFood;
    }
}

export function newFood() {
    const newFood = {
        energy: 25,
        x: Math.floor(Math.random() * worldWidth),
        y: Math.floor(Math.random() * worldHeight),
    }
    food.push(newFood);
    renderFood(newFood);
}

export function renderFood(food) {
    element = document.createElement("div");

    element.classList.add("food");

    const label = document.createElement("span");
    label.classList.add("food-label");

    element.appendChild(label);
    document.getElementById("world-canvas").appendChild(element);

    element.style.top = food.y + "px";
    element.style.left = food.x + "px";
}