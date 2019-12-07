var minecraft_game = {};
minecraft_game.rows = 16;
minecraft_game.columns = 26;
minecraft_game.board = document.getElementById("board");
minecraft_game.startPage = document.getElementById("container1");
minecraft_game.startButton = document.getElementById("start-btn");
minecraft_game.tutorialButton = document.getElementById("tutorial-btn");
minecraft_game.tutorialModal = document.getElementById("tutorialModal");
minecraft_game.closeModalButton = document.getElementById("close");
minecraft_game.gamePage = document.getElementById("container2");

//start button
minecraft_game.startButton.addEventListener("click", minecraft_game.startGame = function () {
    minecraft_game.startPage.classList.add("display-none");
    minecraft_game.gamePage.classList.remove("display-none");
});

//tutorial button
minecraft_game.tutorialButton.addEventListener("click", minecraft_game.showTutorial = function () {
    minecraft_game.tutorialModal.classList.remove("display-none");
});

// When the user clicks on the X, close the modal
minecraft_game.closeModalButton.onclick = function () {
    minecraft_game.tutorialModal.classList.add("display-none");
}

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    if (event.target == minecraft_game.tutorialModal) {
        minecraft_game.tutorialModal.classList.add("display-none");
    }
}


//board
minecraft_game.createBoard = function () {
    for (let j = 0; j < minecraft_game.rows; j++) {
        for (let i = 0; i < minecraft_game.columns; i++) {
            let colDiv = document.createElement("div");
            colDiv.classList.add("sky", "cell", "col-" + i, "row-" + j);
            minecraft_game.board.append(colDiv);
        }
    }
}

minecraft_game.createBoard();


minecraft_game.cloud = document.querySelectorAll(".row-0.col-3,.row-1.col-2,.row-1.col-3,.row-1.col-4,.row-2.col-1,.row-2.col-2,.row-2.col-3,.row-2.col-4,.row-2.col-5, .row-1.col-16, .row-1.col-17, .row-2.col-15, .row-2.col-16 ");
minecraft_game.cloud.forEach(item => {
    item.classList.add('cloud');
})

minecraft_game.leaves = document.querySelectorAll(".row-3.col-9,.row-3.col-10,.row-4.col-8,.row-4.col-9,.row-4.col-10,.row-4.col-11,.row-4.col-20,.row-5.col-8,.row-5.col-11,.row-5.col-19,.row-5.col-20,.row-5.col-21,.row-6.col-19,.row-6.col-21");
minecraft_game.leaves.forEach(item => {
    item.classList.add('leaves', 'toolAxe', 'natureEl');
})

minecraft_game.wood = document.querySelectorAll(".row-5.col-9,.row-8.col-10,.row-7.col-10,.row-7.col-11,.row-6.col-10,.row-5.col-10,.row-8.col-20,.row-7.col-20,.row-6.col-20");
minecraft_game.wood.forEach(item => {
    item.classList.add('wood', 'toolAxe', 'natureEl');
})

minecraft_game.stone = document.querySelectorAll(".row-7.col-5,.row-8.col-4,.row-8.col-5,.row-8.col-6,.row-8.col-16,.row-8.col-17");
minecraft_game.stone.forEach(item => {
    item.classList.add('stone', 'toolPick', 'natureEl');
})

minecraft_game.grass = document.querySelectorAll(".row-9");
minecraft_game.grass.forEach(item => {
    item.classList.add('grass', 'toolShovel', 'natureEl');
})

minecraft_game.dirt = document.querySelectorAll(".row-10,.row-11,.row-12,.row-13,.row-14,.row-15");
minecraft_game.dirt.forEach(item => {
    item.classList.add('dirt', 'toolShovel', 'natureEl');
})

