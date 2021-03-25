
//store gameboard as an array




//players stored as objects







//first move

const gameController = (() => {

    const playerX = {
    
        sign: 'X',
    
        getSign: function (){return 'X'}
    
    }
    
    const playerO = {
        
        sign: 'O',
    
        getSign: function (){return 'O'}
    
    }

    let currentPlayer = playerO

    changePlayer = () =>{

        console.log('rip')

        currentPlayer.sign == 'X' ? currentPlayer.sign = 'O' : currentPlayer.sign = 'X'
    }

   

    return{

        currentPlayer,
        changePlayer
    }


})();

console.log(gameController.currentPlayer.sign)


//gameboard function

const gameBoard = (() =>{

    let board = [' ',' ',' ',' ',' ',' ',' ',' ',' ']

    const boardDiv = document.getElementById('board')
    
    const makeGameBoard = () =>{

        for(let i = 0; i < board.length; i++){
           makeGameTile(board[i],i)
        }

        checkWinnerModule.checkWinner

    }

    const clearBoard = () => {

        while (boardDiv.firstChild) {
            boardDiv.removeChild(boardDiv.firstChild);
        }
        makeGameBoard()
    }

    //function to generate individual tiles on board

    const makeGameTile = (arrayElement,index) =>{

        const gameTile = document.createElement('div')

        gameTile.innerText = arrayElement

        gameTile.classList = 'gametile';

        gameTile.id = `${index}`

        gameTile.addEventListener('click',()=>{

            board[index] = gameController.currentPlayer.sign

            gameController.changePlayer()

            console.log(gameController.currentPlayer)

           // gameController.changePlayer

            clearBoard()

        })

        boardDiv.appendChild(gameTile,index)

        

    }

    makeGameBoard()

    return{

    clearBoard,

    board,

    makeGameBoard

    }

   
})();




const checkWinnerModule = (() =>{



    const winningIndexes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    checkWinner = () =>{

    winningIndexes.forEach((array) => {

        console.log(gameController.currentPlayer.sign)

        if( gameBoard.board[array[0]] === gameController.currentPlayer.sign && gameBoard.board[array[2]] === gameController.currentPlayer.sign && gameBoard.board[array[1]]=== gameController.currentPlayer.sign){
            console.log(gameController.currentPlayer.sign)
        }
    
    })

    }


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