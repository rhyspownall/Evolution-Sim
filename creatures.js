import {
    creatures,
    createCreatureButton,
    worldHeight,
    worldWidth
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
    const speed = 0.5 + Math.random();
    const vision = 0.5 + Math.random();

    const newCreature = {
        type: "blob",
        name: letterName(n),
        id: `CR${n}`,
        speed: speed,
        vision: vision,
        metabolism: 0.5 + (speed * 0.5) + (vision * 0.25),
        energy: 100,

        x: Math.floor(Math.random() * worldWidth),
        y: Math.floor(Math.random() * worldHeight),
        targetX: null,
        targetY: null
    }

    creatures.push(newCreature);
    renderCreature(newCreature);
});

export function renderCreature(creature) {
    let element = document.getElementById(creature.id);

    if (!element) {
        element = document.createElement("div");

        element.id = creature.id;
        element.classList.add("creatures");

        const label = document.createElement("span");
        label.classList.add("creature-label");
        label.textContent = creature.name;

        element.appendChild(label);

        document.getElementById("world-canvas").appendChild(element);
    }

    element.style.top = creature.y + "px";
    element.style.left = creature.x + "px";
}


export function creatureMovement(creatures) {
    creatures.forEach(creature => {

        creature.x = Math.min(creature.x, worldWidth);
        creature.y = Math.min(creature.y, worldHeight);
        if (creature.targetX > worldWidth || creature.targetY > worldHeight) {
            creature.targetX = null;
            creature.targetY = null;
        }

        if (creature.targetX === null) {
            creature.targetX = Math.random() * worldWidth;
            creature.targetY = Math.random() * worldHeight;
        }

        const dy = creature.targetY - creature.y;
        const dx = creature.targetX - creature.x;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 2) {
            creature.targetX = null;
            creature.targetY = null;
            return;
        }

        const directionX = dx / distance;
        const directionY = dy / distance;

        creature.x += directionX * creature.speed;
        creature.y += directionY * creature.speed;

        renderCreature(creature);
    });
}