//remove event listeners
function removeListeners() {
    let axeBtn = document.getElementById('axe')
    axeBtn.classList.remove('selected');
    let pickBtn = document.getElementById('pickaxe')
    pickBtn.classList.remove('selected');
    let shovelBtn = document.getElementById('shovel')
    shovelBtn.classList.remove('selected');
    let gameCell = document.getElementById('gameCell');
    gameCell.classList.remove('inUse');
    let trash = document.getElementById('trashChest');
    trash.classList.remove('inUse');
    trash.classList.remove('selected');
    let allAxeCells = document.getElementsByClassName("toolAxe");
    for (let i = 0; i < allAxeCells.length; i++) {
        allAxeCells[i].removeEventListener("click", selectedAxeCell);
    }
    let otherBoardCells1 = document.querySelectorAll('.sky:not(.toolAxe)');
    for (let i = 0; i < otherBoardCells1.length; i++) {
        otherBoardCells1[i].removeEventListener("click", notAxeCell);
    }
    let allPickCells = document.getElementsByClassName("toolPick");
    for (let i = 0; i < allPickCells.length; i++) {
        allPickCells[i].removeEventListener("click", selectedPickCell);
    }
    let otherBoardCells2 = document.querySelectorAll('.sky:not(.toolPick)');
    for (let i = 0; i < otherBoardCells2.length; i++) {
        otherBoardCells2[i].removeEventListener("click", notPickCell);
    }
    let allShovelCells = document.getElementsByClassName("toolShovel");
    for (let i = 0; i < allShovelCells.length; i++) {
        allShovelCells[i].removeEventListener("click", selectedShovelCell);
    }
    let otherBoardCells3 = document.querySelectorAll('.sky:not(.toolShovel)');
    for (let i = 0; i < otherBoardCells3.length; i++) {
        otherBoardCells3[i].removeEventListener("click", notShovelCell);
    }
}

//axe - trees
document.getElementById('axe').addEventListener('click', function (event) {
    removeListeners();
    let axeBtn = document.getElementById('axe')
    axeBtn.classList.add('selected');
    axeCellsActive();
})

function axeCellsActive() {
    let allBoardCells = document.getElementsByClassName("sky");
    for (let i = 0; i < allBoardCells.length; i++) {
        if (allBoardCells[i].classList.contains("toolAxe")) {
            let allAxeCells = document.getElementsByClassName("toolAxe");
            for (let i = 0; i < allAxeCells.length; i++) {
                allAxeCells[i].addEventListener("click", selectedAxeCell);
            }
        } else {
            let otherBoardCells = document.querySelectorAll('.sky:not(.toolAxe)');
            for (let i = 0; i < otherBoardCells.length; i++) {
                otherBoardCells[i].addEventListener("click", notAxeCell);
            }
        }
    }
}

function notAxeCell() {
    let axeBtn = document.getElementById('axe')
    if (axeBtn.classList.contains('selected')) {
        document.getElementById('axe').classList.add("wrongCell");
        setTimeout(clearAxe, 250);
    }
}

function clearAxe() {
    document.getElementById('axe').classList.remove("wrongCell");
}

function selectedAxeCell() {
    let clickedCell = event.target;
    let gameCellImg = document.getElementById('gameCell');
    if (gameCellImg.classList.contains('natureEl')) {
        gameCellImg.classList.add("redBorder");
        setTimeout(redBorder, 250);
    } else {
        if (clickedCell.classList.contains("leaves")) {
            gameCellImg.classList.add('leaves', 'natureEl');
            clickedCell.classList.remove('leaves', 'toolAxe', 'natureEl');
        } else if (clickedCell.classList.contains("wood")) {
            gameCellImg.classList.add('wood', 'natureEl');
            clickedCell.classList.remove('wood', 'toolAxe', 'natureEl');
        } else {
            notAxeCell();
        }
    }
}

//pickaxe - stone
document.getElementById('pickaxe').addEventListener('click', function (event) {
    removeListeners();
    let pickBtn = document.getElementById('pickaxe')
    pickBtn.classList.add('selected');
    pickCellsActive();
})

