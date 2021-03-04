
//store gameboard as an array
let board = ['O','x','x','x','x','x','x','x','x']


//players stored as objects

//gameboard function

const gameBoard = (() =>{

    const boardDiv = document.getElementById('board')
    
    function makeGameBoard(){

        for(let i = 0; i < board.length; i++){
            makeGameTile(board[i],i)
        }

    }

    function clearBoard() {
        while (boardDiv.firstChild) {
            boardDiv.removeChild(boardDiv.firstChild);
        }
        makeGameBoard()
    }

    //function to generate individual tiles on board

    function makeGameTile(arrayElement,index){

        

        const gameTile = document.createElement('div')

        gameTile.innerText = arrayElement

        gameTile.classList = 'gametile';

        gameTile.id = `${index}`

        gameTile.addEventListener('click',()=>{

            board[index] = 'x';

            clearBoard()

            console.log(board)
        })

        boardDiv.appendChild(gameTile,index)

        

    }



    return makeGameBoard()

})();

/*
How do i interact?

pick X or O

player 1 goes than player two



what does it need to do?

pick x or o

store game board in array

change the board when interacted with

check to see if anyone wins

make sure you cant play same tile twice

store players*/