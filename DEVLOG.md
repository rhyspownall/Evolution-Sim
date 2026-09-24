tracking progress: 

Creatures: 
    - I added an eventListener to the Spawn Creature button, so that when it is clicked, it triggers the createCreature lambda function. this creates a new object in creatures[] and also calls renderCreature().
    - Once the new element is passed into renderCreature(), it is made into a div and given everything it needs to show up as a circle in the canvas.
    - To make the creatures move, there is a targetX and targetY value assigned to each element in creature[]. When this value is null (like on creation), it is given a random value within the canvas borders. with this, it calculates the dy and dx values, calculates the distance between x and targetX values, normalises the vector to isolate the direction. finally the creatures x and y values are += the directionX and directionY values * creatures speed
    - Each creature is assigned a random speed on creation using speed: 0.5 + Math.random()
 

Food: 
    - In order to make food, i had to make a variable called foodTimer,      whenever foodTimer got to 0, a new element was pushed to food[]. 
    - To make the food spawn in randomly, i set foodTimer = (60 + Math.random() * 60) * currentFood. This makes foodTimer a random value, but also dependant to how many food is already on the canvas, ensuring not too many or too little food is on the canvas.
    - Spawning food is the same concept as creatures, however instead of an eventListener, newFood is triggered by foodTimer. 