function pickCellsActive() {
    let allBoardCells = document.getElementsByClassName("sky");
    for (let i = 0; i < allBoardCells.length; i++) {
        if (allBoardCells[i].classList.contains("toolPick")) {
            let allPickCells = document.getElementsByClassName("toolPick");
            for (let i = 0; i < allPickCells.length; i++) {
                allPickCells[i].addEventListener("click", selectedPickCell);
            }
        } else {
            let otherBoardCells = document.querySelectorAll('.sky:not(.toolPick)');
            for (let i = 0; i < otherBoardCells.length; i++) {
                otherBoardCells[i].addEventListener("click", notPickCell);
            }
        }
    }
}

function notPickCell() {
    let pickBtn = document.getElementById('pickaxe')
    if (pickBtn.classList.contains('selected')) {
        document.getElementById('pickaxe').classList.add("wrongCell");
        setTimeout(clearPick, 250);
    }
}

function clearPick() {
    document.getElementById('pickaxe').classList.remove("wrongCell");
}

function selectedPickCell() {
    let clickedCell = event.target;
    let gameCellImg = document.getElementById('gameCell');
    if (gameCellImg.classList.contains('natureEl')) {
        gameCellImg.classList.add("redBorder");
        setTimeout(redBorder, 250);
    } else {
        if (clickedCell.classList.contains("stone")) {
            gameCellImg.classList.add('stone', 'natureEl');
            clickedCell.classList.remove('stone', 'toolPick', 'natureEl');
        } else {
            notPickCell();
        }
    }
}

//axe - dirt and grass
document.getElementById('shovel').addEventListener('click', function (event) {
    removeListeners();
    let shovelBtn = document.getElementById('shovel')
    shovelBtn.classList.add('selected');
    shovelCellsActive();
})

function shovelCellsActive() {
    let allBoardCells = document.getElementsByClassName("sky");
    for (let i = 0; i < allBoardCells.length; i++) {
        if (allBoardCells[i].classList.contains("toolShovel")) {
            let allShovelCells = document.getElementsByClassName("toolShovel");
            for (let i = 0; i < allShovelCells.length; i++) {
                allShovelCells[i].addEventListener("click", selectedShovelCell);
            }
        } else {
            let otherBoardCells = document.querySelectorAll('.sky:not(.toolShovel)');
            for (let i = 0; i < otherBoardCells.length; i++) {
                otherBoardCells[i].addEventListener("click", notShovelCell);
            }
        }
    }
}


function selectedShovelCell() {
    let clickedCell = event.target;
    let gameCellImg = document.getElementById('gameCell');
    if (gameCellImg.classList.contains('natureEl')) {
        gameCellImg.classList.add("redBorder");
        setTimeout(redBorder, 250);
    } else {
        if (clickedCell.classList.contains("dirt")) {
            gameCellImg.classList.add('dirt', 'natureEl');
            clickedCell.classList.remove('dirt', 'toolShovel', 'natureEl');
        } else if (clickedCell.classList.contains("grass")) {
            gameCellImg.classList.add('grass', 'natureEl');
            clickedCell.classList.remove('grass', 'toolShovel', 'natureEl');
        } else {
            notShovelCell();
        }
    }
}

function redBorder() {
    document.getElementById('gameCell').classList.remove("redBorder");
}

function notShovelCell() {
    let shovelBtn = document.getElementById('shovel')
    if (shovelBtn.classList.contains('selected')) {
        document.getElementById('shovel').classList.add("wrongCell");
        setTimeout(clearShovel, 250);
    }
}

function clearShovel() {
    document.getElementById('shovel').classList.remove("wrongCell");
}

//game cell
document.getElementById('gameCell').addEventListener('click', function (event) {
    let gameCell = document.getElementById('gameCell');
    if (gameCell.classList.contains("natureEl")) {
        removeListeners();
        let trash = document.getElementById('trashChest');
        trash.classList.add('inUse');
        gameCell.classList.add('inUse');
        gameCellActive();
    }
})

