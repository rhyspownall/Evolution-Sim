import {
    food,
    worldHeight,
    worldWidth
} from "./state.js"

let foodTimer = 0;

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
    const element = document.createElement("div");
    food.element = element;

    element.classList.add("food");

    const label = document.createElement("span");
    label.classList.add("food-label");

    element.appendChild(label);
    document.getElementById("world-canvas").appendChild(element);

    element.style.top = food.y + "px";
    element.style.left = food.x + "px";
}

// Keeps food inside the canvas when it shrinks (sidebar opening)
export function keepFoodInBounds() {
    food.forEach(item => {
        if (item.x > worldWidth || item.y > worldHeight) {
            item.x = Math.min(item.x, worldWidth);
            item.y = Math.min(item.y, worldHeight);
            item.element.style.left = item.x + "px";
            item.element.style.top = item.y + "px";
        }
    });
}