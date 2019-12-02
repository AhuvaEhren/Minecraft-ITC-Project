var minecraft_game = {};

minecraft_game.board = document.getElementById("board");
minecraft_game.columns = 24;
minecraft_game.rows = 15;


//board
minecraft_game.createBoard = function () {
    
    for(let i = 0; i < minecraft_game.columns; i++){
        let colDiv = document.createElement("div");
        for(let j = 0; j < minecraft_game.rows; j++){
            let Div = document.createElement("div");
            Div.classList.add("box");
            Div.classList.add("row"+j);
            Div.classList.add("col"+i);
            colDiv.appendChild(Div);
        }
        colDiv.classList.add("col"+i);
        minecraft_game.board.appendChild(colDiv)
     }
    }

minecraft_game.createBoard();