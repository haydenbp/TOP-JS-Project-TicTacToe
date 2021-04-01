

const gameController = (() => {

    let currentPlayer = {   
        sign: 'X',
    }

    changePlayer = () =>{
        currentPlayer.sign == 'X' ? currentPlayer.sign = 'O' : currentPlayer.sign = 'X'
        console.log(currentPlayer.sign)
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
    }

    const zeroBoard = () =>{
        for (let i = 0; i < board.length; i++) {
            board[i] = ' ';
        }
        console.log(board)
    }

    const clearBoard = () => {
        while (boardDiv.firstChild) {
            boardDiv.removeChild(boardDiv.firstChild);
        }
        makeGameBoard()
    }

    //function to generate individual tiles on board

    const makeGameTile = (elementElement,index) =>{

        const gameTile = document.createElement('div')
        gameTile.innerText = elementElement
        gameTile.classList = 'gametile';
        gameTile.id = `${index}`

        gameTile.addEventListener('click',()=>{
            board[index] = gameController.currentPlayer.sign
            CheckWinnerModule.checkWinner()
            gameBoard.clearBoard()
            gameController.changePlayer()
        })

        boardDiv.appendChild(gameTile)       

    }

    makeGameBoard()

    return{
    clearBoard,
    zeroBoard,
    board,
    boardDiv,
    makeGameBoard
    }

   
})();




const CheckWinnerModule = (() => {

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
    const finCOn = document.getElementById('finalContainer')
    const winnerDiv = document.getElementById('win')
    const drawDiv = document.getElementById('draw')

  

    const displayWinner = () =>{

        

        winnerDiv.innerText = 'The Winner is: ' + gameController.currentPlayer.sign
        winnerDiv.style.display = 'block'

        winnerDiv.addEventListener('click',()=>{
            resetGame()
        })

        console.log('win')
    }

    const displayDraw = () =>{

        drawDiv.innerText = 'Draw'
        drawDiv.style.display = 'block'

        drawDiv.addEventListener('click',()=>{
            resetGame()
        })
        
        console.log('draw')
    }

    const resetGame = () =>{
        gameBoard.zeroBoard()
        gameBoard.clearBoard()
        drawDiv.style.display = 'none'
        winnerDiv.style.display = 'none'
    }

    const checkWinner = () =>{

        console.log('reWWWWe')
        
        winningIndexes.forEach(element => {

            

            console.log(gameBoard.board[element[0]],gameBoard.board[element[1]],gameBoard.board[element[2]])
            if( gameBoard.board[element[0]] === gameController.currentPlayer.sign && gameBoard.board[element[1]] === gameController.currentPlayer.sign && gameBoard.board[element[2]]=== gameController.currentPlayer.sign){
                displayWinner()
            }

            else if(!gameBoard.board.includes(" ")){
                displayDraw()
            }
        })

    }

    return {checkWinner}

})();

/*
const CheckWinnerModule = (() => {


    const checkWinner = () => {console.log('jeeez')}


    return {checkWinner}





})();
/*
/*
How do i interact?

pick X or O

player 1 goes than player two




what does it need to do?

pick x or o

store game board in element

change the board when interacted with

check to see if anyone wins

make sure you cant play same tile twice

store players*/