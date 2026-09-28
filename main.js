import {creatureMovement} from "./creatures.js";
import {creatures} from "./state.js";
import {spawnFood, keepFoodInBounds} from "./food.js";
import {} from "./ui.js";

function gameLoop() {
    creatureMovement(creatures);
    spawnFood();
    keepFoodInBounds();
    
    requestAnimationFrame(gameLoop);
}

gameLoop();