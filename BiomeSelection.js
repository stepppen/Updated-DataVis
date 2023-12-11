const ContMarg = document.getElementById("ContMarg");
const Savanna = document.getElementById("Savanna");
const Forest = document.getElementById("Forest");
const Grassland = document.getElementById("Grassland");
const Desert = document.getElementById("Desert");
const Wetland = document.getElementById("Wetland");
const Shrubland = document.getElementById("Shrubland");
const BCE = document.getElementById("BCE");
const OpenOcean = document.getElementById("OpenOcean");

// export let sizeArr = [];
let sizeArrContMarg = [];
let sizeArrSavanna = [];
let sizeArrForest = [];
let sizeArrGrassland = [];
let sizeArrDesert = [];
let sizeArrWetland = [];
let sizeArrShrubland = [];
let sizeArrBCE = [];
let sizeArrOpenOcean = [];

export function ContMargPosition() {
    sizeArrContMarg = [];
    let biomePos = ContMarg.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrContMarg.push(xStart, xStop, yStart, yStop);
    return sizeArrContMarg;
}
export function SavannaPosition() {
    sizeArrSavanna = [];
    let biomePos = Savanna.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrSavanna.push(xStart, xStop, yStart, yStop);
    return sizeArrSavanna;
}
export function ForestPosition() {
    sizeArrForest = [];
    let biomePos = Forest.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrForest.push(xStart, xStop, yStart, yStop);
    return sizeArrForest;
}
export function GrasslandPosition() {
    sizeArrGrassland = [];
    let biomePos = Grassland.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrGrassland.push(xStart, xStop, yStart, yStop);
    return sizeArrGrassland;
}
export function DesertPosition() {
    sizeArrDesert = [];
    let biomePos = Desert.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrDesert.push(xStart, xStop, yStart, yStop);
    return sizeArrDesert;
}
export function WetlandPosition() {
    sizeArrWetland = [];
    let biomePos = Wetland.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrWetland.push(xStart, xStop, yStart, yStop);
    return sizeArrWetland;
}
export function ShrublandPosition() {
    sizeArrShrubland = [];
    let biomePos = Shrubland.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrShrubland.push(xStart, xStop, yStart, yStop);
    return sizeArrShrubland;
}
export function BCEPosition() {
    sizeArrBCE = [];
    let biomePos = BCE.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);
    sizeArrBCE.push(xStart, xStop, yStart, yStop);
    return sizeArrBCE;
}
export function OpenOceanPosition() {
    sizeArrOpenOcean = [];
    let biomePos = OpenOcean.getBoundingClientRect();
    let xStart = Math.floor(biomePos.left);
    let xStop = Math.floor(biomePos.right);
    let yStart = Math.floor(biomePos.top);
    let yStop = Math.floor(biomePos.bottom);

    sizeArrOpenOcean.push(xStart, xStop, yStart, yStop);
    return sizeArrOpenOcean;
}

