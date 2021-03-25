
//store gameboard as an array
<<<<<<< HEAD
<<<<<<< HEAD

=======
let board = ['O','x','x','x','x','x','x','x','x']
>>>>>>> parent of 67afde8 (Update script.js)
=======
let board = ['O','x','x','x','x','x','x','x','x']
>>>>>>> parent of 67afde8 (Update script.js)


//players stored as objects

<<<<<<< HEAD
<<<<<<< HEAD
function Player (sign) {

    this.sign = sign

    this.getSign = ()=>{

        return sign
    }   
    

}

//first move

const gameController = (() => {

    const PlayerX = new Player('X')

    const PlayerO = new Player('O')

    this.currentPlayer = 'X'

    this.changePlayer = () =>{

        if(this.currentPlayer= 'X'){

            this.currentPlayer = 'O'
        }else{
            this.currentPlayer = 'X'
        }
    }



})();

console.log(gameController.currentPlayer)
=======
>>>>>>> parent of 67afde8 (Update script.js)
=======
>>>>>>> parent of 67afde8 (Update script.js)
//gameboard function

const gameBoard = (() =>{

    let board = ['O','O','O','O','O','O','O','O','x']

    const boardDiv = document.getElementById('board')
    
    this.makeGameBoard = () =>{

        for(let i = 0; i < board.length; i++){
           this.makeGameTile(board[i],i)
        }

    }

    this.clearBoard = () => {

        while (boardDiv.firstChild) {
            boardDiv.removeChild(boardDiv.firstChild);
        }
        this.makeGameBoard()
    }

    //function to generate individual tiles on board

    this.makeGameTile = (arrayElement,index) =>{

        

        const gameTile = document.createElement('div')

        gameTile.innerText = arrayElement

        gameTile.classList = 'gametile';

        gameTile.id = `${index}`

        gameTile.addEventListener('click',()=>{

            board[index] = gameController.currentPlayer

            console.log(gameController.currentPlayer)

            gameController.changePlayer

            this.clearBoard()

            console.log(board)
        })

        boardDiv.appendChild(gameTile,index)

        

    }



    this.makeGameBoard()

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