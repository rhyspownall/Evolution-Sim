

export let creatures = [];
export let food = [];

export const createCreatureButton = document.getElementById('create-creature');
export const worldCanvas = document.getElementById('world-canvas');
export let worldHeight = worldCanvas.clientHeight;
export let worldWidth = worldCanvas.clientWidth;

new ResizeObserver(() => {
    worldHeight = worldCanvas.clientHeight;
    worldWidth = worldCanvas.clientWidth;
}).observe(worldCanvas);

export const sidebar = document.getElementById('sidebar');
export const sidebarToggle = document.getElementById('sidebar-toggle');
export const sidebarContent = document.getElementById('sidebar-content');