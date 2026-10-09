import {creatureMovement, searchForFood, eatFood} from "./creatures.js";
import {creatures, food} from "./state.js";
import {spawnFood, keepFoodInBounds} from "./food.js";
import {} from "./ui.js";

function gameLoop() {
    searchForFood(creatures, food);
    creatureMovement(creatures);
    eatFood(creatures, food);
    spawnFood();
    keepFoodInBounds();

    requestAnimationFrame(gameLoop);
}

gameLoop();