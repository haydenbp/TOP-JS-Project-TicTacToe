
//store gameboard as an element




//players stored as objects







//first move

const gameController = (() => {

    let currentPlayer = {
    
        sign: 'X',
    
        
    
    }
    


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

            

            console.log(gameController.currentPlayer,'ree')

           // gameController.changePlayer
           

           CheckWinnerModule.checkWinner()

           

           gameController.changePlayer()

            

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

    console.log('rEEEE')

    const displayWinner = () =>{

        console.log(gameController.currentPlayer.sign + ' ree  wins')


        //change style of winner div
    }

    const displayDraw = () =>{

        console.log(gameController.currentPlayer.sign + ' ree  wins')


        //change style of winner div
    }






    const checkWinner = () =>{

        console.log('reWWWWe')
        
        winningIndexes.forEach(element => {

            gameBoard.clearBoard()

            if( gameBoard.board[element[0]] === gameController.currentPlayer.sign && gameBoard.board[element[2]] === gameController.currentPlayer.sign && gameBoard.board[element[1]]=== gameController.currentPlayer.sign){
                displayWinner()
             }

            else if(!gameBoard.board.includes(" ")){

                console.log('draw')
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