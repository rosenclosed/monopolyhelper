//Create variables

const minPlayerCount = 2;
//gameVersion:
//0=undefined, 1=FC Bayern, 2=MiWuLa
var gameVersion = 0;
//maxPlayerCount;
//0=undefined, 8=FC-Bayern, 6=MiWuLa
var maxPlayerCount = 0;
//playerCount:
//0=undefined, 2-8=amount of players
var playerCount = 0;

//Initialize DOM-Elements

//Initialize Sections
const gameVersionContainer = document.getElementById("game-version");
const playerCountContainer = document.getElementById("player-count");

//Initialize Game Version Buttons
const fcbayernButton = document.getElementById("monopoly-fc-bayern-3rd-edition");
const miwulaButton = document.getElementById("miwula-monopoly");

//Initialize Player Count Buttons
const playerCountButton2 = document.getElementById("player-count-2");
const playerCountButton3 = document.getElementById("player-count-3");
const playerCountButton4 = document.getElementById("player-count-4");
const playerCountButton5 = document.getElementById("player-count-5");
const playerCountButton6 = document.getElementById("player-count-6");
const playerCountButton7 = document.getElementById("player-count-7");
const playerCountButton8 = document.getElementById("player-count-8");



//Add Event Listeners
fcbayernButton.addEventListener("click", () => {
    gameVersion = 1;
    console.log("Following Configurations have been made: \n Game version: FC Bayern (ID: 1)");
    identifyMaxPlayerCount();
    debugValues();
    playerCountContainer.classList.remove("hidden");
    gameVersionContainer.classList.add("hidden");
});

miwulaButton.addEventListener("click", () => {
    gameVersion = 2;
    console.log("Following Configurations have been made: \n Game version: MiWuLa (ID: 2)");
    identifyMaxPlayerCount();
    debugValues();
    playerCountContainer.classList.remove("hidden");
    gameVersionContainer.classList.add("hidden");
});

playerCountButton2.addEventListener("click", () => {
    playerCount = 2;
    console.log("Following Configurations have been made: \n Player Count: 2");
    debugValues();
});

playerCountButton3.addEventListener("click", () => {
    playerCount = 3;
    console.log("Following Configurations have been made: \n Player Count: 3");
    debugValues();
});

playerCountButton4.addEventListener("click", () => {
    playerCount = 4;
    console.log("Following Configurations have been made: \n Player Count: 4");
    debugValues();
});

playerCountButton5.addEventListener("click", () => {
    playerCount = 5;
    console.log("Following Configurations have been made: \n Player Count: 5");
    debugValues();
});

playerCountButton6.addEventListener("click", () => {
    playerCount = 6;
    console.log("Following Configurations have been made: \n Player Count: 6");
    debugValues();
});

playerCountButton7.addEventListener("click", () => {
    playerCount = 7;
    console.log("Following Configurations have been made: \n Player Count: 7");
    debugValues();
});

playerCountButton8.addEventListener("click", () => {
    playerCount = 8;
    console.log("Following Configurations have been made: \n Player Count: 8");
    debugValues();
});



//Define Functions

//Find out maximum Player Count
function identifyMaxPlayerCount() {
    if (gameVersion == 1) {
        maxPlayerCount = 8;
        if (playerCountButton7.classList.contains("hidden") == true) {
            playerCountButton7.classList.remove("hidden");
        }
        if (playerCountButton8.classList.contains("hidden") == true) {
            playerCountButton8.classList.remove("hidden");
        }
        console.log("Maximum Player Count set to: " + maxPlayerCount);
        debugValues();
    } else {
        if (gameVersion == 2) {
            maxPlayerCount = 6;
            if (playerCountButton7.classList.contains("hidden") == false) {
                playerCountButton7.classList.add("hidden");
            }
            if (playerCountButton8.classList.contains("hidden") == false) {
                playerCountButton8.classList.add("hidden");
            }
            if (playerCount > 6) {
                playerCount = 6;
            }
            console.log("Maximum Player Count set to: " + maxPlayerCount);
            debugValues();
        }
    }
}



//***DEBUG***//
function debugValues() {
    console.log(`--------------------------------------\nCurrent Config Values:\nGame Version: ${gameVersion}\nMaximumPlayerCount: ${maxPlayerCount}\nPlayer Count: ${playerCount}\n--------------------------------------`);
}
//***DEBUG***//



//Initialization Complete
console.log("Initialization Complete!");
debugValues();