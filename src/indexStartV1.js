// start with these global variables
var xIsNext = true;
var winner = null;
var squares = Array(9).fill(null);
var winningLine = Array();
var lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

function init()
{
    // Add an onclick handler to all of the squares
    // The name attribute for all of the divs is square
    // Use the function handleClick to handle the event 
    for (var i = 0; i < 9; i++) 
    {
       document.getElementById(i).onclick = handleClick;
    }
}

function handleClick() {

    // Get the id from the square and put it in a variable
    // Remember that the id is an integer 0 - 8

    // Set the element in the squares array to the player's symbol
    // Update the inner html for this square in the UI
    // Set the onclick handler for this square in the UI to an empty anonymous function or arrow function
    // Update the variable xIsNext

    // If calculateWinner returns true
    // highlight the winner and disable all of the squares
    // otherwise update the status in the UI to display the player
    
    if (xIsNext) 
    {
        document.getElementById(this.id).innerHTML = "X";
        document.getElementById("status").innerHTML = "Next Player: O";
        xIsNext = false;
        squares[this.id] = "X";
        document.getElementById(this.id).style.pointerEvents = "none";
    }
    else 
    {
        document.getElementById(this.id).innerHTML = "O";
        document.getElementById("status").innerHTML = "Next Player: X";
        xIsNext = true;
        squares[this.id] = "O"
        document.getElementById(this.id).style.pointerEvents = "none";
    }
    if (calculateWinner())
    {
        highlightWinner();
    }
}

function calculateWinner() {
    for (var i = 0; i < lines.length; i++) {
        var a = lines[i][0];
        var b = lines[i][1];
        var c = lines[i][2];       
        if (squares[a] && squares[a] == squares[b] && 
        squares[a] == squares[c]) {
            winner = squares[a];
            winningLine = lines[i];
            return true;
        }
    }
    winner = null;
    winningLine = Array();
    return false;
}

//
function highlightWinner() {
    
    // Update the status in the UI to display the winner
    // Iterate through the winningLine array.  It contains the indices of the winning squares
    //      get the next square using the current index in the winningLine array as the id
    //      add the class red to the square
    // Disable all of the squares
    if (winner == "X")
    {
        document.getElementById("status").innerHTML = "X wins!";
    }
    else if (winner == "O")
    {
        document.getElementById("status").innerHTML = "O wins!";
    }
    for (var i = 0; i < 3; i++)
    {
        var id = winningLine[i];
        document.getElementById(id).style.color = "red";
    }
    disableAll();
}

function disableAll() {

    // Set the onclick handler for all squares to function that does nothing
    // The id of the square is a number 0 - 8
    for (var i = 0; i < 9; i++) 
        {
            document.getElementById(i).style.pointerEvents = "none";
        }
}

// When the page has finished loading, call the function init    
window.onload = init;