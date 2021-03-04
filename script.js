
//store gameboard as an array
let board = ['O','x','x','x','x','x','x','x','x']


//players stored as objects

//gameboard function
function makeGameBoard(array){

    for(let i = 0; i < array.length; i++){
        makeGameTile(array[i],i)
    }

}

//function to generate individual tiles on board

function makeGameTile(arrayElement,index){

    const board = document.getElementById('board')

    const gameTile = document.createElement('div')

    gameTile.innerText = arrayElement

    gameTile.classList = 'gametile';

    gameTile.id = `${index}`

    board.appendChild(gameTile,index)


    console.log(arrayElement[index])
}

makeGameBoard(board)