function gameCellActive() {
    let allSkyCells = document.querySelectorAll('.sky:not(.natureEl)')
    for (let i = 0; i < allSkyCells.length; i++) {
        allSkyCells[i].addEventListener("click", selectedSkyCell);
    }
    document.getElementById("trashChest").addEventListener("click", toDispose);
}

function toDispose() {
    let gameCell = document.getElementById('gameCell');
    if (gameCell.classList.contains("natureEl")) {
        removeListeners();
        gameCell.classList.remove('natureEl', 'dirt', 'grass', 'stone', 'wood', 'leaves');
        gameCell.classList.remove('inUse');
        document.getElementById('trashChest').classList.add("selected");
    } setTimeout(unclickTrash, 250);
}

function unclickTrash() {
    document.getElementById('trashChest').classList.remove("selected");
    document.getElementById('trashChest').classList.remove("inUse");
}


function selectedSkyCell() {
    removeListeners();
    let clickedCell = event.target;
    // var regexRow = /(row-\d*)/g;
    // var regexCol = /(col-\d*)/g;
    // let rowNum = clickedCell.classList.toString().match(regexRow);
    // let rowVal = rowNum.toString();
    // let rowN = rowNum.toString().replace("row-","");
    // let colNum = clickedCell.classList.toString().match(regexCol);
    // let colVal = rowNum.toString();
    // let colN = colNum.toString().replace("col-","");
    // let colLeft =  "col-"+(colN-1);
    // let colRight =  "col-"+(colN+1);
    // let rowUp =  "row-"+(rowN-1);
    // let rowDown =  "row-"+(rowN+1);
    // let allSkyCells = document.querySelectorAll('.sky:not(.natureEl)')
    // for (let i = 0; i < allSkyCells.length; i++) {
    //     if (
    //         (allSkyCells[i].classList.contains(colLeft) && allSkyCells[i].classList.contains(rowVal)) || 
    //         (allSkyCells[i].classList.contains(colVal) && allSkyCells[i].classList.contains(rowUp)) || 
    //         (allSkyCells[i].classList.contains(colRight) && allSkyCells[i].classList.contains(rowVal)) || 
    //         (allSkyCells[i].classList.contains(colVal) && allSkyCells[i].classList.contains(rowDown))
    //         ){
    let gameCellImg = document.getElementById('gameCell');
    let trash = document.getElementById('trashChest');
    if (gameCellImg.classList.contains("dirt")) {
        gameCellImg.classList.remove('dirt', 'natureEl', 'inUse');
        trash.classList.remove('inUse');
        clickedCell.classList.add('dirt', 'toolShovel');
    } else if (gameCellImg.classList.contains("grass")) {
        gameCellImg.classList.remove('grass', 'natureEl', 'inUse');
        trash.classList.remove('inUse');
        clickedCell.classList.add('grass', 'toolShovel');
    } else if (gameCellImg.classList.contains("leaves")) {
        gameCellImg.classList.remove('leaves', 'natureEl', 'inUse');
        trash.classList.remove('inUse');
        clickedCell.classList.add('leaves', 'toolAxe');
    } else if (gameCellImg.classList.contains("wood")) {
        gameCellImg.classList.remove('wood', 'natureEl', 'inUse');
        trash.classList.remove('inUse');
        clickedCell.classList.add('wood', 'toolAxe');
    } else if (gameCellImg.classList.contains("stone")) {
        gameCellImg.classList.remove('stone', 'natureEl', 'inUse');
        trash.classList.remove('inUse');
        clickedCell.classList.add('stone', 'toolPick');
    }
}


document.getElementById('gameBtn').addEventListener('click', function (event) {
    document.getElementById('gameBtn').classList.add("selected");
    window.location.reload(true);
})


