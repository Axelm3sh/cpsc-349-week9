var charOneSpr = document.querySelector("#cat");
var charTwoSpr = document.querySelector("#dog");



var sqrGridSize = 8; //might not be used?

var array_GridTiles = []; //empty array

//Tile data to be paired with DOM element
var tileData = {
    column: "",
    row: "",
};


// when window loads all assets
window.onload = function () {
    alert("Hello, welcome to the grid board!");




    initializeGridSize();

};

window.onkeyup = function () {
    //    alert("key pressed!");
    Move();
}

function buttonMove(direction) {
    event.key = direction;
}

//Parameter is the square grid size
function initializeGridSize() {
    //    var boardElement = document.querySelector(".board");
    $(".board").load("GridTemplate.html");


    array_GridTiles = document.querySelectorAll("#tile");
    //go thru all found GridTiles, rename their ID to match the grid size


    array_GridTiles[1].appendChild(charOneSpr);
    array_GridTiles[2].appendChild(charTwoSpr);
    
    
    

}

//Limit row/column to 8x8
function inBetween(checkNum) {
    if (checkNum <= sqrGridSize && checkNum > 0) {
        return true;
    } else {
        return false;
    }
}

//only call if valid step
function swapImage(char, newRow, newCol) {
    var tileInsert;

    //If we are in valid bounds of the grid
    if (inBetween(newRow) && inBetween(newCol)) {

        //insert to new location?
        for (i = 0; i < array_GridTiles.length; i++) {
            if ((array_GridTiles[i].dataset.rowid == newRow) &&
                (array_GridTiles[i].dataset.colid == newCol)) {
                tileInsert = array_GridTiles[i];
            }
        }

        //Actually move to the tile
        if (char === "cat") {
            tileInsert.appendChild(charOneSpr);
        } else if (char === "dog") //dog
        {
            tileInsert.appendChild(charTwoSpr);
        }
    }
}

//bool, direction="up","left","down","right"
function Move(dirOverride) {
    var currRow;
    var currCol;

    var isCat = false; //char 1 is cat

    var direction = event.key; //get last keypress

    //WASD is CAT
    switch (direction) {
        case "w":

        case "a":

        case "s":

        case "d":
            isCat = true;
            break;
        default:
            break;
    }

    if (isCat) {
        //find parent data-'type'
//        currRow = charOneSpr.parentNode.dataset.rowid; //using data-type attri
        //        currRow = charOneSpr.style.grid-column;
//        currCol = charOneSpr.parentNode.dataset.colid;

        switch (direction) {
            case "w":
                $("#cat").animate({top: '-=105px'});
//                swapImage("cat", Number(currRow) - 1, Number(currCol));
                break;
            case "a":
                $("#cat").animate({left: '-=105px'});
//                swapImage("cat", Number(currRow), Number(currCol) - 1);
                break;
            case "s":
                $("#cat").animate({top: '+=105px'});
//                swapImage("cat", Number(currRow) + 1, Number(currCol));
                break;
            case "d":
                $("#cat").animate({left: '+=105px'});
//                swapImage("cat", Number(currRow), Number(currCol) + 1);
                break;
            default:
                console.log("Invalid move button");
        }

        //        swapImage("cat", Number(currRow) + 1, Number(currCol) + 1);

    } else //player 2 AKA dog
    {
        //find parent data-'type'
//        currRow = charTwoSpr.parentNode.dataset.rowid; //using data-type attri
        //        currRow = charOneSpr.style.grid-column;
//        currCol = charTwoSpr.parentNode.dataset.colid;

        switch (direction) {
            case "i":
                $("#dog").animate({top: '-=105px'});
//                swapImage("dog", Number(currRow) - 1, Number(currCol));
                break;
            case "j":
                $("#dog").animate({left: '-=105px'});
//                swapImage("dog", Number(currRow), Number(currCol) - 1);
                break;
            case "k":
                $("#dog").animate({top: '+=105px'});
//                swapImage("dog", Number(currRow) + 1, Number(currCol));
                break;
            case "l":
                $("#dog").animate({left: '+=105px'});
//                swapImage("dog", Number(currRow), Number(currCol) + 1);
                break;
            default:
                console.log("Invalid move button");
        }
    }
}


//TODO
function checkMovementTo(theOldTile, theNewTile, char) {
    //check if the div has an image inside it and read it's ID

}
