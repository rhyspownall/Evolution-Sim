import {creatureMovement} from "./creatures.js";
import {creatures} from "./state.js";
import {spawnFood} from "./food.js"

function gameLoop() {
    creatureMovement(creatures);
    spawnFood();
    
    requestAnimationFrame(gameLoop);
}

gameLoop();