//build rock paper scissors game
//3 classes player, human player, computerplayer
//create a game class to handle the logic of the game


//Pseudocode
/*

class - player (
properties: name
)

class - human player - inherits from player(
methods - choose()
)

class- computerplayer - inherits from player
methods - choose()

*/

class Player {
    constructor(name){
        this.name = name
    }
    choose() {
        throw new Error('THis methos should be called within a subclass')
    }
}