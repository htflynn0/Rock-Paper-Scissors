const prompt=require("prompt-sync")({sigint:true}); 
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

class HumanPlayer extends Player {
    choose(){
        const choices = ['rock', 'paper', 'scissors']
        let input
        while (!choices.includes(input)) {
            input = prompt(`${this.name} enter your choice`).toLowerCase()
            if (!choices.includes(input)){
                console.log("Invalid input, try agaian");
            }
        }
        return input
    }

}

class Computerplayer extends Player {
    choose(){
        const choices = ['rock', 'paper', 'scissors']
        const choice = choices[Math.floor(Math.random() * choices.length)]
        console.log(`${this.name} chose ${choice}` )
        return choice
    }
}

class Game {
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
        this.scores = [0,0,0] //wins , draws, losses persective of player 1
    }
    play(){
        const choice1 = this.player1.choose()
        const choice2 = this.player2.choose()

        const result = this.winner(choice1, choice2)
        if (result === "player1"){
            this.scores[0] ++
            console.log(`${this.player1.name} won`)
        }else if( result === "player2"){
            this.scores[2] ++
            console.log(`${this.player2.name} won` )
        }else if(result === "tie"){
            console.log("its a tie");
            this.scores[1] ++
        }
    }
    
    winner(choice1, choice2) {
        if (choice1 === choice2) return 'tie'
        if (choice1 === 'rock' && choice2 === 'scissors'){
            return "player1"
        }else if (choice1 === 'paper' === choice2 === 'rock'){
            return "player1"
        }else if (choice1 === 'scissors' === choice2 === 'paper'){
            return "player1"
        }
        return "player2"
    }

    startplay(){
        let playAgain = true

        while(playAgain) {
            let rounds = 3
            for (let i = 0; i <rounds ; i++){
                this.play()
            } 
            this.displayWinner()
            const replay = prompt("Do you want to play again (yes/no").toLowerCase()
            if (replay === "yes"){
                this.scores = [0,0,0]
            }else{
                console.log("Thanks for playing")
                playAgain = false
            }
        }   

    }
    displayWinner(){

        if (this.scores[0] > this.scores [2]){
            console.log(`${this.player1.name} is the winner`)
            console.log(`the score was ${this.scores[0]} - ${this.scores[2]} with ${this.scores[1]} ties`)
        }else if(this.scores[2] > this.scores[0]){
            console.log(`${this.player2.name} is the winner`)
            console.log(`the score was ${this.scores[2]} - ${this.scores[0]} with ${this.scores[1]} ties`)
        }else{
            console.log("it was a tie")
            console.log(`the score was ${this.scores[0]} - ${this.scores[2]} with ${this.scores[1]} ties`)
        }
    }
}

const mac = new Computerplayer('Mac')
const windows = new Computerplayer('Windows')
// const harrison = new HumanPlayer('Harrison')
// const shania = new HumanPlayer('Shania')
const game = new Game(mac, windows)
game.startplay()
