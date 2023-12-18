import {
    ContMargPosition, SavannaPosition, ForestPosition, GrasslandPosition, DesertPosition, WetlandPosition,
    ShrublandPosition, BCEPosition, OpenOceanPosition
} from "./BiomeSelection.js";

let output = document.getElementById("confirmation");

const squareMeterText = document.querySelector(".squareMeterText");
const highlight = document.querySelector(".highlight");
const ha_unit = document.getElementById("ha_unit");
const a_unit = document.getElementById("a_unit");
const km2_unit = document.getElementById("km2_unit");
const m2_unit = document.getElementById("m2_unit");
const wheelSize = 120;



function updateWheel(tokenData) {
    const centerX_VAL = 0;
    const centerY_VAL = 0;

    squareMeterText.setAttribute(
        "transform",
        `rotate(${tokenData.rotation}, ${centerX_VAL}, ${centerY_VAL})`
    );


    // adjust the position
    const xPosPercentage = tokenData.relativeX * 100;
    const yPosPercentage = tokenData.relativeY * 100;

    // const wheelSize = 120;
    const unitSize = 65;
    const incX = 14;

    highlight.style.top = `calc(${yPosPercentage}% + ${incX / 2}px)`;
    highlight.style.left = `calc(${xPosPercentage}% - ${unitSize}px - ${incX}px)`;

    squareMeterText.style.top = `calc(${yPosPercentage}% - ${wheelSize / 2}px)`;
    squareMeterText.style.left = `calc(${xPosPercentage}% - ${wheelSize / 2}px)`;
}

function addColorWheel(tokenData) {
    highlight.classList.add("is-visible");
    squareMeterText.classList.add("is-visible");
}

function updateUnit(tokenData) {

    if (45 <= tokenData.rotation && tokenData.rotation < 135) {
        km2_unit.classList.remove("is-visible");
        m2_unit.classList.remove("is-visible");
        ha_unit.classList.remove("is-visible");
        output.innerHTML = 'a';
        a_unit.classList.add("is-visible");
    } else if (135 <= tokenData.rotation && tokenData.rotation < 225) {
        km2_unit.classList.remove("is-visible");
        ha_unit.classList.remove("is-visible");
        a_unit.classList.remove("is-visible");
        output.innerHTML = 'm2';
        m2_unit.classList.add("is-visible");
    } else if (225 <= tokenData.rotation && tokenData.rotation < 315) {
        ha_unit.classList.remove("is-visible");
        m2_unit.classList.remove("is-visible");
        a_unit.classList.remove("is-visible");
        output.innerHTML = 'km2';
        km2_unit.classList.add("is-visible");
    } else {
        km2_unit.classList.remove("is-visible");
        m2_unit.classList.remove("is-visible");
        a_unit.classList.remove("is-visible");
        output.innerHTML = 'ha';
        ha_unit.classList.add("is-visible");
    }

}

function addBiomeToMain(tokenData) {
    let ContMarg = ContMargPosition();
    let Savanna = SavannaPosition();
    let Forest = ForestPosition();
    let Grassland = GrasslandPosition();
    let Desert = DesertPosition();
    let Wetland = WetlandPosition();
    let Shrubland = ShrublandPosition();
    let BCE = BCEPosition();
    let OpenOcean = OpenOceanPosition();

    let tokenX = tokenData.x;
    let tokenY = tokenData.y;
    console.log(ContMarg);

    //provisional code to detect the biome whenever the token is within certain region

    if (tokenX >= ContMarg[0] && tokenX <= ContMarg[1] - wheelSize / 2 && tokenY >= ContMarg[2] - wheelSize / 2 && tokenY <= ContMarg[3]) {
        console.log('token is inside Continent Margins');
    }
    else if (tokenX >= Savanna[0] && tokenX <= Savanna[1] - wheelSize / 2 && tokenY >= Savanna[2] - wheelSize / 2 && tokenY <= Savanna[3]) {
        console.log('token is inside Savanna');
    } else if (tokenX >= Forest[0] && tokenX <= Forest[1] - wheelSize / 2 && tokenY >= Forest[2] - wheelSize / 2 && tokenY <= Forest[3]) {
        console.log('token is inside Forest');
    } else if (tokenX >= Grassland[0] && tokenX <= Grassland[1] - wheelSize / 2 && tokenY >= Grassland[2] - wheelSize / 2 && tokenY <= Grassland[3]) {
        console.log('token is inside Grassland');
    } else if (tokenX >= Desert[0] && tokenX <= Desert[1] - wheelSize / 2 && tokenY >= Desert[2] - wheelSize / 2 && tokenY <= Desert[3]) {
        console.log('token is inside Desert');
    } else if (tokenX >= Wetland[0] && tokenX <= Wetland[1] - wheelSize / 2 && tokenY >= Wetland[2] - wheelSize / 2 && tokenY <= Wetland[3]) {
        console.log('token is inside Wetland');
    } else if (tokenX >= Shrubland[0] && tokenX <= Shrubland[1] - wheelSize / 2 && tokenY >= Shrubland[2] - wheelSize / 2 && tokenY <= Shrubland[3]) {
        console.log('token is inside Shrubland');
    } else if (tokenX >= BCE[0] && tokenX <= BCE[1] - wheelSize / 2 && tokenY >= BCE[2] - wheelSize / 2 && tokenY <= BCE[3]) {
        console.log('token is inside BCE');
    } else if (tokenX >= OpenOcean[0] && tokenX <= OpenOcean[1] - wheelSize / 2 && tokenY >= OpenOcean[2] - wheelSize / 2 && tokenY <= OpenOcean[3]) {
        console.log('token is inside OpenOcean');
    }
}



function listenToTokens() {
    const server = `ws://localhost:6050`;
    const ws = new WebSocket(server);

    ws.onopen = () => {
        console.log("🧦 Websocket connection established.");
    };

    ws.onerror = (error) => {
        console.log(`WebSocket error: `, error);
    };

    ws.onmessage = (msg) => {
        let json;
        try {
            json = JSON.parse(msg?.data);
        } catch (error) {
            return;
        }
        const data = json.args;
        console.log("🖲️ New data from token: ", data);

        if (json?.type === "/tracker/add") {
            addColorWheel(data);
        } else if (json?.type === "/tracker/update") {
            updateWheel(data);
            addBiomeToMain(data);
            updateUnit(data);
        }
    };
}

listenToTokens();