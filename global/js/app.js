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

//Player names
var playerName1 = "";
var playerName2 = "";
var playerName3 = "";
var playerName4 = "";
var playerName5 = "";
var playerName6 = "";
var playerName7 = "";
var playerName8 = "";




//Initialize DOM-Elements

//Initialize Headings
const headingConfig = document.getElementById("h1-config");
const headingGame = document.getElementById("h1-game");

//Initialize Sections
const gameVersionContainer = document.getElementById("game-version");
const playerCountContainer = document.getElementById("player-count");
//Initialize Player Name Input Form
const playerNameInputForm = document.getElementById("player-name-input-form");
const gameContainer = document.getElementById("game-container");
const playerNameInputFormContainer = document.getElementById("player-names");


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


//Initialize Player Name Inputs
const playerNameInput1 = document.getElementById("player-1-name-input");
const playerNameInput2 = document.getElementById("player-2-name-input");
const playerNameInput3 = document.getElementById("player-3-name-input");
const playerNameInput4 = document.getElementById("player-4-name-input");
const playerNameInput5 = document.getElementById("player-5-name-input");
const playerNameInput6 = document.getElementById("player-6-name-input");
const playerNameInput7 = document.getElementById("player-7-name-input");
const playerNameInput8 = document.getElementById("player-8-name-input");



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
    hidePlayerNameInputs();
    if (playerNameInputFormContainer.classList.contains("hidden") == true) {
        playerNameInputFormContainer.classList.remove("hidden");
    }
});

playerCountButton3.addEventListener("click", () => {
    playerCount = 3;
    console.log("Following Configurations have been made: \n Player Count: 3");
    debugValues();
    hidePlayerNameInputs();
    if (playerNameInputFormContainer.classList.contains("hidden") == true) {
        playerNameInputFormContainer.classList.remove("hidden");
    }
});

playerCountButton4.addEventListener("click", () => {
    playerCount = 4;
    console.log("Following Configurations have been made: \n Player Count: 4");
    debugValues();
    hidePlayerNameInputs();
    if (playerNameInputFormContainer.classList.contains("hidden") == true) {
        playerNameInputFormContainer.classList.remove("hidden");
    }
});

playerCountButton5.addEventListener("click", () => {
    playerCount = 5;
    console.log("Following Configurations have been made: \n Player Count: 5");
    debugValues();
    hidePlayerNameInputs();
    if (playerNameInputFormContainer.classList.contains("hidden") == true) {
        playerNameInputFormContainer.classList.remove("hidden");
    }
});

playerCountButton6.addEventListener("click", () => {
    playerCount = 6;
    console.log("Following Configurations have been made: \n Player Count: 6");
    debugValues();
    hidePlayerNameInputs();
    if (playerNameInputFormContainer.classList.contains("hidden") == true) {
        playerNameInputFormContainer.classList.remove("hidden");
    }
});

playerCountButton7.addEventListener("click", () => {
    playerCount = 7;
    console.log("Following Configurations have been made: \n Player Count: 7");
    debugValues();
    hidePlayerNameInputs();
    if (playerNameInputFormContainer.classList.contains("hidden") == true) {
        playerNameInputFormContainer.classList.remove("hidden");
    }
});

playerCountButton8.addEventListener("click", () => {
    playerCount = 8;
    console.log("Following Configurations have been made: \n Player Count: 8");
    debugValues();
    hidePlayerNameInputs();
    if (playerNameInputFormContainer.classList.contains("hidden") == true) {
        playerNameInputFormContainer.classList.remove("hidden");
    }
});


playerNameInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    readPlayerNames();
    if (playerCountContainer.classList.contains("hidden") == false) {
        playerCountContainer.classList.add("hidden");
    }
    if (playerNameInputFormContainer.classList.contains("hidden") == false) {
        playerNameInputFormContainer.classList.add("hidden");
    }
    if (gameContainer.classList.contains("hidden") == true) {
        gameContainer.classList.remove("hidden");
    }
    if (headingConfig.classList.contains("hidden") == false) {
        headingConfig.classList.add("hidden");
    }
    if (headingGame.classList.contains("hidden") == true) {
        headingGame.classList.remove("hidden");
    }
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
                hidePlayerNameInputs();
            }
            console.log("Maximum Player Count set to: " + maxPlayerCount);
            debugValues();
        }
    }
}

function hidePlayerNameInputs() {
    if (playerCount == 0) {
        if (playerNameInput1.classList.contains("hidden") == false) {
            playerNameInput1.classList.add("hidden");
        }
        if (playerNameInput2.classList.contains("hidden") == false) {
            playerNameInput2.classList.add("hidden");
        }
        if (playerNameInput3.classList.contains("hidden") == false) {
            playerNameInput3.classList.add("hidden");
        }
        if (playerNameInput4.classList.contains("hidden") == false) {
            playerNameInput4.classList.add("hidden");
        }
        if (playerNameInput5.classList.contains("hidden") == false) {
            playerNameInput5.classList.add("hidden");
        }
        if (playerNameInput6.classList.contains("hidden") == false) {
            playerNameInput6.classList.add("hidden");
        }
        if (playerNameInput7.classList.contains("hidden") == false) {
            playerNameInput7.classList.add("hidden");
        }
        if (playerNameInput8.classList.contains("hidden") == false) {
            playerNameInput8.classList.add("hidden");
        }
    } else {

    }
    if (playerCount == 1) {
        if (playerNameInput1.classList.contains("hidden") == false) {
            playerNameInput1.classList.add("hidden");
        }
        if (playerNameInput2.classList.contains("hidden") == false) {
            playerNameInput2.classList.add("hidden");
        }
        if (playerNameInput3.classList.contains("hidden") == false) {
            playerNameInput3.classList.add("hidden");
        }
        if (playerNameInput4.classList.contains("hidden") == false) {
            playerNameInput4.classList.add("hidden");
        }
        if (playerNameInput5.classList.contains("hidden") == false) {
            playerNameInput5.classList.add("hidden");
        }
        if (playerNameInput6.classList.contains("hidden") == false) {
            playerNameInput6.classList.add("hidden");
        }
        if (playerNameInput7.classList.contains("hidden") == false) {
            playerNameInput7.classList.add("hidden");
        }
        if (playerNameInput8.classList.contains("hidden") == false) {
            playerNameInput8.classList.add("hidden");
        }
    } else {
        if (playerCount == 2) {
            if (playerNameInput1.classList.contains("hidden") != false) {
                playerNameInput1.classList.remove("hidden");
            }
            if (playerNameInput2.classList.contains("hidden") != false) {
                playerNameInput2.classList.remove("hidden");
            }
            if (playerNameInput3.classList.contains("hidden") == false) {
                playerNameInput3.classList.add("hidden");
            }
            if (playerNameInput4.classList.contains("hidden") == false) {
                playerNameInput4.classList.add("hidden");
            }
            if (playerNameInput5.classList.contains("hidden") == false) {
                playerNameInput5.classList.add("hidden");
            }
            if (playerNameInput6.classList.contains("hidden") == false) {
                playerNameInput6.classList.add("hidden");
            }
            if (playerNameInput7.classList.contains("hidden") == false) {
                playerNameInput7.classList.add("hidden");
            }
            if (playerNameInput8.classList.contains("hidden") == false) {
                playerNameInput8.classList.add("hidden");
            }
        } else {

        }
        if (playerCount == 3) {
            if (playerNameInput1.classList.contains("hidden") != false) {
                playerNameInput1.classList.remove("hidden");
            }
            if (playerNameInput2.classList.contains("hidden") != false) {
                playerNameInput2.classList.remove("hidden");
            }
            if (playerNameInput3.classList.contains("hidden") != false) {
                playerNameInput3.classList.remove("hidden");
            }
            if (playerNameInput4.classList.contains("hidden") == false) {
                playerNameInput4.classList.add("hidden");
            }
            if (playerNameInput5.classList.contains("hidden") == false) {
                playerNameInput5.classList.add("hidden");
            }
            if (playerNameInput6.classList.contains("hidden") == false) {
                playerNameInput6.classList.add("hidden");
            }
            if (playerNameInput7.classList.contains("hidden") == false) {
                playerNameInput7.classList.add("hidden");
            }
            if (playerNameInput8.classList.contains("hidden") == false) {
                playerNameInput8.classList.add("hidden");
            }
        } else {
            if (playerCount == 4) {
                if (playerNameInput1.classList.contains("hidden") != false) {
                    playerNameInput1.classList.remove("hidden");
                }
                if (playerNameInput2.classList.contains("hidden") != false) {
                    playerNameInput2.classList.remove("hidden");
                }
                if (playerNameInput3.classList.contains("hidden") != false) {
                    playerNameInput3.classList.remove("hidden");
                }
                if (playerNameInput4.classList.contains("hidden") != false) {
                    playerNameInput4.classList.remove("hidden");
                }
                if (playerNameInput5.classList.contains("hidden") == false) {
                    playerNameInput5.classList.add("hidden");
                }
                if (playerNameInput6.classList.contains("hidden") == false) {
                    playerNameInput6.classList.add("hidden");
                }
                if (playerNameInput7.classList.contains("hidden") == false) {
                    playerNameInput7.classList.add("hidden");
                }
                if (playerNameInput8.classList.contains("hidden") == false) {
                    playerNameInput8.classList.add("hidden");
                }
            } else {
                if (playerCount == 5) {
                    if (playerNameInput1.classList.contains("hidden") != false) {
                        playerNameInput1.classList.remove("hidden");
                    }
                    if (playerNameInput2.classList.contains("hidden") != false) {
                        playerNameInput2.classList.remove("hidden");
                    }
                    if (playerNameInput3.classList.contains("hidden") != false) {
                        playerNameInput3.classList.remove("hidden");
                    }
                    if (playerNameInput4.classList.contains("hidden") != false) {
                        playerNameInput4.classList.remove("hidden");
                    }
                    if (playerNameInput5.classList.contains("hidden") != false) {
                        playerNameInput5.classList.remove("hidden");
                    }
                    if (playerNameInput6.classList.contains("hidden") == false) {
                        playerNameInput6.classList.add("hidden");
                    }
                    if (playerNameInput7.classList.contains("hidden") == false) {
                        playerNameInput7.classList.add("hidden");
                    }
                    if (playerNameInput8.classList.contains("hidden") == false) {
                        playerNameInput8.classList.add("hidden");
                    }
                } else {
                    if (playerCount == 6) {
                        if (playerNameInput1.classList.contains("hidden") != false) {
                            playerNameInput1.classList.remove("hidden");
                        }
                        if (playerNameInput2.classList.contains("hidden") != false) {
                            playerNameInput2.classList.remove("hidden");
                        }
                        if (playerNameInput3.classList.contains("hidden") != false) {
                            playerNameInput3.classList.remove("hidden");
                        }
                        if (playerNameInput4.classList.contains("hidden") != false) {
                            playerNameInput4.classList.remove("hidden");
                        }
                        if (playerNameInput5.classList.contains("hidden") != false) {
                            playerNameInput5.classList.remove("hidden");
                        }
                        if (playerNameInput6.classList.contains("hidden") != false) {
                            playerNameInput6.classList.remove("hidden");
                        }
                        if (playerNameInput7.classList.contains("hidden") == false) {
                            playerNameInput7.classList.add("hidden");
                        }
                        if (playerNameInput8.classList.contains("hidden") == false) {
                            playerNameInput8.classList.add("hidden");
                        }
                    } else {
                        if (playerCount == 7) {
                            if (playerNameInput1.classList.contains("hidden") != false) {
                                playerNameInput1.classList.remove("hidden");
                            }
                            if (playerNameInput2.classList.contains("hidden") != false) {
                                playerNameInput2.classList.remove("hidden");
                            }
                            if (playerNameInput3.classList.contains("hidden") != false) {
                                playerNameInput3.classList.remove("hidden");
                            }
                            if (playerNameInput4.classList.contains("hidden") != false) {
                                playerNameInput4.classList.remove("hidden");
                            }
                            if (playerNameInput5.classList.contains("hidden") != false) {
                                playerNameInput5.classList.remove("hidden");
                            }
                            if (playerNameInput6.classList.contains("hidden") != false) {
                                playerNameInput6.classList.remove("hidden");
                            }
                            if (playerNameInput7.classList.contains("hidden") != false) {
                                playerNameInput7.classList.remove("hidden");
                            }
                            if (playerNameInput8.classList.contains("hidden") == false) {
                                playerNameInput8.classList.add("hidden");
                            }
                        } else {
                            if (playerCount == 8) {
                                if (playerNameInput1.classList.contains("hidden") != false) {
                                    playerNameInput1.classList.remove("hidden");
                                }
                                if (playerNameInput2.classList.contains("hidden") != false) {
                                    playerNameInput2.classList.remove("hidden");
                                }
                                if (playerNameInput3.classList.contains("hidden") != false) {
                                    playerNameInput3.classList.remove("hidden");
                                }
                                if (playerNameInput4.classList.contains("hidden") != false) {
                                    playerNameInput4.classList.remove("hidden");
                                }
                                if (playerNameInput5.classList.contains("hidden") != false) {
                                    playerNameInput5.classList.remove("hidden");
                                }
                                if (playerNameInput6.classList.contains("hidden") != false) {
                                    playerNameInput6.classList.remove("hidden");
                                }
                                if (playerNameInput7.classList.contains("hidden") != false) {
                                    playerNameInput7.classList.remove("hidden");
                                }
                                if (playerNameInput8.classList.contains("hidden") != false) {
                                    playerNameInput8.classList.remove("hidden");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function readPlayerNames() {
    if (playerNameInput1.value != "") {
        playerName1 = playerNameInput1.value;
    } else {
        playerName1 = "Player 1";
    }

    if (playerNameInput2.value != "") {
        playerName2 = playerNameInput2.value;
    } else {
        playerName2 = "Player 2";
    }

    if (playerNameInput3.value != "") {
        playerName3 = playerNameInput3.value;
    } else {
        playerName3 = "Player 3";
    }

    if (playerNameInput4.value != "") {
        playerName4 = playerNameInput4.value;
    } else {
        playerName4 = "Player 4";
    }

    if (playerNameInput5.value != "") {
        playerName5 = playerNameInput5.value;
    } else {
        playerName5 = "Player 5";
    }

    if (playerNameInput6.value != "") {
        playerName6 = playerNameInput6.value;
    } else {
        playerName6 = "Player 6";
    }

    if (playerNameInput7.value != "") {
        playerName7 = playerNameInput7.value;
    } else {
        playerName7 = "Player 7";
    }

    if (playerNameInput8.value != "") {
        playerName8 = playerNameInput8.value;
    } else {
        playerName8 = "Player 8";
    }
    debugValues();
}


//***DEBUG***//
function debugValues() {
    console.log(`--------------------------------------\nCurrent Config Values:\nGame Version: ${gameVersion}\nMaximumPlayerCount: ${maxPlayerCount}\nPlayer Count: ${playerCount}\nPlayer 1: ${playerName1}\nPlayer 2: ${playerName2}\nPlayer 3: ${playerName3}\nPlayer 4: ${playerName4}\nPlayer 5: ${playerName5}\nPlayer 6: ${playerName6}\nPlayer 7: ${playerName7}\nPlayer 8: ${playerName8}\n--------------------------------------`);
}
//***DEBUG***//



//Initialization Complete
console.log("Initialization Complete!");
debugValues();