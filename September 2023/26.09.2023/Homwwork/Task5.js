class Candy {
    constructor(type) {
        this.type = type;
        // Types: Chocolate, Vanilla, Green, Blue
    }

    explode() {
        // if swapped suceecful generate explod animation 
    }
}

class GameBoard {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.grid = []; 
    }

    initialize() {
        for (let i = 0; i < this.rows * this.columns; i++) {
            let randomCandyGenerated = Math.floor(Math.random() * 3) + 1;
            let candyType;
        
            switch (randomCandyGenerated) {
                case 1:
                    candyType = "blue";
                    break;
                case 2:
                    candyType = "green";
                    break;
                case 3:
                    candyType = "chocolate";
                    break;
                default:
                    break;
            }
        
            this.grid.push(new Candy(candyType));
        }
    }

    swapCandies(candy1, candy2) {
        checkForMatches()
        // Swap two candies on the grid
    }

    checkForMatches() {
        // Check for and handle candy matches on the grid
    }

    // Render the game board
    render() {
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.movesLeft = 30; 
    }

    makeMove() {
        this.movesLeft--
    }
}
