// Create a class called TTT
class TTT {


    /*
        Add a constructor that 
        -   defines and initializes all variables
        -   binds the keyword this to the class for each function because
            this will otherwise will refer to the clicked square
            -   this.calculateWinner = this.calculateWinner.bind(this);
            -   DON'T bind this for handleClick at this point
        -   calls the init method
    */
   constructor() {
    this.xIsNext = true;
    this.winner = null;
    this.squares = Array(9).fill(null);
    this.winningLine = Array();
    this.lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];
        this.init();
        this.calculateWinner.bind(this);
        this.highlightWinner.bind(this);
        this.disableAll.bind(this);
        

   }
    /*
        Convert each function to a method
        -   move it inside the class
        -   remove the keyword function
        -   add this to all of the variables that belong to the class
        -   change var to let or const for local variables
        -   add this to all method calls
     
        Init
        -   bind both this and i to handleClick
            -   this.handleClick.bind(this, i);

        CalculateWinner
        -   use destructuring assingment to assign values to
            a b and c in one line

        HandleClick
        -   add a parameter i rather than getting i from this
            -   this now refers to the class not the square
        -   remove the local variable i
        -   add a local variable to refer to the clicked square
            -   remember that squares have an integer id 0 - 8
    */
   init() {
    for (let i = 0; i < 9; i++) 
    {
       document.getElementById(i).onclick = this.handleClick.bind(this, i);
    }

   }
   handleClick(i) {
    
    if (this.xIsNext) 
    {
        document.getElementById(i).innerHTML = "X";
        document.getElementById("status").innerHTML = "Next Player: O";
        this.xIsNext = false;
        this.squares[i] = "X";
        document.getElementById(i).style.pointerEvents = "none";
    }
    else 
    {
        document.getElementById(i).innerHTML = "O";
        document.getElementById("status").innerHTML = "Next Player: X";
        this.xIsNext = true;
        this.squares[i] = "O"
        document.getElementById(i).style.pointerEvents = "none";
    }
    if (this.calculateWinner())
    {
        this.highlightWinner();
    }
}
// testing
calculateWinner() {
    for (let i = 0; i < this.lines.length; i++) {
        /*let a = this.lines[i][0];
        let b = this.lines[i][1];
        let c = this.lines[i][2]; */
        let a, b, c;
        [a, b, c] = [ this.lines[i][0], this.lines[i][1], this.lines[i][2]];
        if (this.squares[a] && this.squares[a] == this.squares[b] && 
        this.squares[a] == this.squares[c]) {
            this.winner = this.squares[a];
            this.winningLine = this.lines[i];
            return true;
        }
    }
    this.winner = null;
    this.winningLine = Array();
    return false;
}

//
highlightWinner() {
    
    
    if (this.winner == "X")
    {
        document.getElementById("status").innerHTML = "X wins!";
    }
    else if (this.winner == "O")
    {
        document.getElementById("status").innerHTML = "O wins!";
    }
    for (let i = 0; i < 3; i++)
    {
        let id = this.winningLine[i];
        document.getElementById(id).style.color = "red";
    }
    this.disableAll();
}

disableAll() {

    
    for (let i = 0; i < 9; i++) 
        {
            document.getElementById(i).style.pointerEvents = "none";
        }
}
}

// declare a variable ttt
let ttt;

// add an onload handler to the window that assigns ttt to a TTT
window.onload = () => {ttt = new TTT();};