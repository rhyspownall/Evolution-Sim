import { creatureMovement } from "./creatures.js";
import { creatures } from "./state.js";

function gameLoop() {
    creatureMovement(creatures);
    requestAnimationFrame(gameLoop);
}

gameLoop();